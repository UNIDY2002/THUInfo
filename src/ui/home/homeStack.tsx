import React from "react";
import {
	createStackNavigator,
	StackNavigationProp,
} from "@react-navigation/stack";
import {HomeScreen} from "./home";
import {ReportScreen} from "./report";
import {EvaluationScreen} from "./evaluation";
import {FormScreen} from "./form";
import {getStr} from "../../utils/i18n";
import {ExpenditureScreen} from "./expenditure";
import {ClassroomListScreen} from "./classroomList";
import {ClassroomDetailScreen} from "./classroomDetail";
import {RouteProp} from "@react-navigation/native";
import {DormScoreScreen} from "./dormScore";
import {LibraryScreen} from "./library";
import {LibraryFloorScreen} from "./libraryFloor";
import {LibrarySectionScreen} from "./librarySection";
import {LibrarySeatScreen} from "./librarySeat";
import {PhysicalExamScreen} from "./physicalExam";
import {TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import themes from "../../assets/themes/themes";
import {LibraryMapScreen, LibrarySeatMapScreen} from "./libraryMap";
import {
	Library,
	LibraryFloor,
	LibrarySection,
} from "thu-info-lib/dist/models/home/library";
import {useColorScheme} from "react-native";
import {EmailScreen} from "./email";
import {EmailListScreen} from "./emailList";

export type HomeStackParamList = {
	Home: undefined;
	Report: undefined;
	Evaluation: undefined;
	Form: {name: string; url: string};
	PhysicalExam: undefined;
	Expenditure: undefined;
	ClassroomList: undefined;
	ClassroomDetail: {name: string};
	Library: undefined;
	LibraryFloor: {library: Library; dateChoice: 0 | 1};
	LibrarySection: {floor: LibraryFloor; dateChoice: 0 | 1};
	LibrarySeat: {section: LibrarySection; dateChoice: 0 | 1};
	LibraryMap: {floor: LibraryFloor; dateChoice: 0 | 1};
	LibrarySeatMap: {section: LibrarySection};
	DormScore: undefined;
	Email: {messageId: number};
	EmailList: undefined;
};

export type FormRouteProp = RouteProp<HomeStackParamList, "Form">;
export type ClassroomDetailRouteProp = RouteProp<
	HomeStackParamList,
	"ClassroomDetail"
>;
export type LibraryMapRouteProp = RouteProp<HomeStackParamList, "LibraryMap">;
export type LibrarySeatRouteProp = RouteProp<HomeStackParamList, "LibrarySeat">;
export type LibrarySeatMapRouteProp = RouteProp<
	HomeStackParamList,
	"LibrarySeatMap"
>;
export type EmailRouteProp = RouteProp<HomeStackParamList, "Email">;

const Stack = createStackNavigator<HomeStackParamList>();

export type HomeNav = StackNavigationProp<HomeStackParamList>;

export const HomeStackScreen = () => {
	const themeName = useColorScheme();
	const theme = themes(themeName);

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				options={{title: getStr("home")}}
			/>
			<Stack.Screen
				name="Report"
				component={ReportScreen}
				options={{title: getStr("report")}}
			/>
			<Stack.Screen
				name="Evaluation"
				component={EvaluationScreen}
				options={{title: getStr("teachingEvaluation")}}
			/>
			<Stack.Screen
				name="Form"
				component={FormScreen}
				options={({route}) => ({title: route.params.name})}
			/>
			<Stack.Screen
				name="PhysicalExam"
				component={PhysicalExamScreen}
				options={{title: getStr("physicalExam")}}
			/>
			<Stack.Screen
				name="Expenditure"
				component={ExpenditureScreen}
				options={{title: getStr("expenditure")}}
			/>
			<Stack.Screen
				name="ClassroomList"
				component={ClassroomListScreen}
				options={{title: getStr("classroomState")}}
			/>
			<Stack.Screen
				name="ClassroomDetail"
				component={ClassroomDetailScreen}
				options={({route}) => ({title: route.params.name})}
			/>
			<Stack.Screen
				name="Library"
				component={LibraryScreen}
				options={{title: getStr("library")}}
			/>
			<Stack.Screen
				name="LibraryFloor"
				component={LibraryFloorScreen}
				options={({route}) => ({title: route.params.library.zhName})}
			/>
			<Stack.Screen
				name="LibrarySection"
				component={LibrarySectionScreen}
				options={({route, navigation}) => ({
					title: route.params.floor.zhNameTrace,
					headerRight: () => (
						<TouchableOpacity
							style={{paddingHorizontal: 16, marginHorizontal: 4}}
							onPress={() => navigation.navigate("LibraryMap", route.params)}>
							<Icon name="search" size={24} color={theme.colors.primary} />
						</TouchableOpacity>
					),
				})}
			/>
			<Stack.Screen
				name="LibrarySeat"
				component={LibrarySeatScreen}
				options={({route, navigation}) => ({
					title: route.params.section.zhNameTrace,
					headerRight: () => (
						<TouchableOpacity
							style={{paddingHorizontal: 16, marginHorizontal: 4}}
							onPress={() =>
								navigation.navigate("LibrarySeatMap", route.params)
							}>
							<Icon name="search" size={24} color={theme.colors.primary} />
						</TouchableOpacity>
					),
				})}
			/>
			<Stack.Screen
				name="LibraryMap"
				component={LibraryMapScreen}
				options={({route}) => ({title: route.params.floor.zhNameTrace})}
			/>
			<Stack.Screen
				name="LibrarySeatMap"
				component={LibrarySeatMapScreen}
				options={({route}) => ({title: route.params.section.zhNameTrace})}
			/>
			<Stack.Screen
				name="DormScore"
				component={DormScoreScreen}
				options={{title: getStr("dormScore")}}
			/>
			<Stack.Screen
				name="Email"
				component={EmailScreen}
				options={{title: getStr("email")}}
			/>
			<Stack.Screen
				name="EmailList"
				component={EmailListScreen}
				options={{title: getStr("email")}}
			/>
		</Stack.Navigator>
	);
};
