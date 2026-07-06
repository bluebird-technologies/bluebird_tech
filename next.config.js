/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // The layout background image is served at quality 90; Next 16 requires
        // non-default qualities to be allowlisted.
        qualities: [75, 90],
    },
}

module.exports = nextConfig
