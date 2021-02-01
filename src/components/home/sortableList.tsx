import React, {ReactElement} from "react";
import Animated, {
	useAnimatedRef,
	useAnimatedScrollHandler,
	useSharedValue,
} from "react-native-reanimated";
import {COL, SIZE} from "./sortableConfig";
import {SortableItem} from "./sortableItem";

export const SortableList = ({
	children,
	editing,
	onDragEnd,
}: {
	children: ReactElement<{title: string}>[];
	editing: boolean;
	onDragEnd: () => void;
}) => {
	const scrollY = useSharedValue(0);
	const scrollView = useAnimatedRef<Animated.ScrollView>();
	const sequence = useSharedValue(children.map((child) => child.props.title));
	const onScroll = useAnimatedScrollHandler({
		onScroll: ({contentOffset: {y}}) => {
			scrollY.value = y;
		},
	});

	return (
		<Animated.ScrollView
			onScroll={onScroll}
			ref={scrollView}
			contentContainerStyle={{
				height: Math.ceil(children.length / COL) * SIZE,
			}}
			showsVerticalScrollIndicator={false}
			bounces={false}
			scrollEventThrottle={16}>
			{children.map((child) => (
				<SortableItem
					key={child.props.title}
					sequence={sequence}
					id={child.props.title}
					editing={editing}
					onDragEnd={onDragEnd}
					scrollView={scrollView}
					scrollY={scrollY}>
					{child}
				</SortableItem>
			))}
		</Animated.ScrollView>
	);
};
