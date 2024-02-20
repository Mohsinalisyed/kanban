// MainSidebar.js
import React from 'react';
import { Sidebar, MenuItem } from 'react-pro-sidebar';
import { StyledMenu } from './style';
import { HeadingS } from '../../style';
import LogoDark from '../../lib/Svg/LogoDark';
import LogoLight from '../../lib/Svg/LogoLight';
import { Link} from 'react-router-dom';
import Switch from '../../lib/Ui/Switch';
import { Box } from '../../lib/Ui/Box';
import Flex from '../../lib/Ui/Flex';
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
                <div style={{ marginBottom: "45px", paddingLeft: "20px" }}>{theme === 'light' ? <LogoDark /> : <LogoLight />}</div>
                <StyledMenu>
                    <HeadingS style={{ margin: "0", paddingLeft: "20px", color: theme === 'light' ? "#828FA3" : "#828FA3" }}>All Boards (3)</HeadingS>
                    <MenuItem component={<Link to='/platform'/>} style={{ color: theme === 'light' ? "#828FA3" : "#828FA3" }}>
                       Platform Launch
                    </MenuItem>
                    <MenuItem style={{ color: theme === 'light' ? "#828FA3" : "#828FA3" }}>Marketing Plan</MenuItem>
                    <MenuItem style={{ color: theme === 'light' ? "#828FA3" : "#828FA3" }}>Roadmap</MenuItem>
                    <MenuItem style={{ color: "#635FC7" }}><HeadingS>+ Create New Board</HeadingS></MenuItem>
                </StyledMenu>
                <Flex justify='center' style={{ background: theme === 'light' ? '#E4EBFA' :"black", marginLeft:"20px" ,width:"185px",padding:"10px"}}>
                    <Switch id="themeSwitch" toggled={theme === 'dark'} onChange={toggleTheme} />
                </Flex>
            </div>
        </Sidebar >
    );
};

export default MainSidebar;
