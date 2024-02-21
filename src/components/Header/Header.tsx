import React from 'react'
import { HeadingXL } from '../../style'
import Button from '../../lib/Ui/Button'
import { containerStyles, logoStyles } from './style'
import { Box } from '../../lib/Ui/Box'
import LogoDark from '../../lib/Svg/LogoDark'
import LogoLight from '../../lib/Svg/LogoLight'
interface IHeader {
    theme: string
    isSidebarHidden: boolean
}
const Header: React.FC<IHeader> = ({theme,isSidebarHidden}) => {
    return (
        <Box style={logoStyles}>
            {isSidebarHidden && <Box>{theme === 'light' ? <LogoDark /> : <LogoLight />}</Box>}
            <Box style={{ ...containerStyles, width: isSidebarHidden ? '100%' : "80%", padding: isSidebarHidden ? '24px 30px 24px 65px' : "24px 30px 24px 0px" }}>
                <HeadingXL>Platform Launch</HeadingXL>
                <Button variant="primarySmall" style={{ height: "36px", marginRight: isSidebarHidden ? '10px':"0"}}>+ Add new task</Button>
            </Box>
        </Box>
    )
}

export default Header
