import Image from 'next/image'

import { Hero } from '@/components/hero'
import calculator from '@/images/calculator.svg'
import Link from 'next/link'
import type { Metadata } from 'next'

const title = 'Bluebird - Quote Calculator'

export const metadata: Metadata = {
    title,
    twitter: {
        title,
    },
    openGraph: {
        title,
    },
}

export default function QuoteCalculatorLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <Hero
                subtitle="Quote Calculator"
                title={
                    <>
                        Get a <em>Hassle-Free</em> quote estimate
                    </>
                }
                description={
                    <>
                        Experience Bluebird Development’s Innovative Quote Estimation Feature!
                        Customize project parameters effortlessly for accurate cost insights.
                        Simplify your planning process and revolutionize your development decisions.
                    </>
                }
                buttons={
                    <>
                        <Link className="btn-primary" href="/build-a-platform">
                            <span>Build a Platform</span>
                            <Image
                                src={calculator}
                                height={20}
                                width={20}
                                alt="Picture of the author"
                            />
                        </Link>
                        <Link
                            className="btn-secondary"
                            href="/quote-calculator/resource"
                            scroll={false}
                        >
                            Find a Particular Resource
                        </Link>
                    </>
                }
            />
        </>
    )
}
