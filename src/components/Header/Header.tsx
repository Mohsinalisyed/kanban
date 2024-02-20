import React from 'react'
import { HeadingXL } from '../../style'
import Button from '../../lib/Ui/Button'
import { containerStyles } from './style'
import { Box } from '../../lib/Ui/Box'
const Header = () => {
    return (
        <Box style={containerStyles}>
            <HeadingXL>Platform Launch</HeadingXL>
            <Button variant="primarySmall" style={{ height: "36px" }}>+ Add new task</Button>
        </Box>
    )
}

export default Header
