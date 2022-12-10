import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

export default async function itemList(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (session && session.user) {
    const emailId = session.user.email!;

    const userExists = await prisma.user.findUnique({
      where: {
        email: emailId
      }
    })

    if (userExists) {
      const itemList = await prisma.item.findMany({
        where: {
          emailId: emailId
        }
      })

      const todolist: Array<{id: Number, text: string, date: string}> = []
      for (const item of itemList) {
        todolist.push({ id: item.id, text: item.text, date: item.date.toLocaleDateString('en-GB') })
      }
      res.status(200).json({ todolist })
    }
  } else {
    res.status(200).json({ todolist: [] })
  }
}