/** @type {import('next').NextConfig } */

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    paths: {
      tsConfigPath: "./tsconfig.json",
    },
  },
}

export default nextConfig
