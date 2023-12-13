'use client'
import { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'

import platform_apple from '@/images/calculator/platform_apple.svg'
import platform_android from '@/images/calculator/platform_android.svg'
import platform_web from '@/images/calculator/platform_web.svg'
import platform_multi from '@/images/calculator/platform_multi.svg'

import size_small from '@/images/calculator/size_small.svg'
import size_medium from '@/images/calculator/size_medium.svg'
import size_large from '@/images/calculator/size_large.svg'

import designer_yes from '@/images/calculator/designer_yes.svg'
import designer_no from '@/images/calculator/designer_no.svg'

import ui_mvp from '@/images/calculator/ui_mvp.svg'
import ui_stock from '@/images/calculator/ui_stock.svg'
import ui_beautiful from '@/images/calculator/ui_beautiful.svg'

import login_email from '@/images/calculator/login_email.svg'
import login_social from '@/images/calculator/login_social.svg'
import login_unsure from '@/images/calculator/login_unsure.svg'

import profile_yes from '@/images/calculator/profile_yes.svg'
import profile_no from '@/images/calculator/profile_no.svg'
import profile_unsure from '@/images/calculator/profile_unsure.svg'

import connected_yes from '@/images/calculator/connected_yes.svg'
import connected_no from '@/images/calculator/connected_no.svg'
import connected_unsure from '@/images/calculator/connected_unsure.svg'

import payment_subscription from '@/images/calculator/payment_subscription.svg'
import payment_processing from '@/images/calculator/payment_processing.svg'
import payment_cart from '@/images/calculator/payment_cart.svg'
import payment_marketplace from '@/images/calculator/payment_marketplace.svg'

import portal_cms from '@/images/calculator/portal_cms.svg'
import portal_perf from '@/images/calculator/portal_perf.svg'
import portal_moderation from '@/images/calculator/portal_moderation.svg'
import portal_analytics from '@/images/calculator/portal_analytics.svg'

import location_calendar from '@/images/calculator/location_calendar.svg'
import location_bookings from '@/images/calculator/location_bookings.svg'
import location_gps from '@/images/calculator/location_gps.svg'
import location_maps from '@/images/calculator/location_maps.svg'
import { getUserCurrency } from '@/utils'
import { ContactUs } from './_content/ContactUs'
import Script from 'next/script'

const sections: {
    id: string
    label: string
    multiple?: boolean
    options: {
        id: string
        label: string
        rate?:
            | number
            | {
                  key: [string, string]
                  true: number
                  false: number
              }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        icon: any
        iconHeight?: number
    }[]
}[] = [
    {
        id: 'platform',
        label: 'What type of platform are you building?',
        options: [
            {
                id: 'apple',
                label: 'Apple iOS',
                icon: platform_apple,
                rate: 5250,
            },
            {
                id: 'android',
                label: 'Android',
                icon: platform_android,
                rate: 5250,
            },
            {
                id: 'web',
                label: 'Web',
                icon: platform_web,
                rate: 3500,
            },
            {
                id: 'multi',
                label: 'Multi-Platform',
                icon: platform_multi,
                rate: 10510,
            },
        ],
    },
    {
        id: 'size',
        label: 'How big is your platform?',
        options: [
            {
                id: 'small',
                label: 'Small',
                icon: size_small,
                iconHeight: 32,
                rate: 1750,
            },
            {
                id: 'medium',
                label: 'Medium',
                icon: size_medium,
                iconHeight: 48,
                rate: 3500,
            },
            {
                id: 'large',
                label: 'Large',
                icon: size_large,
                iconHeight: 64,
                rate: 5250,
            },
        ],
    },
    {
        id: 'designer',
        label: 'Do you have a designer?',
        options: [
            {
                id: 'yes',
                label: 'Yes',
                icon: designer_yes,
            },
            {
                id: 'no',
                label: 'No',
                icon: designer_no,
            },
        ],
    },
    {
        id: 'ui',
        label: 'What level of UX/UI do you want?',
        options: [
            {
                id: 'mvp',
                label: 'MVP',
                icon: ui_mvp,
                rate: {
                    key: ['designer', 'yes'],
                    true: 1150,
                    false: 2300,
                },
            },
            {
                id: 'stock',
                label: 'Stock',
                icon: ui_stock,
                rate: {
                    key: ['designer', 'yes'],
                    true: 1720,
                    false: 3450,
                },
            },
            {
                id: 'beautiful',
                label: 'Beautiful',
                icon: ui_beautiful,
                rate: {
                    key: ['designer', 'yes'],
                    true: 2300,
                    false: 4590,
                },
            },
        ],
    },
    {
        id: 'login',
        label: 'Do people have to log in?',
        multiple: true,
        options: [
            {
                id: 'email',
                label: 'Email',
                icon: login_email,
                rate: 1310,
            },
            {
                id: 'social',
                label: 'Social',
                icon: login_social,
                rate: 1310,
            },
            {
                id: 'unsure',
                label: 'Not Sure',
                icon: login_unsure,
                rate: 440,
            },
        ],
    },
    {
        id: 'profile',
        label: 'Do people create personal profiles?',
        options: [
            {
                id: 'yes',
                label: 'Yes',
                icon: profile_yes,
                rate: 2630,
            },
            {
                id: 'no',
                label: 'No',
                icon: profile_no,
                rate: 0,
            },
            {
                id: 'unsure',
                label: 'Not Sure',
                icon: profile_unsure,
                rate: 440,
            },
        ],
    },
    {
        id: 'connected',
        label: 'Does your app and website need to be connected?',
        options: [
            {
                id: 'yes',
                label: 'Yes',
                icon: connected_yes,
                rate: 1310,
            },
            {
                id: 'no',
                label: 'No',
                icon: connected_no,
                rate: 0,
            },
            {
                id: 'unsure',
                label: 'Not Sure',
                icon: connected_unsure,
                rate: 440,
            },
        ],
    },
    {
        id: 'payment',
        label: 'Are there payments involved?',
        multiple: true,
        options: [
            {
                id: 'subscription',
                label: 'Subscription',
                icon: payment_subscription,
                rate: 3500,
            },
            {
                id: 'processing',
                label: 'Payment Processing',
                icon: payment_processing,
                rate: 7010,
            },
            {
                id: 'cart',
                label: 'Shopping Cart',
                icon: payment_cart,
                rate: 8760,
            },
            {
                id: 'marketplace',
                label: 'Marketplace',
                icon: payment_marketplace,
                rate: 8760,
            },
        ],
    },
    {
        id: 'portal',
        label: 'Do you want an admin portal?',
        multiple: true,
        options: [
            {
                id: 'cms',
                label: 'CMS',
                icon: portal_cms,
                rate: 2630,
            },
            {
                id: 'perf',
                label: 'Performance Monitoring',
                icon: portal_perf,
                rate: 3500,
            },
            {
                id: 'moderation',
                label: 'Moderation / Content Approval',
                icon: portal_moderation,
                rate: 3500,
            },
            {
                id: 'analytics',
                label: 'Usage Analytics',
                icon: portal_analytics,
                rate: 2190,
            },
        ],
    },
    {
        id: 'location',
        label: 'Dates and location?',
        multiple: true,
        options: [
            {
                id: 'calendar',
                label: 'Calendar',
                icon: location_calendar,
                rate: 4380,
            },
            {
                id: 'bookings',
                label: 'Bookings',
                icon: location_bookings,
                rate: 3500,
            },
            {
                id: 'gps',
                label: 'Live GPS Tracking',
                icon: location_gps,
                rate: 7010,
            },
            {
                id: 'maps',
                label: 'Maps Integration',
                icon: location_maps,
                rate: 7010,
            },
        ],
    },
]

const userCurrency = getUserCurrency()

export default function BuildAPlatformPage() {
    const router = useRouter()
    const [answers, setAnswers] = useState(
        sections.reduce(
            (acc, section) => {
                acc[section.id] = {}
                return acc
            },
            {} as Record<string, Record<string, boolean>>,
        ),
    )

    let price = sections.reduce((acc, section) => {
        const sectionPrice = section.options.reduce((acc, option) => {
            if (!option.rate) return acc
            const answer = answers[section.id][option.id]
            if (!answer) return acc
            if (typeof option.rate === 'number') {
                return acc + option.rate
            }
            const [sectionId, optionId] = option.rate.key
            const matchedAnswer = answers[sectionId][optionId]
            return acc + (matchedAnswer ? option.rate.true : option.rate.false)
        }, 0)
        return acc + sectionPrice
    }, 0)

    if (userCurrency === 'R') {
        price = price * 20
    }

    function onClick(sectionId: string, optionId: string, multiple: boolean) {
        setAnswers((answers) => ({
            ...answers,
            [sectionId]: multiple
                ? {
                      ...answers[sectionId],
                      [optionId]: !answers[sectionId][optionId],
                  }
                : {
                      [optionId]: !answers[sectionId][optionId],
                  },
        }))
        if (!multiple) {
            const sectionIndex = sections.findIndex((section) => section.id === sectionId)
            const nextSection = sections[sectionIndex + 1]
            if (nextSection) {
                router.push(`#${nextSection.id}`)
            }
        }
    }

    return (
        <>
            <div className="pt-8 lg:pt-28 pb-20 container">
                <div className="fixed bottom-[16px] right-[16px] lg:bottom-[8%] lg:right-[3%] px-8 py-5 bg-secondary z-10">
                    <div className="font-medium">Price Estimate</div>
                    <div className="font-bold text-2xl">
                        {userCurrency} {price.toLocaleString()}
                    </div>
                </div>
                <div className="inline-block">
                    <h3 className="pill-heading">Build A Plaform</h3>
                </div>
                <div className="space-y-0 -mt-20">
                    {sections.map((section) => (
                        <section key={section.id} className="pt-32" id={section.id}>
                            <h3 className="fade fade-left">{section.label}</h3>
                            <ol className="flex pt-8 fade fade-up flex-wrap -mx-3 gap-y-4 sm:gap-y-6">
                                {section.options.map((option) => {
                                    const isActive = answers[section.id][option.id]
                                    return (
                                        <li
                                            key={option.label}
                                            className={clsx('h-36 sm:h-48 px-3 w-1/2', {
                                                'lg:w-1/4': section.options.length === 4,
                                                'md:w-1/3': section.options.length === 3,
                                            })}
                                        >
                                            <button
                                                className={clsx(
                                                    'h-full w-full card flex flex-col items-center justify-center space-y-4 transition p-4',
                                                    {
                                                        '!border-secondary bg-white bg-opacity-10':
                                                            isActive,
                                                    },
                                                )}
                                                onClick={() =>
                                                    onClick(
                                                        section.id,
                                                        option.id,
                                                        !!section.multiple,
                                                    )
                                                }
                                            >
                                                <Image
                                                    src={option.icon}
                                                    alt={option.label}
                                                    height={option.iconHeight || 56}
                                                />
                                                <div className="lg:text-lg font-medium">
                                                    {option.label}
                                                </div>
                                            </button>
                                        </li>
                                    )
                                })}
                            </ol>
                        </section>
                    ))}
                </div>
            </div>
            <Script src="https://web3forms.com/client/script.js" />
            <ContactUs quote={JSON.stringify({ answers, price })} />
        </>
    )
}
