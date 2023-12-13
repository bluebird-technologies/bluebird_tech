'use client'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { ReactNode, useState } from 'react'

function getIndex(index: number, length: number) {
    if (index < 0) return getIndex(length + index, length)
    return index % length
}

const buttonProps = `
    absolute z-10 h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-white flex items-center justify-center transition
    hover:bg-neutral-200 active:bg-neutral-300`

export function Carousel({ items }: { items: ReactNode[] }) {
    const middleIndex = Math.floor(items.length / 2)

    const [index, _setIndex] = useState(0)
    const [direction, setDirection] = useState<'left' | 'right' | undefined>(undefined)

    function setIndex(newIndex: number) {
        if (newIndex > index) setDirection('right')
        else if (newIndex < index) setDirection('left')
        _setIndex(newIndex)
    }

    return (
        <div className="w-full md:max-w-[90%] lg:w-[780px] relative fade fade-right">
            <div className="absolute inset-0 mx-auto flex items-center">
                <button
                    className={`${buttonProps} left-[4px] lg:left-[-4px]`}
                    onClick={() => setIndex(index - 1)}
                >
                    <ChevronLeftIcon className="h-8 text-primary" />
                </button>
                <button
                    className={`${buttonProps} right-[4px] lg:right-[-4px]`}
                    onClick={() => setIndex(index + 1)}
                >
                    <ChevronRightIcon className="h-8 text-primary" />
                </button>
            </div>
            <div className="whitespace-nowrap w-full transition duration-700 ease-out relative h-[554px] sm:h-[400px] lg:h-[330px]">
                {items.map((item, itemIndex) => {
                    const adjustedItemIndex = getIndex(itemIndex - index, items.length)

                    return (
                        <div
                            key={itemIndex}
                            className={clsx('inline-block w-full px-6 absolute top-0 h-full', {
                                'opacity-20': adjustedItemIndex !== middleIndex,
                                'transition-all duration-700':
                                    (adjustedItemIndex > 0 &&
                                        adjustedItemIndex < items.length - 1) ||
                                    (direction === 'left' &&
                                        adjustedItemIndex === items.length - 1) ||
                                    (direction === 'right' && adjustedItemIndex === 0),
                            })}
                            style={{
                                transform: `translateX(calc(${
                                    (adjustedItemIndex - middleIndex) * 100
                                }%))`,
                            }}
                        >
                            <div className="card flex flex-col items-center h-full transition duration-700 relative px-8 py-12 lg:px-12 lg:py-16">
                                <div
                                    className={clsx(
                                        'absolute top-[-36px] bg-secondary h-16 w-16 rounded-full flex items-center justify-center text-[80px] transition duration-700',
                                        {
                                            'opacity-0': adjustedItemIndex !== middleIndex,
                                        },
                                    )}
                                >
                                    <span className="mt-10">“</span>
                                </div>
                                {item}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
