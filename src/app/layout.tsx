import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Nunito_Sans } from 'next/font/google'
import bg from '../../public/bg.jpeg'
import Image from 'next/image'
import Script from 'next/script'

const inter = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    variable: '--body',
})

const sourceSans3 = Nunito_Sans({
    subsets: ['latin'],
    weight: ['300', '500', '700'],
    style: ['italic', 'normal'],
    variable: '--heading',
})

const description =
    'Bluebird Development provides exclusive consulting, development, and design resources for you and your team.'
const title = 'Bluebird - Home'

export const metadata: Metadata = {
    title,
    description,
    viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
    twitter: {
        title,
        description,
        card: 'summary_large_image',
    },
    openGraph: {
        title,
        description,
        type: 'website',
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable} ${sourceSans3.variable}`}>
            <body className={`${inter.className} relative bg-[#0c1534] flex justify-center no-js`}>
                <Image
                    src={bg}
                    className="hidden sm:block"
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
                {/* </div> */}
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
                          ), url(https://grainy-gradients.vercel.app/noise.svg)`,
                        }}
                    ></div>
                </div>
                {children}
            </body>

            <Script src="./script.js" />
        </html>
    )
}
