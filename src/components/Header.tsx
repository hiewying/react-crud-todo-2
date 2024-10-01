import Counter from "./Counter";

export default function Header() {

  return (
    <header className="col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-b-[rgba(0,0,0,0.04)] 
    flex justify-between items-center px-[30px] py-[0]">
        <img src="https://bytegrad.com/course-assets/react-nextjs/dots.png" />
        
    <Counter/> 

    </header>
  )
}
