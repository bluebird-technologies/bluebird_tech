import main from '@/images/case-studies/getstartedza/main.png'
import challenge from '@/images/case-studies/getstartedza/challenge.png'
import approach from '@/images/case-studies/getstartedza/approach.png'
import mockup from '@/images/case-studies/getstartedza/mockup.png'
import designProcess from '@/images/case-studies/getstartedza/design_process.png'
import buildProcess from '@/images/case-studies/getstartedza/build_process.png'

import { CaseStudy, CaseStudyLayout } from '../_components/case-study-layout'
import type { Metadata } from 'next'

const title = 'Bluebird - GetStarted'

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
    id: 'getstartedsa',
    name: 'GetStarted',
    intro: {
        heading: <>Zero interest micro loan payment platform</>,
        description: (
            <>
                GetStarted approached us with the idea of a micro loan payment platform. We
                assisted in the creation of wireframes and designs, which in turn led to the full
                development of the platform. A full cycle development approach was implemented, and
                the platform was built in 2 months post design phase.
            </>
        ),
        servicesOffered: [
            'Web Development',
            'Product Management',
            'API Integration',
            'Payment Integration',
            'Credit partner integration',
            'Admin Portal',
        ],
        image: main,
    },
    challenge: {
        concept: (
            <>
                A platform through which individuals can seamlessly apply for and acquire a micro
                loan, with a thorough credit check process to maintain a high quality applicant
                pool.
            </>
        ),
        gap: (
            <>
                With a zero interest loan model, the company would be able to market accordingly and
                stand out beyond their competitors and the interest rates that they have.
            </>
        ),
        problem: (
            <>
                Few quality micro loan companies operate within the South African market, and
                fewer still offer zero interest rates.
            </>
        ),
        image: challenge,
    },
    approach: {
        whatWeNeededToKnow: [
            <>
                We had to know what would ensure a thorough credit check process, in order to
                maintain a high quality application pool and returns.
            </>,
            <>
                The user journey would have to be identified, together with what steps need to be
                taken by both the applicant and the company in what order to create the most
                efficient application process.
            </>,
            <>
                Integrations with multiple credit and payment providers had to be mapped out, and
                documentation gathered for API integration.
            </>,
        ],
        howWeUncoveredThisInformation: [
            <>
                We implemented a three step credit check consisting of a warm body check, an ID
                number credit check, and a profitability check by means of statement upload and
                parsing.
            </>,
            <>
                We analysed and improved existing client wireframes & designs, and translated them
                into a user tested front end screen journey.
            </>,
            <>
                API docs from integration partners were inspected, and the corresponding APIs were
                implemented into the user journey mapped out in the previous step.
            </>,
        ],
        image: approach,
    },
    mockup,

    process: {
        design: [
            <>Creating user journey flow diagrams and wireframes using Miro </>,
            <>Front end screen designs using Adobe XD</>,
            <>Admin portal and database design for users and attributes</>,
        ],
        designImage: designProcess,
        buildImage: buildProcess,
        build: [
            <>
                Build React web application for application process in parallel with API
                integrations
            </>,
            <>Setup CI/CD for development and production environments.</>,
            <>Build an admin portal with authentication and master controls linking to the DB</>,
            <>Implement a Node.js backend for integrations</>,
        ],
    },
    achieved: {
        heading: '1000 recurring users within 2 months of launch',
        list: [
            <>
                A very user-friendly zero interest micro loan platform, with a high customer return
                rate
            </>,
            <>An integrated and automated chat service for customer support</>,
            <>An interactive application process secured with identity checks and OTPs</>,
        ],
    },
}

export default function getstartedzaPage() {
    return <CaseStudyLayout caseStudy={caseStudy} />
}
