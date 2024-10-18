/** @type {import('next').NextConfig} */
const nextConfig = {

    webpack(config) {
        /**
         * Tool to import SVGs as React components.
         */
        config.module.rules.push({
            test: /\.svg$/,
            issuer: /\.(js|ts)x?$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        titleProp: true,
                    },
                },
            ],
        });
        return config;
    },
};

export default nextConfig;
