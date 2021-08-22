const isProd = process.env.NODE_ENV === 'production';
module.exports = {
    webpack5: true,
    images: {
        domains: ['s3.amazonaws.com', 'video.udacity-data.com'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
    // Use the CDN in production and localhost for development.
    assetPrefix: isProd ? 'https://cdn.nepstock.vercel.app' : '',
};
