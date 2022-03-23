import styled from "styled-components";
import { useSelector } from "react-redux";
import { generateHistory } from "../../../../utils/generateHistory";
import { useState, useEffect, useCallback } from "react";
import { LinkItem } from "../../../../components/LinkItem";
import { LinkInterface } from "../../../../types/LinkInterface";
import { HistoryItem } from "../HistoryItem";
import { HistoryLinkInterface } from "../../../../types/HistoryLinkInterface";
import { Text } from "../../../../components/Text";
import { Scrollbars } from "react-custom-scrollbars-2";
import breakpoints from "../../../../theme/breakpoints";
import { Title } from "../../../style";

export const History = () => {
  const History = useSelector((state) => state.history);
  const Links = useSelector((state) => state.links);

  const [history, setHistory] = useState<HistoryLinkInterface[]>([]);

  const setFetchedHistory = useCallback(() => {
    const newHistory = generateHistory(Links, History);
    setHistory(newHistory);
  }, [History, Links]);

  useEffect(() => {
    setFetchedHistory();
  }, [History]);

  return (
    <Wrapper>
      {history.length == 0 ? (
        <Text>Recently used links will appear here once you open them.</Text>
      ) : (
        <>
          <Title>History</Title>
          {history.map((e) => {
            return <HistoryItem item={e} />;
          })}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  @media only screen and ${breakpoints.device.sm} {
    overflow-y: scroll;
  }
`;
