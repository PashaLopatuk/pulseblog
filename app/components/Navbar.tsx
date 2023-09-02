import Link from 'next/link';
import ThemeButton from './ThemeButton';
import HeaderNavigation from './HeaderNavigation';
import BurgerMenu from './BurgerMenu';

const Navbar = () => {
    return (
        <header className="">
            <div className="
                max-w-3xl mx-auto px-6 sm:px-6 lg:px-8
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

                    <div className="flex space-x-3">
                        <ThemeButton /> 

                        <BurgerMenu />
                    </div>

                </div>
            </div>
        </div>
        </header>
    )
}

export default Navbar