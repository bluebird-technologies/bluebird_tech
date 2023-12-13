import main from '@/images/case-studies/raubex/main.png'
import challenge from '@/images/case-studies/raubex/challenge.png'
import approach from '@/images/case-studies/raubex/approach.png'
import mockup from '@/images/case-studies/raubex/mockup.png'
import designProcess from '@/images/case-studies/raubex/design_process.png'
import buildProcess from '@/images/case-studies/raubex/build_process.jpg'

import { CaseStudy, CaseStudyLayout } from '../_components/case-study-layout'
import type { Metadata } from 'next'

const title = 'Bluebird - Raubex'

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
    id: 'raubex',
    name: 'Raubex',
    intro: {
        heading: (
            <>
                South Africa’s leading infrastructure development and construction materials supply
                groups
            </>
        ),
        description: (
            <>
                Originally Bluebird was contracted to maintain a 2nd generation system for Raubex
                Building Group. As this system started scaling it started to show some serious
                cracks. After about a year and a half, we convinced Raubex to rebuild this from the
                ground up.
            </>
        ),
        servicesOffered: [
            'System Architecture',
            'Back-end Development',
            'Infrastructure Design',
            'Database Design',
            'Web Development',
        ],
        image: main,
    },
    challenge: {
        concept: (
            <>
                The system needs to cater for the day-to-day operations at Raubex. This involves
                loading requisitions, creating orders and managing deliveries.
            </>
        ),
        gap: (
            <>
                No affordable systems exist that focus specifically on the “building world”. A new
                system could open up the possibilities of automating tasks that have been manual up
                to this point.
            </>
        ),
        problem: (
            <>
                The previous system was very slow and sometimes even unusable. Some processes are
                manual and Excel-based.
            </>
        ),
        image: challenge,
    },
    approach: {
        whatWeNeededToKnow: [
            <>
                Understand possible Architecture constraints (cloud hosting, email server hosting,
                internal firewall access, etc.).
            </>,
            <>Determine regular process flows to optimise for scaling</>,
            <>Distill core concepts that would define the system</>,
            <>We needed to determine a breakdown of all the intended roles and permissions</>,
        ],
        howWeUncoveredThisInformation: [
            <>Meetings with internal IT department</>,
            <>Domain knowledge acquired by working on older system</>,
            <>Calls and meetings with stakeholders</>,
        ],
        image: approach,
    },
    mockup,

    process: {
        design: [
            <>
                Determined which parts of the old system could be reused to not reinvent the wheel.
            </>,
            <>Created wireframes to visualise the website flow and function.</>,
            <>
                Created multiple iterations of entity relationship diagrams (ERD) to flesh out
                possible database structures.
            </>,
        ],
        designImage: designProcess,
        buildImage: buildProcess,
        build: [
            <>Hosted all infrastructure on Azure, with repo and CI/CD on Github.</>,
            <>Opted for a code-first database option to facilitate easy changes and maintenance.</>,
            <>
                Used our own internal boilerplate for the website structure (react, tailwind, d-man,
                etc.).
            </>,
            <>
                Domain driven design principles on the backend to clean up the structure and make it
                more manageable and scalable.
            </>,
        ],
    },
    achieved: {
        heading: 'What we built is the main system actively used at the company today',
        list: [
            <>A fully fledged user management and permission based system</>,
            <>Ability to create, edit, and delete orders and requisitions</>,
            <>Procedures to action deliveries and call-offs</>,
            <>Functionality to export orders and deliveries to external accounting system.</>,
            <>Ability to produce PDF quotes, orders and delivery notes.</>,
        ],
    },
}

export default function RaubexPage() {
    return <CaseStudyLayout caseStudy={caseStudy} />
}
