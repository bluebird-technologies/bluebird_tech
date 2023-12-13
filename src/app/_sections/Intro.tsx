import Image from 'next/image'
import Marquee from 'react-fast-marquee'

import calculator from '@/images/calculator.svg'

import seven from '@/images/clients/22seven.svg'
import banktech from '@/images/clients/banktech.svg'
import bvnk from '@/images/clients/bvnk.svg'
import coindirect from '@/images/clients/coindirect.svg'
import doctorly from '@/images/clients/doctorly.svg'
import layup from '@/images/clients/layup.svg'
import pab from '@/images/clients/pab.svg'
import pepsi from '@/images/clients/pepsi.svg'
import revix from '@/images/clients/revix.svg'
import thorchain from '@/images/clients/thorchain.svg'
import arcx from '@/images/clients/arcx.png'
import tweak from '@/images/clients/tweak.svg'
import raubex from '@/images/clients/raubex.png'
import oystar from '@/images/clients/oystar.png'
import polygon from '@/images/clients/polygon.png'
import revio from '@/images/clients/revio.svg'
import { Hero } from '@/components/hero'
import Link from 'next/link'

export function Intro() {
    return (
        <>
            <Hero
                id="intro"
                subtitle="Bespoke. Excellent. Enduring."
                title={
                    <>
                        Building <em>Innovative Software</em> with Style and Simplicity
                    </>
                }
                description={
                    <>
                        Bluebird Development provides exclusive consulting, development, and design
                        resources for you and your team.
                    </>
                }
                buttons={
                    <>
                        <Link className="btn-primary" href="/quote-calculator">
                            <span>Quote Calculator</span>
                            <Image
                                src={calculator}
                                height={20}
                                width={20}
                                alt="Picture of the author"
                            />
                        </Link>
                        <a className="btn-secondary" href="#what-we-do">
                            What We Do
                        </a>
                    </>
                }
            />

            <section className="max-w-full w-full text-center">
                <h3 className="text-xl fade fade-left">Our Client Lineup</h3>
                <div className="pt-10 fade fade-up space-x-3 [&_a]:block [&_a]:px-3 [&_a]:mx-3">
                    <Marquee>
                        <a href="https://22seven.com" target="_blank">
                            <Image src={seven} height={20} alt="22seven" />
                        </a>
                        <a href="https://bank.tech" target="_blank" className="mb-[1px]">
                            <Image src={banktech} height={20} alt="BankTech" />
                        </a>
                        <a href="https://bvnk.com" target="_blank">
                            <Image src={bvnk} height={20} alt="BVNK" />
                        </a>
                        <a href="https://coindirect.com" target="_blank">
                            <Image height={20} src={coindirect} alt="Coindirect" />
                        </a>
                        <a href="https://www.doctorly.de/" target="_blank" className="mt-[3px]">
                            <Image src={doctorly} height={24} alt="doctorly" />
                        </a>
                        <a href="https://layup.co.za" target="_blank" className="mt-[6px]">
                            <Image src={layup} height={20} alt="LayUp" />
                        </a>
                        <a href="https://www.pabtglobal.com/" target="_blank" className="mt-[5px]">
                            <Image src={pab} height={26} alt="pump & abrasion" />
                        </a>
                        <a href="https://pepsi.com" target="_blank">
                            <Image src={pepsi} height={31} alt="Pepsi" />
                        </a>
                        <a href="https://revix.com" target="_blank">
                            <Image src={revix} height={20} alt="Revix" />
                        </a>
                        <a href="https://thorchain.com" target="_blank">
                            <Image src={thorchain} height={31} alt="Thorchain" />
                        </a>
                        <a href="https://www.arcxanalytics.com/" target="_blank">
                            <Image src={arcx} height={32} alt="arcx" />
                        </a>
                        <a href="https://www.tweakcarbon.com/" target="_blank" className="mb-[2px]">
                            <Image src={tweak} height={32} alt="tweak" />
                        </a>
                        <a href="https://www.raubex.com/" target="_blank" className="mb-[1px]">
                            <Image src={raubex} height={44} alt="Raubex" />
                        </a>
                        <a href="https://oystar-africa.com/" target="_blank">
                            <Image src={oystar} height={36} alt="Oystar" />
                        </a>
                        <a href="https://www.polygonprop.com/" target="_blank">
                            <Image height={38} src={polygon} alt="PolygonProp" />
                        </a>
                        <a href="https://www.reviopay.com/" target="_blank" className="mt-[3px]">
                            <Image src={revio} height={34} alt="Revio" />
                        </a>
                    </Marquee>
                </div>
            </section>
        </>
    )
}
