import React from 'react'
import Link from 'next/link';
import { HOME, ABOUT, CONTACTS} from '../tools/urls'

const HeaderNavigation = () => {
  return (
    <nav className="">
        <ul className="flex gap-8">
            <li className="">
                <Link className="" href={HOME}>Home</Link>
            </li>
            <li className="">
                <Link className="" href={ABOUT}>About</Link>
            </li>
            <li className="">
                <Link className="" href={CONTACTS}>Contacts</Link>
            </li>
        </ul>
    </nav>
  )
}

export default HeaderNavigation