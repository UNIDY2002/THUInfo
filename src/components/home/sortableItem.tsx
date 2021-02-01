import React, {ReactNode, RefObject} from "react";
import {Dimensions, StyleSheet} from "react-native";
import Animated, {
	useAnimatedGestureHandler,
	useAnimatedStyle,
	useAnimatedReaction,
	withSpring,
	scrollTo,
	withTiming,
	useSharedValue,
	runOnJS,
} from "react-native-reanimated";
import {
	PanGestureHandler,
	PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {
	animationConfig,
	COL,
	getOrder,
	getPosition,
	SIZE,
} from "./sortableConfig";

export const SortableItem = ({
	children,
	sequence,
	id,
	onDragEnd,
	scrollView,
	scrollY,
	editing,
}: {
	children: ReactNode;
	sequence: Animated.SharedValue<string[]>;
	id: string;
	editing: boolean;
	onDragEnd: () => void;
	scrollView: RefObject<Animated.ScrollView>;
	scrollY: Animated.SharedValue<number>;
}) => {
	const inset = useSafeAreaInsets();
	const containerHeight =
		Dimensions.get("window").height - inset.top - inset.bottom;
	const contentHeight = (sequence.value.length / COL) * SIZE;
	const isGestureActive = useSharedValue(false);

	const position = getPosition(sequence.value.indexOf(id));
	const translateX = useSharedValue(position.x);
	const translateY = useSharedValue(position.y);

	useAnimatedReaction(
		() => sequence.value.indexOf(id),
		(newOrder) => {
			if (!isGestureActive.value) {
				const {x, y} = getPosition(newOrder);
				translateX.value = withTiming(x, animationConfig);
				translateY.value = withTiming(y, animationConfig);
			}
		},
	);

	const onGestureEvent = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		{x: number; y: number}
	>({
		onStart: (_, ctx) => {
			if (editing) {
				ctx.x = translateX.value;
				ctx.y = translateY.value;
				isGestureActive.value = true;
			}
		},
		onActive: ({translationX, translationY}, ctx) => {
			if (editing) {
				translateX.value = ctx.x + translationX;
				translateY.value = ctx.y + translationY;
				// 1. We calculate where the tile should be
				const newOrder = getOrder(
					translateX.value,
					translateY.value,
					sequence.value.length - 1,
				);

				// 2. We swap the positions
				const oldOlder = sequence.value.indexOf(id);
				if (newOrder !== oldOlder) {
					const idToSwap = sequence.value.find(
						(key) => sequence.value.indexOf(key) === newOrder,
					);
					if (idToSwap) {
						// Spread operator is not supported in worklets
						const newSeq = Array.apply([], sequence.value) as string[];
						newSeq[newOrder] = id;
						newSeq[oldOlder] = idToSwap;
						sequence.value = newSeq;
					}
				}

				// 3. Scroll up and down if necessary
				const lowerBound = scrollY.value;
				const upperBound = lowerBound + containerHeight - SIZE;
				const maxScroll = contentHeight - containerHeight;
				const leftToScrollDown = maxScroll - scrollY.value;
				if (translateY.value < lowerBound) {
					const diff = Math.min(lowerBound - translateY.value, lowerBound);
					scrollY.value -= diff;
					scrollTo(scrollView, 0, scrollY.value, false);
					ctx.y -= diff;
					translateY.value = ctx.y + translationY;
				}
				if (translateY.value > upperBound) {
					const diff = Math.min(
						translateY.value - upperBound,
						leftToScrollDown,
					);
					scrollY.value += diff;
					scrollTo(scrollView, 0, scrollY.value, false);
					ctx.y += diff;
					translateY.value = ctx.y + translationY;
				}
			}
		},
		onEnd: () => {
			const newPosition = getPosition(sequence.value.indexOf(id));
			translateX.value = withTiming(newPosition.x, animationConfig, () => {
				isGestureActive.value = false;
				runOnJS(onDragEnd)();
			});
			translateY.value = withTiming(newPosition.y, animationConfig);
		},
	});
	const style = useAnimatedStyle(() => {
		const zIndex = isGestureActive.value ? 100 : 0;
		const scale = withSpring(isGestureActive.value ? 1.05 : 1);
		return {
			position: "absolute",
			top: 0,
			left: 0,
			width: SIZE,
			height: SIZE,
			zIndex,
			transform: [
				{translateX: translateX.value},
				{translateY: translateY.value},
				{scale},
			],
		};
	});
	return (
		<Animated.View style={style}>
			<PanGestureHandler enabled={editing} onGestureEvent={onGestureEvent}>
				<Animated.View style={StyleSheet.absoluteFill}>
					{children}
				</Animated.View>
			</PanGestureHandler>
		</Animated.View>
	);
};
