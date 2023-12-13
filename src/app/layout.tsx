import './globals.css'

import type { Metadata } from 'next'
import { Montserrat, Nunito_Sans } from 'next/font/google'
import Image from 'next/image'
import Script from 'next/script'

import bg from '@/images/bg.jpeg'
import { Header } from './_header/Header'
import { Footer } from './_footer/Footer'

const bodyFont = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    variable: '--body',
})

const headingFont = Nunito_Sans({
    subsets: ['latin'],
    weight: ['300', '500', '700'],
    style: ['italic', 'normal'],
    variable: '--heading',
})

const title = 'Bluebird'

const description =
    'Bluebird Development provides exclusive consulting, development, and design resources for you and your team.'

export const metadata: Metadata = {
    metadataBase: process.env.NODE_ENV === 'production' ? null : new URL('http://localhost:3000'),
    description,
    title,
    viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
    twitter: {
        description,
        title,
        card: 'summary_large_image',
    },
    openGraph: {
        description,
        title,
        type: 'website',
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        // Injects the variables in the <html> tag, so that they can be used in CSS, as in `var(--body)`
        <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
            <body className="relative bg-primary flex flex-col">
                {/* Use background image overlay for desktop */}
                <Image
                    src={bg}
                    className="hidden sm:block huge:hidden"
                    alt="Background"
                    quality={90}
                    style={{
                        position: 'absolute',
                        top: 0,
                        zIndex: -1,
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: '50% 0%',
                    }}
                />

                {/* Don't use overlay image for mobile, since the quality of a low size image is noticable. Rather use a custom gradient background. */}
                <div className="sm:hidden">
                    <div
                        className="absolute top-0 h-full w-full z-[-1]"
                        style={{
                            backgroundImage: `repeating-linear-gradient(
                            165deg,
                            rgb(13,22,53),
                            rgb(13,22,53),
                            rgb(20,108,232),
                            rgb(18,38,111),
                            rgb(24,41,133),
                            rgb(13,22,53) 4000px
                          )`,
                        }}
                    ></div>
                </div>
                <Header />

                <main className="flex flex-col items-center w-full">
                    {children}
                    <Footer />
                </main>
            </body>

            {/* Fade script */}
            <Script src={`/fade-script.js`} />

            {/* Google Analytics */}
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-TGB645J9J0" />
            <Script id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
            
                    gtag('config', 'G-TGB645J9J0');
                `}
            </Script>
        </html>
    )
}
