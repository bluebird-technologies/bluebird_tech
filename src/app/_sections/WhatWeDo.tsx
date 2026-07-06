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
            'Native or cross-platform. Senior engineers on proven mobile foundations, working AI-assisted - beautiful apps delivered in weeks, not quarters.',
    },
    {
        title: 'Web Development',
        icon: web,
        content:
            'Fast, responsive, and secure websites and web apps - built on foundations we bring with us, so hosting, deployment, and security are handled from day one.',
    },
    {
        title: 'Infrastructure Development',
        icon: infrastructure,
        content:
            'From banking systems to logistics platforms. Proper data modelling, secrets management, and monitoring are part of every build - not afterthoughts.',
    },
    {
        title: 'Product Management',
        icon: pm,
        content:
            'Clear scope, honest estimates, and steady communication. We set expectations you can plan a business around, and we deliver on them.',
    },
    {
        title: 'UX/UI Design',
        icon: ux,
        content:
            'We design interfaces your customers actually understand - from first wireframe to pixel-level polish, iterating with you until it feels right.',
    },
    {
        title: 'Developer Outsourcing',
        icon: outsourcing,
        content:
            'Need senior hands inside your own team? We place engineers from our vetted network - people who work the way we do and hold the same standards.',
    },
    {
        title: 'API & System Development',
        icon: api,
        content:
            'We build robust APIs that connect your systems reliably - so data flows where it should and manual work disappears.',
    },
    {
        title: 'AI Development',
        icon: ai,
        content:
            'We build practical AI features that hold up in production - LLM-powered systems with the same engineering discipline as everything else we ship.',
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
                    We’re the senior team behind some of the world’s most enduring systems. Every
                    project starts on foundations we’ve already proven in production - deployment
                    pipelines, security, monitoring, and proper data modelling from day one.
                </p>
            </div>
            <div className="pt-12 lg:pt-32 flex flex-col md:flex-row flex-wrap justify-center">
                {CARDS.map((card) => (
                    <div
                        className="w-full md:w-1/2 xl:w-1/3 2xl:w-1/4 fade fade-up py-2 md:px-2 xl:py-6"
                        key={card.title}
                    >
                        <div className="h-full card p-6">
                            <div className="h-12 w-12 border border-white/10 bg-white/10 flex items-center justify-center">
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
