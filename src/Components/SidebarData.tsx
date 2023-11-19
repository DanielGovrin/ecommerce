import * as FaIcons from 'react-icons/fa' 
import * as IoIcons from 'react-icons/io'
import * as IoIcons5 from 'react-icons/io5'
import * as PiIcons from 'react-icons/pi'



export const SidebarData = [
    {
        title:'home',
        path:'/',
        icon: <IoIcons5.IoHome/>
    },
    {
        title:'pants',
        path:'/Pants',
        icon: <PiIcons.PiPants/>
    },
    {
        title:'shirts',
        path:'/Shirts',
        icon: <PiIcons.PiTShirtBold/>
    },
    {
        title:'hats',
        path:'/Hats',
        icon: <FaIcons.FaHatCowboy/>
    },
    {
        title:'contact',
        path:'/Contact',
        icon: <IoIcons.IoMdContact/>
    }

]
