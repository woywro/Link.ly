import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 20px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  padding: 8px 18px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  border: 0;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  &: disabled {
    background: #dddddd;
    cursor: auto;
  }
`;
