'use client'

import { Modal } from '@/components/modal'
import { getUserCurrency } from '@/utils'

const resources = [
    {
        name: 'Intermediate Dev',
        rates: {
            '£': ['20', '40'],
            '€': ['25', '50'],
            R: ['400', '800'],
            $: ['25', '50'],
        },
    },
    {
        name: 'Senior Dev',
        rates: {
            '£': ['40', '80'],
            '€': ['50', '80'],
            R: ['800', '1,200'],
            $: ['50', '80'],
        },
    },
    {
        name: 'Expert Dev/Consultant',
        rates: {
            '£': ['80', '150'],
            '€': ['80', '160'],
            R: ['1,200', '2,000'],
            $: ['80', '160'],
        },
    },
    {
        name: 'Product Manager',
        rates: {
            '£': ['25', '50'],
            '€': ['30', '60'],
            R: ['500', '900'],
            $: ['30', '60'],
        },
    },
    {
        name: 'Designer (UX/UI)',
        rates: {
            '£': ['20', '40'],
            '€': ['25', '50'],
            R: ['400', '800'],
            $: ['25', '50'],
        },
    },
]

const userCurrency = getUserCurrency()

export default function ResourcePage() {
    return (
        <Modal closeLink="/quote-calculator" title="Rate Card">
            <div className="">
                <div className="border-b border-white border-opacity-10 text-xl font-bold py-4 flex flex-col md:flex-row">
                    <div className="flex-1 font-thin md:font-bold">Talent</div>
                    <div className="flex-1 md:text-right">Hourly Rate ({userCurrency})</div>
                </div>
                <div className="space-y-4 py-4">
                    {resources.map((resource) => {
                        const [from, to] = resource.rates[userCurrency] || resource.rates.$
                        return (
                            <div
                                key={resource.name}
                                className="text-white text-lg flex flex-col md:flex-row"
                            >
                                <div className="font-light flex-1">{resource.name}</div>
                                <div className="font-bold flex-1 md:text-right">
                                    {from} - {to}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Modal>
    )
}
