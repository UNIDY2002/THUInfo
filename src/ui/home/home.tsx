import React from "react";
import {HomeNav} from "./homeStack";
import {SortableList} from "../../components/home/sortableList";
import entranceMap from "../../components/home/entranceMap";

export const HomeScreen = ({navigation}: {navigation: HomeNav}) => (
	<SortableList editing={true} onDragEnd={() => {}}>
		{([
			"report",
			"physicalExam",
			"teachingEvaluation",
			"classroomState",
			"library",
			"expenditure",
			"dormScore",
		] as (keyof typeof entranceMap)[]).map((key) =>
			entranceMap[key](navigation),
		)}
	</SortableList>
);
