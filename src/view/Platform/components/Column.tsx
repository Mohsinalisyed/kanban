// Column.js
import React from "react";
import { Box } from "../../../lib/Ui/Box";
import { HeadingS } from "../../../style";
import Task from "./Task";


const Column = ({ columns, status, theme }: any) => {
    return (
        <Box>
            <HeadingS style={{ color: "#828FA3", marginBottom: "24px" }}>{status}</HeadingS>
            {columns.map((column: any) => (
                <Box key={column.name}>
                    {
                        column.tasks
                            .filter((task: any) => task.status === status)
                            .map((task: any) => (
                                <Task key={task.title} task={task} theme={theme} />
                            ))
                    }
                </Box>
            ))
            }
        </Box >
    );
};

export default Column;
