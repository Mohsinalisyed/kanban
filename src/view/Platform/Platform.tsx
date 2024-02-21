// Platform.js
import React from "react";
import styled from "styled-components";
import Column from "./components/Column";
import { kandanData } from "../../utlis/data";
import { HeadingL } from "../../style";
import { darkTheme, lightTheme } from "../../theme/Theme";
import { Box, Flex } from "../../lib";

interface IPlatForm {
    theme: string
}
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow-x: auto;
  gap:24px;
`;

const Platform: React.FC<IPlatForm> = ({ theme }) => {
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (

        <Box style={{minWidth:"100vh"}}>
            {kandanData.boards.map((board) => (
                <GridContainer>
                    <Column key={board.name} columns={board.columns} status={'Todo'} theme={theme} />
                    <Column key={board.name} columns={board.columns} status={'Doing'} theme={theme} />
                    <Column key={board.name} columns={board.columns} status={'Done'} theme={theme} />
                    <Flex align="center" justify="center" style={{ background: themeMode.cardbackground, borderRadius: "8px", marginTop: "38px" }}>
                        <HeadingL style={{ color: "#828FA3" }}>+ New Column</HeadingL>
                    </Flex>
                </GridContainer >

            ))
            }
        </Box >
    );
};

export default Platform;
