import BackgroundHeading from "./BackgroundHeading"
import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"
import ToDoList from "./ToDoList"


function App() {

  return (
    <>
      <div className="font-sans flex flex-col justify-center items-center bg-[#cedbe0] min-h-screen">
       
        <BackgroundHeading />

        <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)]
         grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
          
          <Header />
          <ToDoList />
          <Sidebar />
          
        </main>

        <Footer />

      </div>
    </>
  )
}

export default App
