'use client'
import Image from 'next/image'
import { useState } from 'react'
import clsx from 'clsx'

import calculator from '@/images/calculator.svg'
import close from '@/images/close.svg'
import hamburger from '@/images/hamburger.svg'

import { HEADER_HEIGHT } from './Header'
import { sections } from './header_sections'

export function MobileHeader() {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className="block lg:hidden">
            <div
                className={clsx(
                    'fixed left-0 right-0 h-screen bg-[rgba(14,22,53)] transition z-10',
                    {
                        'bg-opacity-90': isOpen,
                        'bg-opacity-0 pointer-events-none': !isOpen,
                    },
                )}
                style={{
                    top: HEADER_HEIGHT,
                }}
            >
                <div
                    className=" absolute top-[20px] left-[20px] right-[20px] bg-[rgba(14,22,53,.3)] transition-all duration-500 backdrop-blur-md pt-2.5 px-5 pb-8 border border-white border-opacity-20"
                    style={{
                        marginTop: isOpen ? 0 : '-100vh',
                    }}
                >
                    <ul className="text-white text-center space-y-3">
                        {sections.map((section) => (
                            <li key={section.id}>
                                <a
                                    href={`#${section.id}`}
                                    onClick={() => setOpen(false)}
                                    className="py-5 block btn-tertiary"
                                >
                                    {section.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a className="btn-secondary py-5 block" onClick={() => setOpen(false)}>
                                Quote Calculator
                                <Image
                                    src={calculator}
                                    height={20}
                                    width={20}
                                    alt="Picture of the author"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact-us"
                                className="btn-primary py-5 block"
                                onClick={() => setOpen(false)}
                            >
                                Contact us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <button
                className={`
                    h-14 w-14 border border-white border-opacity-20 bg-white bg-opacity-5 flex items-center justify-center
                    hover:bg-opacity-10
                    focus-visible:border-transparent
                    active:bg-opacity-20
                    fixed top-0 right-0 mt-5 mr-8 z-[101]
                `}
                onClick={() => setOpen(!isOpen)}
            >
                {isOpen ? (
                    <Image src={close} width={40} height={40} alt="Close" />
                ) : (
                    <Image src={hamburger} width={40} height={40} alt="Open" />
                )}
            </button>
        </div>
    )
}
