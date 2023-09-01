import Link from 'next/link';
import ThemeButton from './ThemeButton';
import HeaderNavigation from './HeaderNavigation';
import BurgerMenu from './BurgerMenu';

const Navbar = () => {
    return (
        <div className="
        max-w-3xl mx-auto px-4 sm:px-6 lg:px-8
        ">
            <div className="flex justify-between h-16">
                <div className="flex justify-between items-center w-full">
                    <Link href="/">
                        <h1 className="text-2xl font-medium">
                            Pulse<span className='text-lime-500 font-semibold'>
                                Blog
                            </span>
                        </h1>
                    </Link>

                    <div className="hidden sm:block">
                        <HeaderNavigation />
                    </div>

                    <ThemeButton /> 

                    <BurgerMenu />

                </div>
            </div>
        </div>
    )
}

export default Navbar