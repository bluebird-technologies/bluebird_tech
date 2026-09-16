import type { Metadata } from 'next'

const title = 'Bluebird - Build a Platform'

export const metadata: Metadata = {
    title,
    twitter: {
        title,
    },
    openGraph: {
        title,
    },
}

export default function BuildAPlatformLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
