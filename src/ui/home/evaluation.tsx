import React, {useEffect, useState} from "react";
import {
	FlatList,
	ActivityIndicator,
	StyleSheet,
	View,
	Text,
} from "react-native";
import {getAssessmentList, getAssessmentForm} from "../../network/basics";
import {Form} from "../../models/home/assessment";
import Snackbar from "react-native-snackbar";
import {getStr} from "../../utils/i18n";
import {BlurView} from "@react-native-community/blur";
import AntDesign from "react-native-vector-icons/AntDesign";
import {TouchableOpacity} from "react-native-gesture-handler";

export const EvaluationScreen = () => {
	// eslint-disable-next-line prettier/prettier
	const [evaluationList, setEvaluationList] = useState<[string, boolean, string][]>();
	const [refreshing, setRefreshing] = useState(true);

	const fetchList = () => {
		setRefreshing(true);
		getAssessmentList()
			.then((res) => {
				setEvaluationList(res);
				setRefreshing(false);
			})
			.catch(() => {
				Snackbar.show({
					text: getStr("networkRetry"),
					duration: Snackbar.LENGTH_SHORT,
				});
				setRefreshing(false);
			});
	};

	const loadForm = (url: string) => {
		setRefreshing(true);
		getAssessmentForm(url)
			.then((res) => {})
			.catch(() => {
				Snackbar.show({
					text: getStr("networkRetry"),
					duration: Snackbar.LENGTH_SHORT,
				});
				setRefreshing(false);
			});
	};
	// TODO

	useEffect(fetchList, []);

	return (
		<View style={styles.container}>
			<FlatList
				data={evaluationList}
				renderItem={({item}) => {
					return item[1] ? (
						<TouchableOpacity
							style={styles.evaluatedStyle}
							onPress={() => loadForm(item[2])}>
							<Text style={styles.lessonNameStyle}>{item[0]}</Text>
							<View style={styles.iconContainerStyle}>
								<Text style={styles.captionStyle}>{getStr("evaluated")}</Text>
								<AntDesign name="check" size={20} color="green" />
							</View>
						</TouchableOpacity>
					) : (
						<TouchableOpacity
							style={styles.notEvaluatedStyle}
							onPress={() => loadForm(item[2])}>
							<Text style={styles.lessonNameStyle}>{item[0]}</Text>
							<View style={styles.iconContainerStyle}>
								<Text style={styles.captionStyle}>
									{getStr("notEvaluated")}
								</Text>
								<AntDesign name="close" size={20} color="red" />
							</View>
						</TouchableOpacity>
					);
				}}
				style={styles.listStyle}
				keyExtractor={(item, index) => `${item.semester}${index}`}
			/>
			{refreshing ? (
				<View style={styles.absoluteContainer}>
					<BlurView
						style={styles.blurViewStyle}
						blurType="light"
						blurAmount={10}
					/>
					<ActivityIndicator size="large" color="purple" />
					<Text style={styles.loadingCaptionStyle}>{getStr("loading")}</Text>
				</View>
			) : null}
		</View>
	);
};
// TODO: theme

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		letterSpacing: 12,
	},

	absoluteContainer: {
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		justifyContent: "center",
		alignItems: "center",
	},

	iconContainerStyle: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},

	blurViewStyle: {
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},

	listStyle: {
		alignSelf: "stretch",
	},

	notEvaluatedStyle: {
		flexDirection: "row",
		backgroundColor: "white",
		justifyContent: "space-between",
		alignItems: "center",
		height: 50,
		padding: 15,
		marginVertical: 8,
		marginHorizontal: 16,
		shadowColor: "grey",
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowOpacity: 0.8,
		shadowRadius: 2,
		borderRadius: 5,
	},

	evaluatedStyle: {
		flexDirection: "row",
		backgroundColor: "lightgrey",
		justifyContent: "space-between",
		alignItems: "center",
		height: 50,
		padding: 15,
		marginVertical: 8,
		marginHorizontal: 16,
		shadowColor: "grey",
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowOpacity: 0.8,
		shadowRadius: 2,
		borderRadius: 5,
	},

	lessonNameStyle: {},

	captionStyle: {
		fontWeight: "bold",
		marginHorizontal: 5,
	},

	loadingCaptionStyle: {
		marginTop: 5,
	},
});
