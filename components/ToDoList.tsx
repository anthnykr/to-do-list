import React, { useState, useEffect } from "react"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useSession } from 'next-auth/react'

function ToDoList() {
  const [todolist, setTodolist] = useState<{id: Number, text: string, date: string}[]>([])
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date())
  const { data: session } = useSession();

  const emailId = session?.user?.email

  async function addItem(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    await fetch("/api/addItem", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text, date, emailId })
    })
    await loadItems()
  }

  async function removeItem(index: Number) {
    const response = await fetch("/api/removeItem?index=" + index, {
      method: "DELETE",
    })
    await loadItems()
  }

  async function loadItems() {
    const response = await fetch("/api/itemList", {
      method: "GET",
      headers: {
        'Accept': 'application/json',
      },
    })
    const content = await response.json()
    setTodolist(content.todolist)
  }

  useEffect(() => {
    if (emailId) {
      loadItems()
    }
  }, [todolist])

  return (
    <div className="flex flex-col mt-10 gap-8 items-center w-[90vw]">
      <form className="flex gap-8 border-2 border-blue-700 p-3 rounded-md" onSubmit={addItem}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="w-40 md:w-80 p-2 border-2 border-blue-700 rounded-md" maxLength={140}></input>
        <DatePicker selected={date} onChange={(date: Date) => setDate(date)} dateFormat="dd/MM/yyyy" className="p-2 border-2 border-blue-700 rounded-md" wrapperClassName="datePicker" />
        <button type="submit" className="addButton" disabled={text === ""}>Add</button>
      </form>
      
      <ul className="w-full">
        {todolist.map((item) => (
          <li className="flex justify-between items-center gap-10 bg-white rounded-md p-2 mb-3" key={item.id.toString()}>
            <div>
              <p>{item.text}</p>
            </div>
            <div className="flex justify-between items-center gap-4">
              <p>{item.date}</p>
              <button className="removeButton" onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoList