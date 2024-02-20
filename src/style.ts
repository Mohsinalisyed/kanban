import styled from "styled-components";

// Define the Plus Jakarta Sans font family
const plusJakartaSans = "Plus Jakarta Sans, sans-serif";

// Common styles
const commonStyles = `
  font-family: ${plusJakartaSans};
  line-height: 21px;
  -webkit-font-smoothing: antialiased;
`;

// Heading (XL)
export const HeadingXL = styled.h1`
  ${commonStyles}
  display: block;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
`;

// Heading (L)
export const HeadingL = styled.h2`
  ${commonStyles}
  display: block;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  width: 297px;
`;

// Heading (M)
export const HeadingM = styled.h3`
  ${commonStyles}
  display: block;
  font-weight: bold;
  font-size: 15px;
  line-height: 19px;
  width: 297px;
`;

// Heading (S)
export const HeadingS = styled.h4`
  ${commonStyles}
  display: block;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  width: 297px;
  letter-spacing: 2.4px; /* Kerning */
`;

// Additional variant with Medium weight
export const MediumText = styled.p`
  ${commonStyles}
  display: block;
  font-weight: medium;
  font-size: 13px;
  line-height: 23px;
  width: 297px;
`;
