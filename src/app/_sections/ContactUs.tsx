'use client'
import { FormEvent, useState } from 'react'
import Image from 'next/image'

import contact from '@/images/contact.jpg'
import check from '@/images/check.svg'

export function ContactUs() {
    const [isSuccess, setIsSuccess] = useState(false)

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.target as HTMLFormElement)

        await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        })

        setIsSuccess(true)
    }
    return (
        <section id="contact-us" className="pt-24 lg:pt-32 container">
            <div className="card flex flex-col-reverse lg:flex-row items-stretch">
                <div className="lg:w-3/5 flex flex-col items-start p-5 lg:p-14">
                    <h3 className="pill-heading fade fade-left">Contact Us</h3>
                    <h2 className="pt-5 fade fade-left pb-8">Get in touch today</h2>
                    {!isSuccess ? (
                        <form
                            className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-8 w-full fade fade-left"
                            onSubmit={onSubmit}
                        >
                            <input
                                type="hidden"
                                name="access_key"
                                value="1c52aea3-2a93-4f7a-ae34-3722c6ffdff1"
                            ></input>
                            <input placeholder="Full name" name="full_name" type="text" required />
                            <input placeholder="Email Address" name="email" type="email" required />
                            <input placeholder="+1 932 123 123" name="phone" type="tel" />
                            <input placeholder="Company (Optional)" name="company" type="text" />
                            <textarea
                                placeholder="Type your message here"
                                rows={3}
                                className="col-span-2"
                                name="message"
                                required
                            />
                            <div className="pt-4">
                                <button className="btn-primary" type="submit">
                                    Get in Touch
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="border border-white border-opacity-20 p-7 flex space-x-5 bg-white bg-opacity-5">
                            <Image src={check} alt="check" />
                            <div className="space-y-1">
                                <div className="text-lg font-bold">Thank you</div>
                                <p className="text-sm">
                                    Thanks for reaching out. We will get back to you soon.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="lg:flex-1 lg:h-auto relative fade fade-right h-64">
                    <Image
                        src={contact}
                        alt="contact"
                        sizes="100%"
                        fill
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>
            </div>
        </section>
    )
}
