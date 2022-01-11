import { MenuIcon, XIcon } from "@heroicons/react/solid"
import { useState } from "react"
import { Link } from "react-router-dom"
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

function Sidebar({ location }) {
    const [sidebar, setSidebar] = useState(false)
    return (
        <>
            <div className="bg-gray-800 h-20 flex justify-start items-center">
                {sidebar && (
                    <button className="ml-8 text-3xl h-20 flex justify-start items-center z-50 sticky top-0" >
                        <MenuIcon className="text-white h-7" onClick={() => setSidebar((p) => !p)} />
                    </button>
                ) }
            </div>
            <div className={`bg-gray-900 w-[250px] h-screen fixed top-0 left-0  transition-all duration-500 z-10 ${sidebar && '!left-[-100%]'}`}>
                <div className="">
                    <button onClick={() => setSidebar((p) => !p)} className="ml-8 text-3xl  h-20 flex justify-start items-center" >
                        <XIcon className="h-6 text-white"  />
                    </button>
                    {SidebarData.map((item, index) => (
                        <SubMenu key={index} item={item} location={location} />
                    ))}
                </div>
            </div>
        </>
    )
} 

export default Sidebar
