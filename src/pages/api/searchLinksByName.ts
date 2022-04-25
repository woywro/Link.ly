import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from '@auth0/nextjs-auth0';
import { prisma } from '../../../prisma/PrismaClient';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession(req, res);
  const data = req.query['search'];
  try {
    const link = await prisma.Link.findMany({
      where: {
        title: {
          contains: data,
        },
        owner: session?.user.email,
      },
      select: {
        id: true,
        title: true,
        url: true,
        collections: true,
        ownerId: true,
        owner: true,
        modificationTimestamp: true,
      },
    });
    res.status(200).json({ link });
    res.end();
  } catch (err) {
    res.status(403).json({ err });
  }
};
