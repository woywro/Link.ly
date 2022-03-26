import { useState } from "react";
import { CloseWrapperButton } from "../../components/CloseWrapperButton";
import { LinkItem } from "../../components/LinkItem";
import { Links } from "../../components/Links";
import { OpenWrapperButton } from "../../components/OpenWrapperButton";
import { CollectionShareLinks } from "../../types/CollectionShareLinks";
import { LinkInterface } from "../../types/LinkInterface";
import {
  Divider,
  LeftWrapper,
  PageContainer,
  RightWrapper,
  Title,
} from "../style";
import { CollectionInfo } from "./components/CollectionInfo";
import { Sharing } from "./components/Sharing";

interface Props {
  collection: CollectionShareLinks;
}

export const CollectionView = ({ collection }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <PageContainer>
      <LeftWrapper>
        <OpenWrapperButton onClick={() => setOpen(true)} />
        <Title>{`categories/${collection.value}`}</Title>
        <Links>
          {collection.links.map((e: LinkInterface) => {
            return <LinkItem item={e} />;
          })}
        </Links>
      </LeftWrapper>
      <RightWrapper open={open}>
        <CloseWrapperButton onClick={() => setOpen(false)} />
        <Title>Info</Title>
        <CollectionInfo collection={collection} />
        <Divider />
        <Title>Sharing</Title>
        <Sharing collection={collection} />
      </RightWrapper>
    </PageContainer>
  );
};
