import Image from 'next/image'
import Marquee from 'react-fast-marquee'
// 1
import angular from '@/images/tech-stack/1/angular.svg'
import django from '@/images/tech-stack/1/django.svg'
import dotNet from '@/images/tech-stack/1/dot-net.svg'
import illustrator from '@/images/tech-stack/1/illustrator.svg'
import xd from '@/images/tech-stack/1/xd.svg'
// 2
import figma from '@/images/tech-stack/2/figma.svg'
import ionic from '@/images/tech-stack/2/ionic.svg'
import rn from '@/images/tech-stack/2/react-native.svg'
import xamarin from '@/images/tech-stack/2/xamarin.svg'
// 3
import java from '@/images/tech-stack/3/java.svg'
import node from '@/images/tech-stack/3/node.svg'
import nosql from '@/images/tech-stack/3/nosql.svg'
import vue from '@/images/tech-stack/3/vue.svg'
// 4
import flutter from '@/images/tech-stack/4/flutter.svg'
import sql from '@/images/tech-stack/4/sql.svg'
import webflow from '@/images/tech-stack/4/webflow.svg'
import wordpress from '@/images/tech-stack/4/wordpress.svg'

const row1 = [
    {
        icon: angular,
        name: 'Angular',
    },
    {
        icon: django,
        name: 'django',
    },
    {
        icon: dotNet,
        name: '.net',
    },
    {
        icon: illustrator,
        name: 'illustrator',
    },
    {
        icon: xd,
        name: 'xd',
    },
]
const row2 = [
    {
        icon: figma,
        name: 'figma',
    },
    {
        icon: ionic,
        name: 'ionic',
    },
    {
        icon: rn,
        name: 'rn',
    },
    {
        icon: xamarin,
        name: 'xamarin',
    },
]
const row3 = [
    {
        icon: java,
        name: 'java',
    },
    {
        icon: node,
        name: 'node',
    },
    {
        icon: nosql,
        name: 'nosql',
    },
    {
        icon: vue,
        name: 'vue',
    },
]
const row4 = [
    {
        icon: flutter,
        name: 'flutter',
    },
    {
        icon: sql,
        name: 'sql',
    },
    {
        icon: webflow,
        name: 'webflow',
    },
    {
        icon: wordpress,
        name: 'wordpress',
    },
]

export function OurTechStack() {
    return (
        <section className="card mt-12 lg:mt-48 container flex flex-col-reverse lg:flex-row gap-14 p-8 lg:px-14 lg:py-20 mb-4">
            <div className="space-y-5 lg:flex-1 min-w-0 fade fade-left">
                {[row1, row2, row3, row4].map((rows, rowIndex) => (
                    <Marquee key={rowIndex} direction={rowIndex % 2 === 0 ? 'left' : 'right'}>
                        {rows.map((item) => (
                            <div
                                key={item.name}
                                className="bg-black bg-opacity-10 h-[70px] w-[125px] flex items-center justify-center py-2.5 px-5 rounded-lg mx-2.5"
                            >
                                <Image
                                    src={item.icon}
                                    alt={item.name}
                                    style={{ height: '100%', width: 'auto' }}
                                />
                            </div>
                        ))}
                    </Marquee>
                ))}
            </div>
            <div className="flex flex-col items-start space-y-8 lg:flex-1 min-w-0">
                <h3 className="pill-heading fade fade-right">Our Tech Stack</h3>
                <h2 className="fade fade-right">
                    Bluebird is your new <em>Technology Partner</em>
                </h2>
                <p className="text-left fade fade-right">
                    At Bluebird we leverage a cutting-edge and versatile tech stack, incorporating
                    modern technologies while embracing proven frameworks and tools.
                </p>
            </div>
        </section>
    )
}
