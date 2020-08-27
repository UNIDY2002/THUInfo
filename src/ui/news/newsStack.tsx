import React from "react";
import {
	createStackNavigator,
	StackNavigationProp,
} from "@react-navigation/stack";
import {NewsScreen} from "./news";
import {getStr} from "../../utils/i18n";
import {NewsDetailScreen} from "./newsDetail";
import {sourceTag, newsSlice} from "src/network/news";

type NewsStackParamList = {
	News: {source: sourceTag};
	NewsDetail: {detail: newsSlice};
};

const Stack = createStackNavigator<NewsStackParamList>();

export type NewsNav = StackNavigationProp<NewsStackParamList>;

export const NewsStackScreen = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="News"
			component={NewsScreen}
			options={({route}) => ({
				title:
					route.params === undefined
						? getStr("news")
						: getStr(route.params.source),
			})}
		/>
		<Stack.Screen
			name="NewsDetail"
			component={NewsDetailScreen}
			options={{title: getStr("newsDetail")}}
		/>
	</Stack.Navigator>
);
