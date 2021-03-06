import {SettingsItem, SettingsSeparator} from "../../components/settings/items";
import {getStr} from "../../utils/i18n";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import {Text, View} from "react-native";
import {performLoseCard} from "../../components/home/loseCard";
import {SettingsNav} from "./settingsStack";
import {helper} from "../../redux/store";
import {AlipayPopup} from "../../components/home/alipayPopup";
import {doAlipay} from "../../utils/alipay";
import {useColorScheme} from "react-native";
import themes from "../../assets/themes/themes";

export const ExperimentalScreen = ({navigation}: {navigation: SettingsNav}) => {
	const themeName = useColorScheme();
	const {colors} = themes(themeName);
	return (
		<View style={{padding: 10}}>
			<Text style={{padding: 8, textAlign: "center", color: colors.text}}>
				{getStr("experimentalHint")}
			</Text>
			<SettingsItem
				text={getStr("loseCard")}
				onPress={performLoseCard}
				icon={<Feather name="credit-card" size={16} />}
			/>
			<SettingsSeparator />
			{!helper.mocked() && (
				<AlipayPopup
					onPay={(money) => helper.getEleRechargePayCode(money).then(doAlipay)}
					trigger={(onPress) => (
						<SettingsItem
							text={getStr("eleRecharge")}
							onPress={onPress}
							icon={<Feather name="zap" size={16} />}
						/>
					)}
				/>
			)}
			<SettingsItem
				text={getStr("eleRecord")}
				onPress={() => navigation.navigate("EleRecord")}
				icon={<Feather name="zap" size={16} />}
			/>
		</View>
	);
};
