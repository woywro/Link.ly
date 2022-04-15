import { useRouter } from "next/router";
import { RiFolder5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { Button } from "../../../../components/Button";
import { Text } from "../../../../components/Text";
import { deleteCollection } from "../../../../redux/actions/CollectionActions";
import { RootState } from "../../../../redux/store";
import { CollectionInterface } from "../../../../types/CollectionInterface";
import { ThemeInterface } from "../../../../types/ThemeInterface";
import { Name, CollectionInfoWrapper } from "./style";
import moment from "moment";
import { useCallback } from "react";

interface Props {
  collection: CollectionInterface;
}

export const CollectionInfo = ({ collection }: Props) => {
  const theme = useTheme() as ThemeInterface;
  const router = useRouter();
  const dispatch = useDispatch();
  const collections = useSelector((state: RootState) => state.collections);

  const handleDeleteCategory = useCallback(() => {
    dispatch(deleteCollection(collections, collection.id));
    router.push("/");
  }, [collections, collection]);

  return (
    <CollectionInfoWrapper>
      <Name>
        <RiFolder5Fill size={"80px"} style={{ fill: theme.colors.yellow }} />
        <Text size={"big"} color={theme.colors.primaryText}>
          {collection.value}
        </Text>
      </Name>
      <Text size={"medium"} color={theme.colors.secondaryText}>
        links: {collection.links?.length}
      </Text>
      <Text size={"medium"} color={theme.colors.secondaryText}>
        {moment(parseInt(collection.modificationTimestamp)).fromNow()}
      </Text>
      <Button onClick={handleDeleteCategory}>Delete Category</Button>
    </CollectionInfoWrapper>
  );
};
