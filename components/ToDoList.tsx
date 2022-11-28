function ToDoList() {
  return (
    <div className="flex flex-col items-between mt-10 gap-8">
        <div className="flex gap-4 md:gap-10 border-blue-700 border-4 p-5">
            <input type="text" placeholder="Task" className="w-40 md:w-80 p-2"></input>
            <input type="date" placeholder="dd/mm/yyyy" className="p-2"></input>
            <button type="submit" className="bg-white py-2 px-5 hover:bg-gray-200">Add</button>
        </div>

        <div className="border-blue-700 border-4 p-5 flex flex-col gap-4">
            <div className="flex gap-4 md:gap-10">
                <input type="text" placeholder="Task" className="w-40 md:w-80 p-2"></input>
                <input type="date" placeholder="dd/mm/yyyy" className="p-2"></input>
                <button type="submit" className="bg-white py-2 px-5 hover:bg-gray-200">Remove</button>
            </div>

            <div className="flex gap-4 md:gap-10">
                <input type="text" placeholder="Task" className="w-40 md:w-80 p-2"></input>
                <input type="date" placeholder="dd/mm/yyyy" className="p-2"></input>
                <button type="submit" className="bg-white py-2 px-5 hover:bg-gray-200">Remove</button>
            </div>

            <div className="flex gap-4 md:gap-10">
                <input type="text" placeholder="Task" className="w-40 md:w-80 p-2"></input>
                <input type="date" placeholder="dd/mm/yyyy" className="p-2"></input>
                <button type="submit" className="bg-white py-2 px-5 hover:bg-gray-200">Remove</button>
            </div>
        </div>
    </div>
  )
}

export default ToDoList