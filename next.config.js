/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['steamuserimages-a.akamaihd.net', "cdn.discordapp.com", "rb.gy", "image.tmdb.org"]
  }
}
