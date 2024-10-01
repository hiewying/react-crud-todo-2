
import { useTodosContext } from "../lib/hooks"

export default function AddTodoForm() {

  const {todoText, setTodoText, addTodoList} = useTodosContext()
  
  return (
    <form onSubmit={(e) => {
      //prevent reload page
      e.preventDefault()
      addTodoList(todoText)
    }
    }>
        <h2 className="font-medium text-gray-600">Add a todo</h2>
        <input placeholder="Enter todo..." value={todoText} type="text" className="h-[35px] border-2 border-black/[15%] rounded-[5px] my-[9px] text-[15px] block w-full px-[15px]" 
        onChange={(e) => {
          setTodoText(e.target.value)
        }}/>

        <button type="submit" className="h-[35px] bg-slate-600 hover:bg-gray-800 w-full text-white rounded-[5px] cursor-pointer"> Add to list</button>
    </form>
  )
}
