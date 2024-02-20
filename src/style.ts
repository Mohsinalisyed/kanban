import styled from "styled-components";
const plusJakartaSans = "Plus Jakarta Sans, sans-serif";

type ColorProps = { color?: string };

// Common styles
const commonStyles = ({ color }: ColorProps) => `
  font-family: ${plusJakartaSans};
  line-height: 21px;
  -webkit-font-smoothing: antialiased;
`;

// Heading (XL)
export const HeadingXL = styled.h1<ColorProps>`
  ${commonStyles}
  display: block;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
`;

// Heading (L)
export const HeadingL = styled.h2<ColorProps>`
  ${commonStyles}
  display: block;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  
`;

// Heading (M)
export const HeadingM = styled.h3<ColorProps>`
  ${commonStyles}
  display: block;
  font-weight: bold;
  font-size: 15px;
  line-height: 19px;
  
`;

// Heading (S)
export const HeadingS = styled.h4<ColorProps>`
  ${commonStyles}
  display: block;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
`;

// Additional variant with Medium weight
export const MediumText = styled.p<ColorProps>`
  ${commonStyles}
  display: block;
  font-weight: medium;
  font-size: 13px;
  line-height: 23px;
  
`;

export const Container = styled.div<ColorProps>`
  ${commonStyles}
  margin: 0 auto; /* Center the container */
  padding: 0 20px; /* Add padding on the sides */
  max-width: 1920px; /* Set a maximum width for the container */

  @media (max-width: 768px) {
    /* Adjust styles for smaller screens */
    padding: 0 10px;
  }
`;
