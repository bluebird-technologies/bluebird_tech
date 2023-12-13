import Image from 'next/image'
import howWeStarted from '@/images/how-we-started.jpg'
import Link from 'next/link'

export function HowItStarted() {
    return (
        <section className="mt-24 lg:mt-48 container card p-8 lg:p-14 flex flex-col lg:flex-row gap-12 items-stretch mb-4">
            <div className="lg:flex-1 h-64 lg:h-auto relative fade fade-left">
                <Image
                    src={howWeStarted}
                    alt="how-we-started"
                    sizes="100%"
                    fill
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </div>
            <div className="lg:w-3/5 flex flex-col items-start">
                <h3 className="pill-heading fade fade-right">Our Company</h3>
                <h2 className=" pt-8 fade fade-right">How it all started</h2>
                <div className="pt-4">
                    <p className="text-white font-normal fade fade-right">
                        At Bluebird Technologies, we are on a simple mission: to build timeless,
                        boutique software that endures beyond us. We work across industry,
                        partnering with corporates and founders alike.
                        <br />
                        <br />
                    </p>
                    <p className="fade fade-right">
                        In 2018, the Bluebird brand took flight with our three founding members and
                        a boatload of ambition. Today, our company is made up of a multi-national
                        team working asynchronously from several global cities, and across
                        timezones. Over time, Bluebird has built a professional network of skilled
                        technologists whose shared dedication to Bluebird’s goals and values unites
                        us all across time and geography. <br />
                        <br />
                        We are proud to say that the Bluebird team carries the badges of startup
                        founders, global adventurers and contributors to renowned software systems
                        around the world. We are brought together by our passion for building
                        software that really lasts; our company is all about endurance over
                        innovation-for-innovation-sake. <br />
                        <br />
                        Bluebird works around our clients’ needs, adapting to tech stacks and
                        evolving our skillset as we go. The way we approach each of our clients’
                        challenges is bespoke - we do not believe in plug-and-play solutions to big
                        world problems. Targeted, unique and distinctive is our way. We strike the
                        perfect balance between leveraging modern technologies and staying ahead of
                        the curve, while deeply honouring time-tested methodologies. <br />
                        <br />
                        For us, success is longevity and endurance. We do the tech equivalent of
                        timeless classics, instead of whizz-pow ‘fast fashion’. As custodians of
                        tomorrow’s software, we take enormous pride in crafting solutions that
                        embody simplicity, power, sustainability and beauty.
                    </p>
                    <div className="mt-8 flex">
                        <Link className="btn-primary fade fade-right" href="/#contact-us">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
