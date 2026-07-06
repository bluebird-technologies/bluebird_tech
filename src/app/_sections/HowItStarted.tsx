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
                        At Bluebird Technologies, we are on a simple mission: to build software that
                        endures beyond us. We work across industries, partnering with corporates and
                        founders alike.
                        <br />
                        <br />
                    </p>
                    <p className="fade fade-right">
                        In 2018, Bluebird took flight with three founding members and a boatload of
                        ambition. Today, we are a multi-national team of senior engineers working
                        across cities and timezones - startup founders, global adventurers, and
                        contributors to well-known software systems around the world. What unites us
                        is a shared conviction: software should last. <br />
                        <br />
                        The tools have changed since 2018, and we changed with them. We adopted AI
                        tooling early, and it has made us significantly faster and more
                        cost-effective. But AI makes experienced engineers faster - it does not
                        replace the judgment that keeps software secure, maintainable, and worth
                        betting a business on. That judgment, and the battle-tested foundations we
                        bring to every project, are still ours. <br />
                        <br />
                        We do not believe in plug-and-play answers to hard problems. Every
                        engagement starts with understanding your business, and every build stands
                        on foundations we have proven in production: deployment pipelines, secrets
                        management, monitoring, and proper data modelling from the first commit.{' '}
                        <br />
                        <br />
                        For us, success is longevity. We ship it, we stand behind it, and it still
                        works years later. That is the standard we hold ourselves to on every
                        project.
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
