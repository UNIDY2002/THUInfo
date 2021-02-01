import React from "react";
import {HomeNav} from "../../ui/home/homeStack";
import {HomeIcon, iconSize} from "./icon";
import IconReport from "../../assets/icons/IconReport";
import IconPhysicalExam from "../../assets/icons/IconPhysicalExam";
import IconEvaluation from "../../assets/icons/IconEvaluation";
import IconClassroom from "../../assets/icons/IconClassroom";
import IconLibrary from "../../assets/icons/IconLibrary";
import IconExpenditure from "../../assets/icons/IconExpenditure";
import IconDormScore from "../../assets/icons/IconDormScore";

export default {
	report: (navigation: HomeNav) => (
		<HomeIcon
			title="report"
			key="report"
			onPress={() => navigation.navigate("Report")}>
			<IconReport width={iconSize} height={iconSize} />
		</HomeIcon>
	),
	physicalExam: (navigation: HomeNav) => (
		<HomeIcon
			title="physicalExam"
			key="physicalExam"
			onPress={() => navigation.navigate("PhysicalExam")}>
			<IconPhysicalExam width={iconSize} height={iconSize} />
		</HomeIcon>
	),
	teachingEvaluation: (navigation: HomeNav) => (
		<HomeIcon
			title="teachingEvaluation"
			key="teachingEvaluation"
			onPress={() => navigation.navigate("Evaluation")}>
			<IconEvaluation width={iconSize} height={iconSize} />
		</HomeIcon>
	),
	classroomState: (navigation: HomeNav) => (
		<HomeIcon
			title="classroomState"
			key="classroomState"
			onPress={() => navigation.navigate("ClassroomList")}>
			<IconClassroom width={iconSize} height={iconSize} />
		</HomeIcon>
	),
	library: (navigation: HomeNav) => (
		<HomeIcon
			title="library"
			key="library"
			onPress={() => navigation.navigate("Library")}>
			<IconLibrary width={iconSize} height={iconSize} />
		</HomeIcon>
	),
	expenditure: (navigation: HomeNav) => (
		<HomeIcon
			title="expenditure"
			key="expenditure"
			onPress={() => navigation.navigate("Expenditure")}>
			<IconExpenditure width={iconSize} height={iconSize} />
		</HomeIcon>
	),
	dormScore: (navigation: HomeNav) => (
		<HomeIcon
			title="dormScore"
			key="dormScore"
			onPress={() => navigation.navigate("DormScore")}>
			<IconDormScore width={iconSize} height={iconSize} />
		</HomeIcon>
	),
};
