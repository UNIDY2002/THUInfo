import Svg, {Path} from "react-native-svg";
import React from "react";
import {svgGenerator} from "../../utils/svgGenerator";

export default svgGenerator((width, height, colors) => (
	<Svg viewBox="0 0 1024 1024" width={width} height={height}>
		<Path
			d="M470.95,968.59c-11.05,0 -20,-8.95 -20,-20V768.16c0,-28.71 -11.28,-55.8 -31.75,-76.28 -20.47,-20.47 -47.56,-31.75 -76.28,-31.75s-55.8,11.28 -76.28,31.75c-20.47,20.47 -31.75,47.56 -31.75,76.28v180.43c0,11.05 -8.95,20 -20,20s-20,-8.95 -20,-20V768.16c0,-81.62 66.4,-148.02 148.02,-148.02s148.02,66.4 148.02,148.02v180.43c0.02,11.05 -8.94,20 -19.98,20z"
			fill={colors.dark}
		/>
		<Path
			d="M302.56,968.59c-11.05,0 -20,-8.95 -20,-20V820.9c0,-11.05 8.95,-20 20,-20s20,8.95 20,20v127.69c0,11.05 -8.96,20 -20,20zM383.58,968.59c-11.05,0 -20,-8.95 -20,-20V820.76c0,-11.05 8.95,-20 20,-20s20,8.95 20,20V948.6c0,11.04 -8.96,19.99 -20,19.99zM342.92,660.14c-11.05,0 -20,-8.95 -20,-20V322.88c0,-11.05 8.95,-20 20,-20s20,8.95 20,20v317.26c0,11.04 -8.95,20 -20,20zM342.92,277.18c-11.05,0 -20,-8.95 -20,-20v-8.96c0,-11.05 8.95,-20 20,-20s20,8.95 20,20v8.96c0,11.05 -8.95,20 -20,20zM342.92,208.5c-11.05,0 -20,-8.95 -20,-20v-71.32c0,-11.05 8.95,-20 20,-20s20,8.95 20,20v71.32c0,11.04 -8.95,20 -20,20z"
			fill={colors.dark}
		/>
		<Path
			d="M781.37,968.59h-237.2c-11.05,0 -20,-8.95 -20,-20s8.95,-20 20,-20H763.5l50.61,-449.61c0.56,-4.93 -0.72,-9.18 -3.79,-12.61 -5.47,-6.12 -16.5,-9.63 -30.26,-9.63H488.52c-3.41,2.92 -9.9,11.9 -8.73,22.24l14.5,128.82c1.24,10.98 -6.66,20.88 -17.64,22.11 -10.97,1.24 -20.88,-6.66 -22.11,-17.64l-14.5,-128.82c-2.04,-18.17 4.3,-37.48 16.97,-51.65 8.68,-9.71 18.79,-15.06 28.48,-15.06h294.56c32.69,0 50.72,12.49 60.09,22.97 10.67,11.94 15.54,27.47 13.71,43.74l-52.61,467.37c-1.13,10.13 -9.69,17.77 -19.87,17.77z"
			fill={colors.dark}
		/>
		<Path
			d="M646.94,625.93c-59.51,0 -107.92,-48.41 -107.92,-107.92 0,-1.25 0.02,-2.49 0.06,-3.73 0.38,-11.04 9.66,-19.68 20.67,-19.3 11.04,0.38 19.68,9.64 19.3,20.67 -0.03,0.78 -0.04,1.57 -0.04,2.35 0,37.45 30.47,67.92 67.92,67.92s67.92,-30.47 67.92,-67.92c0,-1.58 -0.05,-3.18 -0.16,-4.74 -0.76,-11.02 7.56,-20.57 18.58,-21.32 11.03,-0.77 20.57,7.56 21.32,18.58 0.17,2.47 0.26,4.99 0.26,7.48 0.01,59.51 -48.4,107.93 -107.91,107.93zM383.58,765.92h-81.02c-11.05,0 -20,-8.95 -20,-20s8.95,-20 20,-20h81.02c11.05,0 20,8.95 20,20s-8.96,20 -20,20z"
			fill={colors.blue}
		/>
	</Svg>
));