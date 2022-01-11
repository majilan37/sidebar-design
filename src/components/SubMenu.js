import { Link } from "react-router-dom"
import { useState } from 'react';

function SubMenu({item, location}) {
    const [subnav, setSubnav] = useState(false)
    const r = item.subNav?.reduce((a, v) => {
        console.log(v.path)
        return v.path
    }, '')
    // console.log()
    return (
        <>
            <div 
                to={item.path} 
                onClick={() => item.subNav && setSubnav((p) => !p )} 
                className={`flex text-gray-200 justify-between items-center p-5 h-14 text-lg transition-all duration-300 
                hover:bg-gray-700 hover:border-l-4 border-solid border-purple-700 cursor-pointer space-x-2 
                flex-grow ${item.subNav && subnav && 'border-l-4 border-purple-700'} ${item.path === location.pathname && 'border-l-4 border-purple-700'}
                ${item.subNav && item.subNav?.reduce((a, v) => v.path ) === location.pathname && 'border-l-4 border-purple-500'}`}
            >
                <div className="flex items-center space-x-2">
                    {item.icon}
                    <span>{item.title}</span>
                </div>
                <div>
                    {item.subNav && subnav 
                            ? item.iconOpened
                            : item.subNav
                            ? item.iconClosed
                            : null}
                </div>
            </div>
            {subnav && item.subNav.map((item, index) => (
                <Link 
                    key={index}
                    to={item.path} 
                    className={`bg-gray-700 h-14 pl-12 flex items-center space-x-2 text-gray-100 text-lg 
                    hover:bg-gray-600 hover:border-l-4 border-purple-600 transition-all duration-200 
                    ${item.path === location.pathname && 'border-l-4 border-purple-400'}`} 
                >
                    {item.icon}
                    <span>{item.title}</span>
                </Link>
            ))}
        </>
    )
}
 
export default SubMenu
