import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled, { useTheme } from "styled-components";
import { Link } from "../Link";
import { Text } from "../Text";

const StyledLinks = styled.div`
  width: 100%;
  height: 70%;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const FieldLabels = styled.div`
  display: grid;
  justify-content: start;
  align-items: center;
  grid-template-columns: 2fr 2fr 2fr 1fr;
  width: 100%;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
`;

export const Links = () => {
  const theme = useTheme();
  console.log(theme);
  const Links = useSelector((state) => state.links);
  useEffect(() => {
    console.log(Links);
  }, [Links]);

  return (
    <StyledLinks>
      <FieldLabels>
        <Text bold color={theme.colors.secondary}>
          name
        </Text>
        <Text bold color={theme.colors.secondary}>
          owner
        </Text>
        <Text bold color={theme.colors.secondary}>
          last modified
        </Text>
        <Text bold color={theme.colors.secondary}>
          more
        </Text>
      </FieldLabels>
      {Links.map((e) => {
        return <Link item={e} />;
      })}
    </StyledLinks>
  );
};
