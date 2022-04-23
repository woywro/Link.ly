import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { prisma } from '../../../prisma/PrismaClient';
import { Modal } from '../../components/Modal';
import { SharedItemView } from '../../views/SharedItemView';
import { SharedWithYouInterface } from '../../types/SharedWithYouInterface';
import { NextSeo } from 'next-seo';

interface Props {
  share: SharedWithYouInterface;
}

export default function SharedItem({ share }: Props) {
  const router = useRouter();

  return (
    <>
      <NextSeo title={`${share.collection.value} - Linkly`} />{' '}
      <Modal
        title={share.collection.value}
        open={true}
        onClose={() => {
          router.back();
        }}
      >
        <SharedItemView share={share} />
      </Modal>
    </>
  );
}

export async function getServerSideProps({ req, query }) {
  const session = await getSession({ req });
  const { shareId } = query;
  const share = await prisma.ShareRequest.findUnique({
    where: {
      id: shareId,
    },
    include: {
      collection: {
        select: {
          links: true,
          value: true,
          owner: true,
          id: true,
        },
      },
    },
  });
  if (!share) {
    return {
      notFound: true,
    };
  }
  return {
    props: { share },
  };
}
