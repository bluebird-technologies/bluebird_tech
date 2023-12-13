import Image from 'next/image'
import logo from '@/images/logo.svg'
import email from '@/images/footer/email.svg'
import location from '@/images/footer/location.svg'
import Link from 'next/link'
import { headerLinks } from '../_header/header_links'

export function Footer() {
    return (
        <footer className="container py-20 fade fade-up">
            <div className="flex flex-col lg:grid grid-cols-5 gap-[70px] pb-16">
                <div className="col-span-2 space-y-6">
                    <Link href="/#intro" className="block hover:scale-90 transition">
                        <Image src={logo} alt="logo" width={210} />
                    </Link>
                    <h5 className="text-xl max-w-xs">
                        Building Innovative Software with Style and Simplicity
                    </h5>
                </div>
                <div className="col-span-1">
                    <h5 className="text-2xl">Quick Links</h5>
                    <ul className="font-medium  space-y-8 mt-8">
                        {headerLinks.map((headerLink) => (
                            <li key={headerLink.id}>
                                <Link
                                    href={`/#${headerLink.id}`}
                                    className="hover:text-opacity-100 text-white text-opacity-60"
                                >
                                    {headerLink.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-span-2">
                    <h5 className="text-2xl">Contact Us</h5>
                    <ol className="text-white text-sm space-y-4 mt-8">
                        <li className="flex border border-white border-opacity-10 px-5 py-4 space-x-4">
                            <Image src={email} alt="email" />
                            <div>
                                <div className="text-opacity-60 text-white mb-1">Email</div>
                                <div>info@bluebird.dev</div>
                            </div>
                        </li>
                        <li className="flex border border-white border-opacity-10 px-5 py-4 space-x-4">
                            <Image src={location} alt="location" />
                            <div>
                                <div className="text-opacity-60 text-white mb-1">
                                    Address - U.S.A.
                                </div>
                                <div>
                                    1899, 701 Tillery Street Unit 12, Austin, TX, Travis, US, 78702
                                </div>
                            </div>
                        </li>
                        <li className="flex border border-white border-opacity-10 px-5 py-4 space-x-4">
                            <Image src={location} alt="location" />
                            <div>
                                <div className="text-opacity-60 text-white mb-1">
                                    Address - South Africa
                                </div>
                                <div>33 Ballyclare Drive, Bryanston, Johannesburg, 2191</div>
                            </div>
                        </li>
                        <li className="flex border border-white border-opacity-10 px-5 py-4 space-x-4">
                            <Image src={location} alt="location" />
                            <div>
                                <div className="text-opacity-60 text-white mb-1">
                                    Address - Georgia
                                </div>
                                <div>16 Ateni Street, Tbilisi, Tbilisi, GE, 0179</div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="py-8 border-t border-t-white border-opacity-20 flex flex-col gap-4 md:flex-row justify-between">
                <span>Copyright © Bluebird Technologies 2023 | All rights reserved</span>
                <div className="flex items-center gap-3">
                    <Link
                        href={`/privacy-policy`}
                        className="hover:text-opacity-100 text-white text-opacity-60"
                    >
                        Privacy Policy
                    </Link>
                    |
                    <Link
                        href={`/terms-of-service`}
                        className="hover:text-opacity-100 text-white text-opacity-60"
                    >
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    )
}
