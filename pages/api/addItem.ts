import { NextApiRequest, NextApiResponse } from 'next'

export default async function addItem(req: NextApiRequest, res: NextApiResponse) {
  const { text, date, emailId } = req.body

  const userExists = await prisma.user.findUnique({
    where: {
      email: emailId
    }
  })

  if (userExists) {
    await prisma.item.create({
      data: {
        text: text,
        date: date,
        emailId: emailId
      }
    })
    res.status(200).json({ message: "Item added" })
    // const itemList = await prisma.item.findMany({
    //   where: {
    //     emailId: emailId
    //   }
    // })

    // const todolist = <{id: Number, text: string, date: string}[]>[]
    // for (const item of itemList) {
    //   todolist.push({ id: item.id, text: item.text, date: item.date.toLocaleDateString('en-GB') })
    // }
    // res.status(200).json({ todolist })
  }
}