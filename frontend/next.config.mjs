/** @type {import('next').NextConfig} */
const nextConfig = {
	rewrites: async () => [
		{
			source: "/api/:path*",
			destination: "https://eco-collect-new.onrender.com/api/:path*",
		},
	],
	turbopack: {
		resolveAlias: {
			"@app": "./src/app",
			"@components": "./src/components",
			"@context": "./src/context",
			"@hooks": "./src/hooks",
			"@lib": "./src/lib",
		},
	},
};

export default nextConfig;
