import { Button, Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react"
import { Link } from "react-router-dom"
import ListBox from "src/shared/Listbox"

function Header() {
  return (
    <header className=" border-b-2 flex justify-between px-4 items-center h-14 w-full  sticky top-0 bg-white z-50">
        <div className="flex xl:w-1/6 sm:w-2/6 justify-evenly items-center">
            <Link to={"/"} className=" sm:border-l-2 h-8 w-1/3 flex items-center">
                <img src="divar.svg" className=" w-12" />

            </Link>
            <span className="flex mr-4">
                <img src="location.svg" />
                <p>تهران</p>
            </span>
        </div>
        <div className="flex xl:w-1/6 sm:w-2/6 justify-evenly items-center">
            <Popover placement="bottom">
                <PopoverTrigger   className=" cursor-pointer" >
                    <span className="flex ml-4">
                        <img src="profile.svg" />
                        <p className="mr-1">دیوار من</p>
                    </span>
                </PopoverTrigger>
                <PopoverContent className=" rounded-md mt-3">
                    <ListBox/>
                </PopoverContent>
            </Popover>
            <Link to="/dashboard" className=" sm:block hidden">
                <Button className=" rounded px-4 bg-[#a62626] text-white">ثبت آگهی</Button>
            </Link>
        </div>
    </header>
  )
}

export default Header