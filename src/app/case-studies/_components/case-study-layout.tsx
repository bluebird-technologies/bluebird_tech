import { ReactNode } from 'react'
import Image, { StaticImageData } from 'next/image'
import clsx from 'clsx'
import Link from 'next/link'

import buttonArrow from '@/images/button_arrow.svg'

import { CASE_STUDIES } from '@/app/_sections/CaseStudies'

export type CaseStudy = {
    id: string

    name: ReactNode

    intro: {
        heading: ReactNode
        description: ReactNode
        servicesOffered: ReactNode[]
        image: StaticImageData
    }

    challenge: {
        concept: ReactNode
        gap: ReactNode
        problem: ReactNode
        image: StaticImageData
    }

    approach: {
        whatWeNeededToKnow: ReactNode[]
        howWeUncoveredThisInformation: ReactNode[]
        image: StaticImageData
    }

    mockup: StaticImageData

    process: {
        design: ReactNode[]
        designImage: StaticImageData
        build: ReactNode[]
        buildImage: StaticImageData
    }

    achieved: {
        heading: ReactNode
        list: ReactNode[]
    }
}

export function CaseStudyLayout({
    caseStudy: { id, name, intro, challenge, approach, process, mockup, achieved },
}: {
    caseStudy: CaseStudy
}) {
    return (
        <div className="container pt-8 lg:pt-28 pb-24 lg:pb-32 space-y-24 lg:space-y-36">
            <section className="flex flex-col lg:flex-row gap-20">
                <div className="lg:w-1/2 text-left flex flex-col items-start gap-y-8">
                    <h3 className="pill-heading fade fade-left">Client Testimonials</h3>
                    <h2 className="fade fade-left">{intro.heading}</h2>
                    <p>{intro.description}</p>
                    <h3 className="pt-4">Services We Offered {name}</h3>
                    <ul className="flex flex-wrap gap-5">
                        {intro.servicesOffered.map((service, i) => (
                            <li
                                key={i}
                                className="p-4 border border-white border-opacity-20 bg-white bg-opacity-10 backdrop-blur-lg"
                            >
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 flex items-center">
                    <Image src={intro.image} alt="main" priority />
                </div>
            </section>

            <section className="card flex flex-col lg:flex-row p-4 sm:p-8 lg:p-14 gap-14 items-stretch">
                <div className="flex-1 relative">
                    <Image
                        src={challenge.image}
                        style={{
                            objectFit: 'cover',
                            height: '100%',
                        }}
                        alt="challenge-image"
                    />
                </div>
                <div className="space-y-7 flex-1 flex-col flex items-start">
                    <h2>The Challenge</h2>
                    <h3 className="pill-heading fade fade-left">Concept Behind the Product</h3>
                    <p>{challenge.concept}</p>
                    <h3 className="pill-heading fade fade-left">Gap in the Market</h3>
                    <p>{challenge.gap}</p>
                    <h3 className="pill-heading fade fade-left">The Problem</h3>
                    <p>{challenge.problem}</p>
                </div>
            </section>

            <section className="space-y-12">
                <h2>The Bluebird Approach</h2>
                <div className="card flex flex-col p-4 sm:p-8 lg:p-14 space-y-8 justify-start">
                    <h3>What we needed to know</h3>
                    <ul className="space-y-5 text-left flex flex-col items-start">
                        {approach.whatWeNeededToKnow.map((item, i) => (
                            <li className="bg-white bg-opacity-10 p-4 text-sm inline-block" key={i}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex gap-10 flex-col lg:flex-row">
                    <div className="card lg:w-3/5 flex flex-col p-4 sm:p-8 lg:p-14 space-y-8 justify-start">
                        <h3>How we uncovered this information</h3>
                        <ul className="space-y-5 text-left">
                            {approach.howWeUncoveredThisInformation.map((item, i) => (
                                <li
                                    className="bg-white bg-opacity-10 p-4 text-sm inline-block"
                                    key={i}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex-1 relative">
                        <Image
                            src={approach.image}
                            fill
                            // Not doing anything.  To shut up warning.
                            sizes="(max-width: 768px) 100vw, 100vw"
                            style={{
                                objectFit: 'cover',
                            }}
                            alt="approach-image"
                        />
                    </div>
                </div>
            </section>

            <Image src={mockup} alt="mockup" />

            <section className="space-y-12">
                <h2>The Bluebird Process</h2>

                <div className="card flex flex-col lg:flex-row p-4 sm:p-8 lg:p-14 gap-14 items-stretch">
                    <div className="space-y-7 flex-1 flex-col flex items-start">
                        <h3>The Design Process</h3>
                        <ul className="space-y-5 text-left">
                            {process.design.map((item, i) => (
                                <li
                                    className="bg-white bg-opacity-10 p-4 text-sm inline-block"
                                    key={i}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 relative">
                        <Image
                            src={process.designImage}
                            style={{
                                objectFit: 'cover',
                                height: '100%',
                            }}
                            alt="design-image"
                        />
                    </div>
                </div>

                <div className="card flex flex-col lg:flex-row p-4 sm:p-8 lg:p-14 gap-14 items-stretch">
                    <div className="flex-1 relative">
                        <Image
                            src={process.buildImage}
                            style={{
                                objectFit: 'cover',
                                height: '100%',
                            }}
                            alt="build-image"
                        />
                    </div>
                    <div className="space-y-7 flex-1 flex-col flex items-start">
                        <h3>The Build Process</h3>
                        <ul className="space-y-5 text-left">
                            {process.build.map((item, i) => (
                                <li
                                    className="bg-white bg-opacity-10 p-4 text-sm inline-block"
                                    key={i}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="space-y-12">
                <div className="flex flex-col lg:flex-row gap-y-4 justify-between items-center">
                    <h2>What we achieved</h2>
                    <h3 className="pill-heading">{achieved.heading}</h3>
                </div>
                <div className="card p-6">
                    <ul className="list-disc pl-6 text-sm text-opacity-60 space-y-2">
                        {achieved.list.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="space-y-12">
                <h2>More Case Studies</h2>
                <div className="flex flex-col lg:flex-row gap-4">
                    {CASE_STUDIES.filter((caseStudy) => caseStudy.id !== id).map((caseStudy) => (
                        <div
                            className={clsx('fade fade-up flex flex-col', {})}
                            key={caseStudy.title}
                        >
                            <Image src={caseStudy.image} alt={caseStudy.title} />
                            <div className="p-6 lg:p-8 card flex flex-col items-start flex-1">
                                <Image src={caseStudy.logo} alt={caseStudy.title} width={100} />
                                <p className="pt-4 pb-8 text-lg text-left">
                                    <strong className="font-medium">{caseStudy.title}</strong> -{' '}
                                    {caseStudy.description}
                                </p>
                                <Link
                                    className="btn-secondary mt-auto"
                                    href={`/case-studies/${caseStudy.id}`}
                                >
                                    <span>View Case Study</span>
                                    <Image src={buttonArrow} height={20} width={20} alt="button" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
