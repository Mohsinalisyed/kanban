import React from 'react'
import { Container, HeadingXL } from '../../style'
import { containerStyles, logoStyles } from './style'
import { Box, Button, LogoDark, LogoLight } from '../../lib'
interface IHeader {
    theme: string
    isSidebarHidden: boolean
}
const Header: React.FC<IHeader> = ({theme,isSidebarHidden}) => {
    return (
        <Container>
            <Box style={logoStyles}>
                {isSidebarHidden && <Box>{theme === 'light' ? <LogoDark /> : <LogoLight />}</Box>}
                <Box style={{ ...containerStyles, width: isSidebarHidden ? 'auto%' : "80%", padding: isSidebarHidden ? '24px 30px 24px 65px' : "24px 30px 24px 0px" }}>
                    <HeadingXL>Platform Launch</HeadingXL>
                    <Button variant="primarySmall" style={{ height: "36px", marginRight: isSidebarHidden ? '10px' : "0" }}>+ Add new task</Button>
                </Box>
            </Box>
       </Container>
    )
}

export default Header
