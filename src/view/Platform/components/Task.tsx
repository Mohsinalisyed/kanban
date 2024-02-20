
import React from "react";
import { HeadingM, HeadingS } from "../../../style";
import { TaskWrapper } from "../style";
import { darkTheme, lightTheme } from "../../../theme/Theme";


const Task = ({ task, theme }: any) => {
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    const completedSubtasks = task.subtasks.filter((subtask: any) => subtask.isCompleted);
    const totalSubtasks = task.subtasks.length;
    return (
        <TaskWrapper style={{ background: themeMode.cardbackground }}>
            <HeadingM>{task.title}</HeadingM>
            {task.subtasks && task.subtasks.length > 0 && (
                <HeadingS style={{ color: "#828FA3", paddingTop: "8px" }}>{completedSubtasks.length} of {totalSubtasks} subtasks</HeadingS>
            )}
        </TaskWrapper>
    );
};

export default Task;
