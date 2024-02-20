
import React from "react";
import { HeadingM, HeadingS } from "../../../style";
import { TaskWrapper } from "../style";


const Task = ({ task }: any) => {
    const completedSubtasks = task.subtasks.filter((subtask: any) => subtask.isCompleted);
    const totalSubtasks = task.subtasks.length;
    return (
        <TaskWrapper>
            <HeadingM>{task.title}</HeadingM>
            {task.subtasks && task.subtasks.length > 0 && (
                <HeadingS style={{ color: "#828FA3", paddingTop: "8px" }}>{completedSubtasks.length} of {totalSubtasks} subtasks</HeadingS>
            )}
        </TaskWrapper>
    );
};

export default Task;
