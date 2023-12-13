import Image from 'next/image'

import logo from '@/images/logo.svg'
import calculator from '@/images/calculator.svg'

import { MobileHeader } from './MobileHeader'
import { headerLinks } from './header_links'
import Link from 'next/link'

export const HEADER_HEIGHT = 96

export function Header() {
    return (
        <>
            <header
                className="lg:flex z-[101] justify-between lg:justify-between fade fade-down py-5 px-8 flex items-center bg-primary bg-opacity-60
                sticky top-0 left-0 right-0 backdrop-blur-xl"
                style={{
                    height: HEADER_HEIGHT,
                }}
            >
                <Link className="hover:scale-90 transition" href="/">
                    <Image src={logo} width={168} alt="Picture of the author" />
                </Link>
                <ol className="hidden lg:flex">
                    {headerLinks.map((section) => (
                        <li key={section.id}>
                            <Link
                                href={`/#${section.id}`}
                                className="text-white text-center text-opacity-60 font-medium p-4 cursor-pointer hover:text-opacity-100 transition"
                            >
                                {section.label}
                            </Link>
                        </li>
                    ))}
                </ol>
                <div className="hidden lg:flex items-center space-x-4">
                    <Link className="btn-tertiary" href="/quote-calculator">
                        <span>Quote Calculator</span>
                        <Image
                            src={calculator}
                            height={20}
                            width={20}
                            alt="Picture of the author"
                        />
                    </Link>
                    <Link className="btn-primary" href="/#contact-us">
                        Contact us
                    </Link>
                </div>
            </header>
            <MobileHeader />
        </>
    )
}
