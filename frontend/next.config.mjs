/** @type {import('next').NextConfig} */
const nextConfig = {
	rewrites: async () => [
		{
			source: "/api/:path*",
			destination: "http://127.0.0.1:5000/:path*",
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
