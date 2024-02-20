// Toggler.tsx
import React from "react";
import styled from "styled-components";

interface ToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`;

const Toggle: React.FC<ToggleProps> = ({ theme, toggleTheme }) => {
  return <Button onClick={toggleTheme}>Switch Theme</Button>;
};

export default Toggle;
