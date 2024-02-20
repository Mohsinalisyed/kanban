// Platform.js
import React from "react";
import styled from "styled-components";
import Column from "./components/Column";
import { kandanData } from "../../utlis/data";
import { Box } from "../../lib/Ui/Box";


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow-x: auto;
  gap:24px;
`;

const Platform = () => {
    return (

        <Box>
            {kandanData.boards.map((board) => (
                <GridContainer>
                    <Column key={board.name} columns={board.columns} status={'Todo'} />
                    <Column key={board.name} columns={board.columns} status={'Doing'} />
                    <Column key={board.name} columns={board.columns} status={'Done'} />
                </GridContainer >

            ))
            }
        </Box >
    );
};

export default Platform;
