import { ReactNode } from 'react'

export function Hero({
    subtitle,
    title,
    description,
    buttons,
    id,
}: {
    id?: string
    subtitle: ReactNode
    title: ReactNode
    description: ReactNode
    buttons: ReactNode
}) {
    return (
        <section className="fade fade-left container pt-8 lg:pt-28 pb-32 lg:pb-44" id={id}>
            <div className="space-y-8 items-center justify-center flex flex-col ">
                <h3 className="pill-heading">{subtitle}</h3>
                <h1>{title}</h1>
                <p className="max-w-lg text-center">{description}</p>
                <div className="gap-x-5 gap-y-3 flex flex-col lg:flex-row w-full lg:w-auto">
                    {buttons}
                </div>
            </div>
        </section>
    )
}
