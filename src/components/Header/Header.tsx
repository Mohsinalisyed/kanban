import React from 'react'
import { Container,   HeadingS,  HeadingXL } from '../../style'
import { containerStyles, logoStyles } from './style'
import { Box, Button, CustomDropdownToggle,  LogoDark, LogoLight } from '../../lib'
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { darkTheme, lightTheme } from '../../theme/Theme';
interface IHeader {
    theme: string
    isSidebarHidden: boolean
}
const Header: React.FC<IHeader> = ({ theme, isSidebarHidden }) => {
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <Container>
            <Box style={logoStyles}>
                {isSidebarHidden && <Box>{theme === 'light' ? <LogoDark /> : <LogoLight />}</Box>}
                <Box style={{ ...containerStyles, width: isSidebarHidden ? '100%' : "80%", padding: isSidebarHidden ? '24px 24px 24px 65px' : "24px 24px 24px 0px" }}>
                    <HeadingXL style={{color:themeMode.text}}>Platform Launch</HeadingXL>
                    <Box style={{display:"flex"}}>
                        <Button variant="primarySmall" style={{ height: "36px", marginRight: isSidebarHidden ? '0px' : "0" }}>+ Add new task</Button>
                        <Dropdown style={{margin:"8px 0 0 20px"}}>
                            <Dropdown.Toggle as={CustomDropdownToggle} />
                            <Dropdown.Menu style={{ marginTop: " 20px", background: themeMode.dropdownbg,color:themeMode.text,padding:"16px 0"}}>
                                <Dropdown.Item href="#/action-1"><HeadingS style={{ color: "#828FA3",margin:"8px" }}>Edit Task</HeadingS></Dropdown.Item>
                                <Dropdown.Item href="#/action-2"><HeadingS style={{ color: "red", margin: "8px" }}>Delete Task</HeadingS></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                   </Box>
                </Box>
            </Box>
       </Container>
    )
}

export default Header
