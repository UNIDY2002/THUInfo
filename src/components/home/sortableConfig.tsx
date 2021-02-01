import {Dimensions} from "react-native";
import {Easing} from "react-native-reanimated";

const {width} = Dimensions.get("window");
export const MARGIN = 8;
export const COL = 3;
export const SIZE = (width - MARGIN) / COL;

export const animationConfig = {
	easing: Easing.inOut(Easing.ease),
	duration: 350,
};

export const getPosition = (position: number) => {
	"worklet";

	return {
		x: (position % COL) * SIZE,
		y: Math.floor(position / COL) * SIZE,
	};
};

export const getOrder = (tx: number, ty: number, max: number) => {
	"worklet";

	const x = Math.round(tx / SIZE) * SIZE;
	const y = Math.round(ty / SIZE) * SIZE;
	const row = Math.max(y, 0) / SIZE;
	const col = Math.max(x, 0) / SIZE;
	return Math.min(row * COL + col, max);
};
