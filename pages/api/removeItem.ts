import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

export default async function removeItem(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  const emailId = session?.user?.email!;
  const index = JSON.parse(req.query.index as string)

  const userExists = await prisma.user.findUnique({
    where: {
      email: emailId
    }
  })

  if (userExists) {
    await prisma.item.delete({
      where: {
        id: index
      }
    })
    res.status(200).json({ message: "Item removed" })
    // const itemList = await prisma.item.findMany({
    //   where: {
    //     emailId: emailId
    //   }
    // })
    // res.status(200).json({ itemList })
  }
}