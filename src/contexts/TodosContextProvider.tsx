// context API
import { createContext, useEffect, useState } from "react";

export type Todo = {
    id: number;
    text: string;
    isCompleted: boolean
}

type TodosContextProviderProps = {
    children: React.ReactNode
}

type TTodosContext = {
    todos: Todo[],
    todoText: string,
    totalTodos: number,
    totalCompletedTodos: number,
    setTodoText: (text: string) => void,
    addTodoList: (text: string) => void,
    todoCompleted: (id: number) => void,
    deleteTodo: (id: number) => void

}

export const TodosContext = createContext<TTodosContext | null>(null)

export default function TodosContextProvider({children}: TodosContextProviderProps) {

  function getInitialTodos(){
    //check if any todos in localStorage
    const savedTodos = localStorage.getItem('todos4')

    if(savedTodos)
      return JSON.parse(savedTodos)
    else
      return []
  }

  const [todos, setTodos] = useState<Todo[]>(getInitialTodos)

  const [todoText, setTodoText] = useState('')

  //total count of todos
  const totalTodos = todos.length

  //total count of completed todos
  const totalCompletedTodos = todos.filter((todo) => todo.isCompleted).length

  function addTodoList (newValue: string){
    if(todos.length >= 3){
      alert('Maximum of 3 todos only')
      return //keep text
    }
    else{
      setTodos(prev => [
        ...prev,
        {
          id: prev.length + 1,
          text: newValue,
          isCompleted: false
        }
      ])
    }

    setTodoText('')
  }

  function todoCompleted(todoIndex: number){
    setTodos(todos.map((t) => {

        if(t.id === todoIndex){
            //return the updated todo
            return {...t, isCompleted: !t.isCompleted};
        }

        // Return the original todo if no change
        return t;
          
      }))
  }

  function deleteTodo(todoIndex: number) {
      setTodos(todos.filter((t) => t.id !== todoIndex))
  }

  // data fetching (only run when load the page)
  // useEffect(() => {
  //   const fetchTodos = async() => {
  //     const response = await fetch("https://bytegrad.com/course-assets/api/todos")
  //     const todos = await response.json()
  //     setTodos(todos)
  //   }
    
  //   fetchTodos()
  // }, [])

  // persist data in localStorage
  useEffect(() => {
    localStorage.setItem('todos4', JSON.stringify(todos))
  }, [todos])


  return (
    <TodosContext.Provider
        value = {{
            todos,
            todoText,
            totalTodos,
            totalCompletedTodos,
            setTodoText,
            addTodoList,
            todoCompleted,
            deleteTodo
        }}
    > {children}
    </TodosContext.Provider>
  )
}
