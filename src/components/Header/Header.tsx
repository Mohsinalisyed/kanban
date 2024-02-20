import React from 'react'
import { HeadingL } from '../../style'
import Button from '../../lib/Ui/Button'
import { containerStyles } from './style'
import { Box } from '../../lib/Ui/Box'
const Header = () => {
    return (
        <Box style={containerStyles}> 
            <HeadingL>Platform launch</HeadingL>
            <Button variant="primarySmall" style={{height:"36px"}}>+ Add new task</Button>
        </Box>
    )
}

export default Header
