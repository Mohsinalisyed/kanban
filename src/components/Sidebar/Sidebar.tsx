// MainSidebar.js
import React from 'react';
import { Sidebar, MenuItem } from 'react-pro-sidebar';
import { StyledMenu } from './style';
import { HeadingS } from '../../style';
import LogoDark from '../../lib/Svg/LogoDark';
import LogoLight from '../../lib/Svg/LogoLight';
import { Link } from 'react-router-dom';
import Switch from '../../lib/Ui/Switch';
import Flex from '../../lib/Ui/Flex';
import { Box } from '../../lib/Ui/Box';
import DarkIcon from '../../lib/Svg/DarkIcon';
import LightIcon from '../../lib/Svg/LightIcon';
import HideSidebar from '../../lib/Svg/HideSidebar';
import { darkTheme, lightTheme } from '../../theme/Theme';
import ShowSidebar from '../../lib/Svg/ShowSidebar';
interface ISidebar {
    theme: string
    toggleTheme: () => void
    isSidebarHidden: boolean
    setIsSidebarHidden:(e:boolean)=>void
}
const MainSidebar: React.FC<ISidebar> = ({ theme, toggleTheme, setIsSidebarHidden ,isSidebarHidden}) => {
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    const handleToggleSidebar = () => {
        setIsSidebarHidden(!isSidebarHidden);
    };
    return (
        <Sidebar style={{
            border: 'none',
            position: "fixed",
            zIndex: "999",
            display:'flex',
            alignItems: "space-between",
            flexDirection: "column",
            boxShadow: theme === 'light' ? 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}>
            <Box style={{ background: themeMode.body, padding: "24px 10px 50px 0px", display: isSidebarHidden ? 'none' :'block' }} >
                <Box style={{ marginBottom: "45px", paddingLeft: "20px" }}>{theme === 'light' ? <LogoDark /> : <LogoLight />}</Box>
                <StyledMenu>
                    <HeadingS style={{ margin: "0", paddingLeft: "20px", color: "#828FA3" }}>All Boards (3)</HeadingS>
                    <MenuItem component={<Link to='/' />} style={{ color: "#828FA3" }}>
                        Platform Launch
                    </MenuItem>
                    <MenuItem style={{ color: "#828FA3" }}>Marketing Plan</MenuItem>
                    <MenuItem style={{ color: "#828FA3" }}>Roadmap</MenuItem>
                    <MenuItem style={{ color: "#635FC7" }}><HeadingS>+ Create New Board</HeadingS></MenuItem>
                </StyledMenu>
                <Flex justify='center' align='center' style={{ background: theme === 'light' ? '#E4EBFA' : "#000112", marginLeft: "20px", width: "185px", padding: "10px" }}>
                    <Box style={{ marginRight: "20px", marginTop: "6px" }}><LightIcon /></Box>
                    <Switch id="themeSwitch" toggled={theme === 'dark'} onChange={toggleTheme} />
                    <Box style={{ marginLeft: "30px", marginTop: "6px" }}><DarkIcon /></Box>
                </Flex>
                <Flex style={{ height: "30px", padding: "24px 0", cursor: "pointer" }} justify='center' align='center' onClick={handleToggleSidebar}><HideSidebar />
                    <HeadingS style={{ marginLeft: "8px", color: "#828FA3" }}>Hide Sidebar</HeadingS></Flex>
            </Box>
            {
                isSidebarHidden && (
                    <Box onClick={handleToggleSidebar}
                        style={{
                            position: "fixed", top: "85%", padding: "18px", background: "#635FC7", borderTopRightRadius: "100%", borderBottomRightRadius: "100%"
                        }}>
                        <ShowSidebar />
                    </Box>
                )
           }
        </Sidebar >
    );
};

export default MainSidebar;
