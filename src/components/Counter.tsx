
import { useTodosContext } from "../lib/hooks"

export default function Counter() {

  const {totalCompletedTodos, totalTodos} = useTodosContext()

  return (
    <p>
        <b>{totalCompletedTodos}</b> / {totalTodos} todos completed
    </p>
  )
}
