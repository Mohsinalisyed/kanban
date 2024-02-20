// MainSidebar.js
import React from 'react';
import { Sidebar, MenuItem } from 'react-pro-sidebar';
import Toggle from '../../theme/Toggoler';
import { StyledMenu } from './style';
import { HeadingS } from '../../style';
import LogoDark from '../../lib/Svg/LogoDark';
import LogoLight from '../../lib/Svg/LogoLight';
interface ISidebar {
    theme: string
    toggleTheme: () => void
}
const MainSidebar: React.FC<ISidebar> = ({ theme, toggleTheme }) => {
    return (
        <Sidebar style={{
            border: "none",
            display: "flex",
            alignItems: "space-between",
            flexDirection: "column",
        }}>
            <div style={{ background: theme === 'light' ? "#fff" : "#363537", }} >
                <div>{theme === 'light' ? <LogoDark /> : <LogoLight />}</div>
                <StyledMenu >
                    <HeadingS style={{ margin: "0" }}>All Boards (3)</HeadingS>
                    <MenuItem>Documentation</MenuItem>
                    <MenuItem>Calendar</MenuItem>
                    <MenuItem>Documentation</MenuItem>
                    <MenuItem>Calendar</MenuItem>
                </StyledMenu>
                <Toggle theme={theme} toggleTheme={toggleTheme} />
            </div>
        </Sidebar >
    );
};

export default MainSidebar;
