// MainSidebar.js
import React from 'react';
import { Sidebar, MenuItem } from 'react-pro-sidebar';
import Toggle from '../../theme/Toggoler';
import { StyledMenu } from './style';
import { HeadingS } from '../../style';
interface ISidebar {
    theme: string
    toggleTheme: () => void
}
const MainSidebar: React.FC<ISidebar> = ({ theme, toggleTheme }) => {
    return (
        <Sidebar style={{
            border: "none", display: "flex",
            alignItems: "space-between",
            flexDirection: "column",
            background: theme === 'light' ? "#fff" : "white",
            paddingBottom: "40px"
        }}>
            <StyledMenu >
                <HeadingS style={{ marginTop: "0" }}>All Boards (3)</HeadingS>
                <MenuItem>Documentation</MenuItem>
                <MenuItem>Calendar</MenuItem>
                <MenuItem>Documentation</MenuItem>
                <MenuItem>Calendar</MenuItem>
            </StyledMenu>
            <Toggle theme={theme} toggleTheme={toggleTheme} />
        </Sidebar >
    );
};

export default MainSidebar;
