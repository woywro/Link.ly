import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  try {
    const history = await prisma.History.findMany({
      orderBy: {
        timestamp: "desc",
      },
      take: 5,
      where: {
        owner: { email: session.user.email },
      },
      select: {
        link: true,
        timestamp: true,
      },
    });
    res.status(200).json({ history });
  } catch (err) {
    res.status(403).json({ err });
  }
};
