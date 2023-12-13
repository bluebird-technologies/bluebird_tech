import Image from 'next/image'

import app from '@/images/what-we-do/app.svg'
import web from '@/images/what-we-do/web.svg'
import infrastructure from '@/images/what-we-do/infrastructure.svg'
import pm from '@/images/what-we-do/pm.svg'
import ux from '@/images/what-we-do/ux.svg'
import outsourcing from '@/images/what-we-do/outsourcing.svg'
import api from '@/images/what-we-do/api.svg'
import ai from '@/images/what-we-do/ai.svg'

const CARDS = [
    {
        title: 'App Development',
        icon: app,
        content:
            'Native or cross-platform — we take the hassle out of mobile development, and deliver beautiful apps quickly and cost effectively.',
    },
    {
        title: 'Web Development',
        icon: web,
        content:
            'Using modern technologies combined with the latest web standards, we create performant, responsive, sleek, and secure websites.',
    },
    {
        title: 'Infrastructure Development',
        icon: infrastructure,
        content:
            'We develop everything from banking solutions to logistic systems and have the server-, database-, and services development experience to tackle any problem.',
    },
    {
        title: 'Product Management',
        icon: pm,
        content:
            'Using Agile methodologies and effective time management we provide accurate expectations and deliver on time.',
    },
    {
        title: 'UX/UI Design',
        icon: ux,
        content:
            'Working with a wide range of designers and employing a multi-iterative approach, we invent powerful brands and provide pixel perfect fine tuning to existing solutions.',
    },
    {
        title: 'Developer Oursourcing',
        icon: outsourcing,
        content:
            'We draw from our tried and tested developer network to pull together talent that meets your technology needs.',
    },
    {
        title: 'API & System Development',
        icon: api,
        content:
            'We craft robust and efficient APIs that seamlessly integrate diverse software systems, enabling streamlined data exchange and automation.',
    },
    {
        title: 'AI Development',
        icon: ai,
        content:
            'Leveraging the latest advancements in AI, we develop intelligent systems using LLMs and other cutting-edge technologies to solve complex problems.',
    },
]

export function WhatWeDo() {
    return (
        <section className="mt-8 pt-28 lg:pt-32 container" id="what-we-do">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col items-start space-y-8 fade fade-left">
                    <h3 className="pill-heading">What We Do</h3>
                    <h2 className="">
                        Bluebird is your new <em>Technology Partner</em>
                    </h2>
                </div>
                <p className="h-full flex flex-col justify-end text-left fade fade-right">
                    We offer exclusive consulting, development and design resources for some of the
                    world’s most innovative, enduring systems.
                </p>
            </div>
            <div className="pt-12 lg:pt-32 flex flex-col md:flex-row flex-wrap justify-center">
                {CARDS.map((card) => (
                    <div
                        className="w-full md:w-1/2 xl:w-1/3 2xl:w-1/4 fade fade-up py-2 md:px-2 xl:py-6"
                        key={card.title}
                    >
                        <div className="h-full card p-6">
                            <div className="h-12 w-12 border border-white border-opacity-10 bg-white bg-opacity-10 flex items-center justify-center">
                                <Image src={card.icon} height={28} width={28} alt={card.title} />
                            </div>
                            <h2 className="text-[20px] leading-[25px] font-bold pt-8">
                                {card.title}
                            </h2>
                            <p className="text-left pt-4">{card.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
