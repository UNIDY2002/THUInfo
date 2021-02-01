const mockRNGestureHandlerModule = "react-native-gesture-handler/dist/src/__mocks__/RNGestureHandlerModule.js";
jest.mock("react-native-gesture-handler", () => mockRNGestureHandlerModule);
import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";

require("./node_modules/react-native-reanimated/src/reanimated2/jestUtils").setUpTests();
global.__reanimatedWorkletInit = jest.fn();

global.console = {
	log: console.log,
	error: jest.fn((message) => {
		try {
			if (
				message.indexOf(
					"An update to CardContainer inside a test was not wrapped in act(...).",
				) === -1
			) {
				console.error(message);
			}
		} catch (e) {}
	}),
	warn: console.warn,
	info: console.info,
	debug: console.debug,
};

jest.mock("react-native-fs", () => ({
		DocumentDirectoryPath: "",
		downloadFile: jest.fn(),
	}),
);

jest.mock("react-native-reanimated", () => ({
	...jest.requireActual("react-native-reanimated/mock"),
	useSharedValue: jest.fn,
	useAnimatedStyle: jest.fn,
	withTiming: jest.fn,
	withSpring: jest.fn,
	withRepeat: jest.fn,
	withSequence: jest.fn,
	useAnimatedProps: jest.fn,
	Easing: {
		linear: jest.fn,
		elastic: jest.fn,
		inOut: jest.fn,
	},
}));

jest.mock("react-native-view-shot", () => ({
	RNViewShot: jest.fn().mockResolvedValue(),
}));

jest.mock("@react-native-community/async-storage", () => mockAsyncStorage);

jest.mock("react-native-keychain", () => ({
	SECURITY_LEVEL_ANY: "MOCK_SECURITY_LEVEL_ANY",
	SECURITY_LEVEL_SECURE_SOFTWARE: "MOCK_SECURITY_LEVEL_SECURE_SOFTWARE",
	SECURITY_LEVEL_SECURE_HARDWARE: "MOCK_SECURITY_LEVEL_SECURE_HARDWARE",
	setGenericPassword: jest.fn().mockResolvedValue(),
	getGenericPassword: jest.fn().mockResolvedValue(),
	resetGenericPassword: jest.fn().mockResolvedValue(),
}));

jest.mock("react-native-snackbar", () => ({LENGTH_LONG: 0, LENGTH_SHORT: 0}));

jest.mock("@react-native-community/cookies", () => ({
	clearAll: jest.fn().mockResolvedValue(),
}));

jest.mock("redux-persist/lib/createPersistoid", () =>
	jest.fn(() => ({
		update: jest.fn(),
		flush: jest.fn(),
	})),
);
