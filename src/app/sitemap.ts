import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://bluebird.tech',
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: 'https://bluebird.tech/build-a-platform',
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: 'https://bluebird.tech/quote-calculator',
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: 'https://bluebird.tech/quote-calculator/resource',
            lastModified: new Date(),
            priority: 0.8,
        },
        // case studies
        {
            url: 'https://bluebird.tech/case-studies/aurora',
            lastModified: new Date(),
            priority: 0.7,
        },
        {
            url: 'https://bluebird.tech/case-studies/getstartedsa',
            lastModified: new Date(),
            priority: 0.7,
        },
        {
            url: 'https://bluebird.tech/case-studies/raubex',
            lastModified: new Date(),
            priority: 0.7,
        },
        // other
        {
            url: 'https://bluebird.tech/privacy-policy',
            lastModified: new Date(),
            priority: 0.3,
        },
    ]
}
