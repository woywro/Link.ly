import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../prisma/PrismaClient";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  try {
    const limit = 3;
    const cursor = req.query.cursor ?? "";
    const cursorObj =
      cursor == "" ? undefined : { modificationTimestamp: cursor as string };
    const link = await prisma.Link.findMany({
      skip: cursor !== "" ? 1 : 0,
      cursor: cursorObj,
      take: limit,
      orderBy: {
        modificationTimestamp: "desc",
      },
      where: {
        owner: { email: session.user.email },
      },
      select: {
        id: true,
        title: true,
        url: true,
        collections: true,
        owner: true,
        modificationTimestamp: true,
      },
    });
    res.status(200).json({
      link,
    });
    res.end();
  } catch (err) {
    // res.status(403).json({ err });
    if (err instanceof PrismaClientKnownRequestError) {
      console.log(err);
    }
  }
};
