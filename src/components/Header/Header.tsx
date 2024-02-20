import React from 'react'
import { HeadingL } from '../../style'
const Header = () => {
    return (
        <div style={{
            display: "flex", justifyContent: "space-between",
            padding: "10px 30px",
            paddingLeft: "18%",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",

        }}>
            <HeadingL>Platform launch</HeadingL>
            <button>Add new task</button>
        </div>
    )
}

export default Header
