import { useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { CloseWrapperButton } from "../../components/CloseWrapperButton";
import { OpenWrapperButton } from "../../components/OpenWrapperButton";
import { LeftWrapper, PageContainer, RightWrapper } from "../style";
import { CollectionList } from "./components/CollectionList";
import { History } from "./components/History";
import { LinkList } from "./components/LinkList";
import { SearchBar } from "./components/Searchbar";

export const HomePage = () => {
  const [open, setOpen] = useState(false);

  return (
    <PageContainer>
      <LeftWrapper>
        <OpenWrapperButton onClick={() => setOpen(true)} />
        <Scrollbars
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SearchBar />
          <CollectionList />
          <LinkList />
        </Scrollbars>
      </LeftWrapper>
      <RightWrapper open={open}>
        <CloseWrapperButton onClick={() => setOpen(false)} />
        <Scrollbars
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <History />
        </Scrollbars>
      </RightWrapper>
    </PageContainer>
  );
};
