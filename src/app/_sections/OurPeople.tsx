import Image from 'next/image'

import cj from '@/images/who-we-are/cj.jpg'
import rikus from '@/images/who-we-are/rikus.jpg'
import wester from '@/images/who-we-are/wester.jpg'
import nick from '@/images/who-we-are/nick.jpg'

import linkedin from '@/images/linkedin.svg'
import fb from '@/images/fb.svg'
import insta from '@/images/insta.svg'

const blocks = [
    {
        person: 'CJ Visser',
        image: cj,
        title: 'Founder & CEO',
        description:
            'An entrepreneurial software engineer, CJ sets the direction for Bluebird - pairing deep technical experience with a builder’s instinct for what businesses actually need, and leading our adoption of AI-assisted engineering.',
        linkedin: 'https://www.linkedin.com/in/cjvisser/',
        fb: 'https://www.facebook.com/visser.cj',
    },
    {
        person: 'Rikus Louw',
        image: rikus,
        title: 'Chief Architect',
        description:
            'A seasoned financial software architect, Rikus engineers stability from complexity. He guides our projects on compliance, security, and performance, and mentors the engineers who build alongside him.',
        linkedin: 'https://www.linkedin.com/in/rikuswlouw/',
        fb: 'https://www.facebook.com/rikus.louw.984',
    },
    {
        person: 'Wester Visser',
        image: wester,
        title: 'COO',
        description:
            'A qualified Industrial Engineer, Wester runs the operational side of Bluebird - keeping projects on track, partnerships healthy, and the promises we make to clients ones we can keep.',
        insta: 'https://www.instagram.com/wester_visser/',
        fb: 'https://www.facebook.com/wester.visser',
        linkedin: 'https://www.linkedin.com/in/westervisser/',
    },
    {
        person: 'Nicholas Zaverdinos',
        image: nick,
        title: 'CTO',
        description:
            'A nomadic engineer fueled by tech and coffee, Nick leads our technical direction. His background spans cryptocurrency systems and modern tooling - he evaluates what’s new, keeps what works, and makes sure it holds up in production.',
        linkedin: 'https://www.linkedin.com/in/warpy/',
        fb: 'https://www.facebook.com/nomadzav',
        insta: 'https://www.instagram.com/nomadzav/',
    },
]

export function OurPeople() {
    return (
        <section
            className="container w-full max-w-full flex flex-col items-center overflow-hidden pt-24 lg:pt-32"
            id="people"
        >
            <div className="space-y-8 flex flex-col items-center pb-12 lg:pb-24">
                <h3 className="pill-heading fade fade-left">Our People</h3>
                <h2 className=" fade fade-left">The minds behind Bluebird</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
                {blocks.map((block) => (
                    <div key={block.person} className="card fade fade-up flex flex-col">
                        <div className="h-72 md:h-64 relative">
                            <Image
                                src={block.image}
                                alt={block.person}
                                style={{
                                    objectFit: 'cover',
                                    position: 'absolute',
                                    top: 0,
                                    height: '100%',
                                }}
                            />
                            <div className="absolute bottom-0 right-0 m-4 px-5 py-3 bg-secondary text-white text-base shadow">
                                {block.title}
                            </div>
                        </div>
                        <div className="px-6 pt-5 pb-6 flex-1 flex flex-col">
                            <h4 className="text-xl font-bold">{block.person}</h4>
                            <p className="flex pt-4">{block.description}</p>
                            <div className="flex space-x-5 pt-6">
                                <a href={block.linkedin} target="_blank">
                                    <Image
                                        src={linkedin}
                                        alt={block.person}
                                        style={{
                                            objectFit: 'cover',
                                        }}
                                    />
                                </a>
                                <a href={block.fb} target="_blank">
                                    <Image
                                        src={fb}
                                        alt={block.person}
                                        style={{
                                            objectFit: 'cover',
                                        }}
                                    />
                                </a>
                                {block.insta && (
                                    <a href={block.insta} target="_blank">
                                        <Image
                                            src={insta}
                                            alt={block.person}
                                            style={{
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
