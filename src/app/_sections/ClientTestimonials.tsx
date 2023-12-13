import { Fragment } from 'react'
import Image from 'next/image'

import alex from '@/images/testimonials/alex.png'
import danielle from '@/images/testimonials/danielle.jpeg'
import michail from '@/images/testimonials/michail.jpeg'
import philip from '@/images/testimonials/philip.jpg'
import stefan from '@/images/testimonials/stefan.png'
import { Carousel } from '@/components/carousel'

const blocks = [
    {
        title: 'Lead Product Manager, Fintech Lab',
        person: 'Stefan Griesel',
        icon: stefan,
        testimonial:
            "Thanks to Bluebird Development's work, the client onboarded three end customers at launch. Within a year, the app processed 500,000 transactions. The team worked well with the Agile methodology, meeting milestones ahead of time. Their efficiency, flexibility, and expertise also stood out.",
    },
    {
        person: 'Philip Mourarrige',
        title: 'Group CEO, Ambermacs PTY LTD',
        icon: philip,
        testimonial:
            "We've used Bluebird on multiple occasions and have been impressed with the speed and quality of work. All three websites and community portals were understood by Bluebird intuitively, executed professionally, and in a timely manner. I would definitely recommend them !",
    },
    {
        person: 'Danielle Laity',
        title: 'Head of Strategy, Aurora Sustainability',
        icon: danielle,
        testimonial:
            'Bluebird Development worked quickly without compromising the quality of their work. They maintained an excellent communication approach and provided regular updates on the progress of deliverables. Their skillset in development was impressive',
    },
    {
        person: 'Michail Scholiadis',
        title: 'Partner, BSC Global',
        icon: michail,
        testimonial:
            "Bluebird Development has been greatly contributing to the internal team's development project. Additionally, their culture and speed of work have been a great fit for the company. The entire team has been responsive and responsible, and there are no troubles with their work.",
    },
    {
        person: 'Alessandro Mion',
        title: 'Co-founder, Scriptex',
        icon: alex,
        testimonial:
            'Our company has worked with Bluebird on several occasions and it’s been great working with such adedicated and well skilled team. Their ability to correctly understand client requirements andtimeously deliver upon them using the right tech-fit is one of their greatest attributes.',
    },
]

export function ClientTestimonials() {
    return (
        <section className="w-full max-w-full flex flex-col items-center overflow-hidden pt-32 lg:pt-48 ">
            <div className="space-y-8 flex flex-col items-center pb-24 px-4">
                <h3 className="pill-heading fade fade-left">Client Testimonials</h3>
                <h2 className=" text-center fade fade-left">
                    <em>Working</em> with Bluebird
                </h2>
            </div>
            <Carousel
                items={blocks.map((block, i) => (
                    <Fragment key={i}>
                        <>
                            <p className="text-left max-w-full whitespace-normal flex-1 overflow-y-auto">
                                {block.testimonial}
                            </p>
                            <div className="mt-auto flex lg:flex-row flex-col w-full gap-x-6 lg:items-center lg:pt-0 pt-8">
                                <div className="h-16 min-w-[64px] rounded-full relative overflow-hidden">
                                    <Image
                                        src={block.icon}
                                        alt={block.person}
                                        width={64}
                                        style={{
                                            objectFit: 'cover',
                                            filter: 'grayscale()',
                                            borderRadius: 32,
                                        }}
                                    />
                                </div>
                                <div className="w-full whitespace-normal">
                                    <div className="text-lg font-bold lg:pt-0 lg:pb-0 pt-4 pb-1">
                                        {block.person}
                                    </div>
                                    <div className="font-light text-white text-opacity-50">
                                        {block.title}
                                    </div>
                                </div>
                            </div>
                        </>
                    </Fragment>
                ))}
            />
        </section>
    )
}
