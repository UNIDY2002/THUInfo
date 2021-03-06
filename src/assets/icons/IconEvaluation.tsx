import Svg, {Path} from "react-native-svg";
import React from "react";
import {svgGenerator} from "../../utils/svgGenerator";

export default svgGenerator((width, height, colors) => (
	<Svg viewBox="0 0 1024 1024" width={width} height={height}>
		<Path
			d="M713.77,905.57H615c-17.67,0 -32,-14.33 -32,-32s14.33,-32 32,-32h98.77c67.16,0 121.8,-54.64 121.8,-121.8V281.79c0,-67.16 -54.64,-121.8 -121.8,-121.8H281.79c-67.16,0 -121.8,54.64 -121.8,121.8v17.21c0,17.67 -14.33,32 -32,32s-32,-14.33 -32,-32v-17.21c0,-102.45 83.35,-185.8 185.8,-185.8h431.98c102.45,0 185.8,83.35 185.8,185.8v437.98c-0,102.45 -83.35,185.8 -185.8,185.8z"
			fill={colors.dark}
		/>
		<Path
			d="M287.1,395.49m-85.5,0a85.5,85.5 0,1 0,170.99 0,85.5 85.5,0 1,0 -170.99,0Z"
			fill={colors.dark}
		/>
		<Path
			d="M409.35,900.57H155.36c-27.91,0 -50.75,-22.84 -50.75,-50.75V607.84c0,-58.44 47.81,-106.25 106.25,-106.25h7.25L283,639.97l73.35,-138.37c1.42,0 2.84,0.03 4.25,0.09 55.11,2.25 99.5,48.02 99.5,103.66v244.49c0,27.91 -22.84,50.75 -50.75,50.75z"
			fill={colors.dark}
		/>
		<Path
			d="M434.01,851c-6.89,0 -13.75,-2.83 -18.69,-8.39 -9.18,-10.32 -8.25,-26.12 2.07,-35.29l253,-225c10.31,-9.18 26.12,-8.25 35.29,2.07 9.18,10.32 8.25,26.12 -2.07,35.29l-253,225A24.91,24.91 0,0 1,434.01 851z"
			fill={colors.dark}
		/>
		<Path
			d="M747,305H477c-13.81,0 -25,-11.19 -25,-25s11.19,-25 25,-25h270c13.81,0 25,11.19 25,25s-11.19,25 -25,25zM748,431H548c-13.81,0 -25,-11.19 -25,-25s11.19,-25 25,-25h200c13.81,0 25,11.19 25,25s-11.19,25 -25,25z"
			fill={colors.green}
		/>
	</Svg>
));
