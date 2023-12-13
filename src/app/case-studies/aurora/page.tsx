import main from '@/images/case-studies/aurora/main.png'
import challenge from '@/images/case-studies/aurora/challenge.png'
import mockup from '@/images/case-studies/aurora/mockup.png'
import approach from '@/images/case-studies/aurora/approach.jpg'
import process from '@/images/case-studies/aurora/process.png'
import buildProcess from '@/images/case-studies/aurora/build_process.jpg'

import { CaseStudy, CaseStudyLayout } from '../_components/case-study-layout'
import type { Metadata } from 'next'

const title = 'Bluebird - Aurora'

export const metadata: Metadata = {
    title,
    twitter: {
        title,
    },
    openGraph: {
        title,
    },
}

const caseStudy: CaseStudy = {
    id: 'aurora',
    name: 'Aurora',
    intro: {
        heading: 'Tool for carbon footprint awareness and offsetting',
        description: (
            <>
                Aurora was initially built by another development company. They lacked adaptability
                which resulted in an unmaintainable code base. We were initially tasked only to
                finish the original MVP, but it soon became clear that we had to re-write
                everything. The original project ran for more than one year, and we rebuilt it in
                three months.
            </>
        ),
        servicesOffered: [
            'Web App Architecture and Development',
            'Cloud Hosting',
            'API Architecture and Development',
            'China Deployment',
        ],
        image: main,
    },
    challenge: {
        concept: (
            <>
                A tool in which individuals can determine their carbon emissions and allow them to
                reduce or eliminate their footprint through various mechanisms.
            </>
        ),
        gap: (
            <>
                {' '}
                Their goal at this time was to become the tool for carbon footprint awareness and
                offsetting, ultimately creating a more sustainable world.
            </>
        ),
        problem: (
            <>
                General lack of awareness and effort on many individuals when it comes to living in
                and creating a more sustainable world.
            </>
        ),
        image: challenge,
    },
    approach: {
        whatWeNeededToKnow: [
            <>
                We have never launched a product in China before. We had to learn the requirements
                around hosting as well as determine which dependencies would need to be replaced due
                to their firewall.
            </>,
            <>
                The project we took over had an obscure implementation, constructed and implemented
                by certain data scientists with whom we had no contact with.
            </>,
            <>
                The most complex part of the initial product was how the App’s questions translated
                into carbon emissions.
            </>,
        ],
        howWeUncoveredThisInformation: [
            <>
                Lots of research in China hosting as well as WeChat business application process and
                documentation.
            </>,
            <>
                By digging into the unstructured and undocumented calculation functions, we were
                able to determine the original intention and design a calculation engine which was
                both easy to work with as well as scalable
            </>,
        ],
        image: approach,
    },
    mockup,

    process: {
        design: [
            <>Ensure configurability using Retool.</>,
            <>Work through several entity relation diagrams for the new database.</>,
            <>Determine architecture for dynamic quiz and dynamic calculation engine.</>,
        ],
        designImage: process,
        buildImage: buildProcess,
        build: [
            <>Setup CI/CD for development and production environments.</>,
            <>Build React web application in parallel with API features.</>,
            <>Build Authentication, dynamic quiz engine and dynamic calculation engine.</>,
            <>Implement code-first database solution and .NET API.</>,
        ],
    },
    achieved: {
        heading: 'Company and product bought by the largest insurance company in Africa',
        list: [
            <>
                A very user-friendly carbon footprint calculator and awareness tool, built to be
                highly configurable and scalable.
            </>,
            <>
                The user would enter on the quiz and answer lifestyle questions around food
                consumption, travel usage and other sustainability focused areas.
            </>,
            <>
                The app would suggest tips on what they can do to offset their emissions based on
                their quiz input
            </>,
        ],
    },
}

export default function AuroraPage() {
    return <CaseStudyLayout caseStudy={caseStudy} />
}
