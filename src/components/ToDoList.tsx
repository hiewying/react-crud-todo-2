import { useTodosContext } from "../lib/hooks"

export default function ToDoList() {

const {todos, todoCompleted, deleteTodo} = useTodosContext()

  return (
    <ul>
        {
            todos.length === 0 && (<li className="h-full flex justify-center items-center font-semibold">
                Start by adding a todo
            </li>) 
        }

        {
            todos.map((todo) => {
                return(
                    <li key={todo.id} className="flex justify-between items-center px-[15px] h-[50px] text-[15px] cursor-pointer border-b"
                    onClick={() => todoCompleted(todo.id)}>
                        <span className={`${todo.isCompleted ? 'line-through text-[#ccc]': ''} `}>{todo.text}</span>
                        <button onClick={(e) => {
                            //Stop Propagation of Event
                            e.stopPropagation() // Prevents the event from bubbling up
                            deleteTodo(todo.id)}}>
                            <i className="fa-solid fa-trash"></i>
                         </button>
                    </li>
                )
            })
        }

       
    </ul>
  )
}
