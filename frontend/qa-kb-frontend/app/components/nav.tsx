import { sign } from "crypto"
import Search from "./search"
import SidebarIcon from "./sidebar-icon"
import {FcSettings} from 'react-icons/fc'
import Link from 'next/link'

export default function Navbar() {
    return (
    <nav className='fixed top-0 left-0 h-screen w-32 flex flex-col bg-gray-900 text-white shadow'>
        <Search/>
        <Link href="/settings">
            <SidebarIcon icon={<FcSettings size="32" />} />
        </Link>
    </nav>
    )
  }
  


