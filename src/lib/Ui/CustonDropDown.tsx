import React from "react";
import styled from "styled-components";
import { DropDownIcon } from "../Svg";

// Styled component for the custom toggle
const CustomToggleWrapper = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  position: relative;
  padding-right: 1rem; /* Adjust as needed */
`;



export const CustomDropdownToggle = React.forwardRef<HTMLAnchorElement, React.ComponentProps<'a'>>(
  ({ children, onClick = () => {} }, ref) => (
    <CustomToggleWrapper
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
   <DropDownIcon/>
    </CustomToggleWrapper>
  )
);
