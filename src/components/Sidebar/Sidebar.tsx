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
            border: 'none',
            display: "flex",
            alignItems: "space-between",
            flexDirection: "column",
            boxShadow: theme === 'light' ? 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}>
            <div style={{ background: theme === 'light' ? "#fff" : "#363537", padding: "22px 10px 50px 0px" }} >
                <div style={{ marginBottom: "70px", paddingLeft: "20px" }}>{theme === 'light' ? <LogoDark /> : <LogoLight />}</div>
                <StyledMenu>
                    <HeadingS style={{ margin: "0", paddingLeft: "20px" }}>All Boards (3)</HeadingS>
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
