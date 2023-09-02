import React from 'react'
import Link from 'next/link';
import { HOME, ABOUT, CONTACTS } from '../tools/urls'

interface HeaderNavigationProps {
    className?: string
}

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({className}) => {
    return (
        <nav className={className}>
            <ul className="flex space-x-4">
                <li className="list-none">
                    <Link href={HOME}>Home</Link>
                </li>
                <li className="list-none">
                    <Link href={ABOUT}>About</Link>
                </li>
                <li className="list-none">
                    <Link href={CONTACTS}>Contacts</Link>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderNavigation
