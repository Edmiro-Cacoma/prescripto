import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Button } from './button'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

const Navbar = () => {
    const navLinks = [{ link: "home", href: "/" }, { link: "About", href: "/about" }, { link: "All Doctors", href: "/doctors" }, { link: "Contacts", href: "/contacts" }]

    return (
        <>
            <div className="flex items-center  justify-between container w-[1200px] py-8 border-b-[1px] border-bottomBorderColor">
                <Link href={`/`}>
                    <Image src={`/assets/logo-prescripto.svg`} alt='' width={200} height={200} />
                </Link>
                <nav className=''>
                    <ul className="flex items-center gap-6">
                        {navLinks.map((item, index) => (
                            <li key={index} className="text-link">
                                <Link href={item.href} className="text-link text-center leading-6 text-normal text-base capitalize hover:border-b-purple hover:border-b-[2px] pb-2 font-medium">
                                    {item.link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <Button className={`${outfit.className} bg-purple w-[195px] h-[54px] rounded-[47px] text-xl text-white hover:text-black hover:bg-btnHover`}>
                    Criar conta
                </Button>
            </div>
        </>
    )
}

export default Navbar
