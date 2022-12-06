import React, { useState } from "react"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function ToDoList() {
  const [todolist, setTodolist] = useState<{text: string, date: Date}[]>([])
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date())

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTodolist([...todolist, { text, date }])
  }

  function removeTodo (index: number) {
    setTodolist([...todolist.filter(item => item !== todolist[index])])
  }

  return (
    <div className="flex flex-col mt-10 gap-8 items-center">
      <form className="flex gap-8 border-2 border-blue-700 p-3 rounded-md" onSubmit={addTodo}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="w-40 md:w-80 p-2 border-2 border-blue-700 rounded-md"></input>
        <DatePicker selected={date} onChange={(date: Date) => setDate(date)} dateFormat="dd/MM/yyyy" className="p-2 border-2 border-blue-700 rounded-md" wrapperClassName="datePicker" />
        <button type="submit" className="addButton">Add</button>
      </form>
      
      <ul>
        {todolist.map((item, index) => (
          <li className="flex justify-between items-center gap-10 bg-white rounded-md p-2 mb-3" key={index}>
            <div>
              <p>{item.text}</p>
            </div>
            <div className="flex justify-between items-center gap-4">
              <p>{item.date.toLocaleDateString('en-GB')}</p>
              <button className="removeButton" onClick={() => removeTodo(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoList