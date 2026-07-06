'use client'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import close from '@/images/close.svg'
import Image from 'next/image'

const DURATION = 300

export function Modal({
    children,
    closeLink,
    title,
}: {
    children: React.ReactNode
    closeLink: string
    title: string
}) {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    /**
     * Open the modal when the component is mounted (so that fade-in transition can be applied)
     */
    useEffect(() => {
        // Defer to the next frame so the browser paints the closed state first
        // and the fade-in transition can play.
        const frame = requestAnimationFrame(() => setIsOpen(true))
        document.body.style.overflow = 'hidden'
        return () => {
            cancelAnimationFrame(frame)
            document.body.style.overflow = 'auto'
        }
    }, [])

    function onClose() {
        /**
         * First let the fade-out transition play, then redirect
         */
        setIsOpen(false)
        setTimeout(() => {
            router.push(closeLink, { scroll: false })
        }, DURATION)
    }

    return (
        <dialog
            open={isOpen}
            style={{
                transitionDuration: `${DURATION}ms`,
            }}
            className={clsx(
                'fixed inset-0 z-3000 bg-black/50 h-full w-full flex items-center justify-center transition-all duration-300 backdrop-blur-md',
                {
                    'opacity-0': !isOpen,
                    'opacity-100': isOpen,
                },
            )}
        >
            <div className="bg-white/20 backdrop-blur-md mx-3 md:max-w-[90%] w-full lg:max-w-(--breakpoint-md) px-3 py-5 md:p-5">
                <div className="flex items-center justify-between">
                    <h2 className="text-white">{title}</h2>
                    <button onClick={onClose}>
                        <Image src={close} height={48} alt="Close" />
                    </button>
                </div>
                <div className="mt-8 bg-primary py-2.5 px-5 text-white">{children}</div>
            </div>
        </dialog>
    )
}
