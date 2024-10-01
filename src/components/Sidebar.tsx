import AddTodoForm from "./AddTodoForm";


export default function Sidebar() {

  return (
    <section className="col-[2_/_3] row-[2_/_3] bg-[#fffcf9] pt-[20px] px-[25px] pb-[30px] 
    flex flex-col justify-between border-l border-l-[rgba(0,0,0,0.08)]">

    <AddTodoForm />

    </section>
  )
}
