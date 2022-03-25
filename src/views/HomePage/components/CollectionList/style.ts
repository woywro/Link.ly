import styled from "styled-components";

export const CollectionsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  overflow-x: scroll;
  -moz-scrollbars-horizontal: touch;
`;

export const CollectionsList = styled.ul`
  display: flex;
  flex-flow: row;
  max-width: 100%;
  height: 100%;
`;
