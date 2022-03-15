import { CategoryView } from "../../views/CategoryView";
import { PrismaClient, Tag, Link, Share, User } from "@prisma/client";
import { getSession } from "next-auth/react";
import { LinkInterface } from "../../types/LinkInterface";
import axios from "axios";
import { TagShareLinks } from "../../types/TagShareLinks";

interface Props {
  tag: TagShareLinks;
}

export default function elementPage({ tag }: Props) {
  return <CategoryView tag={tag} />;
}

const prisma = new PrismaClient();

export async function getServerSideProps({ req, params }) {
  const session = await getSession({ req });
  console.log(params);
  const tag = await prisma.tag.findUnique({
    where: {
      id: params.category,
    },
    include: {
      links: {
        select: {
          title: true,
          url: true,
          tags: true,
          owner: true,
          modificationTimestamp: true,
        },
      },
      share: {
        select: {
          sharedWith: true,
        },
      },
    },
  });

  if (!tag) {
    return {
      notFound: true,
    };
  }
  return {
    props: { tag },
  };
}
