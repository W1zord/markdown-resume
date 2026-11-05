const url = process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const baseURL = process.env.NUXT_APP_BASE_URL || '/markdown-resume/'

export const siteConfig = {
  name: 'Markdown Resume',
  shortName: 'Resume.md',
  cacheId: 'markdown-resume',
  title: 'Free Markdown Resume App',
  description:
    'Free online resume maker, allows you to create your resume in minutes with Markdown!',
  image: `${url}${baseURL}pwa-512x512.png`,
  url,
  baseURL,
  // Kept intentionally: Iconify web component loader (user-approved remote dependency).
  iconifyScriptURL: 'https://code.iconify.design/iconify-icon/3.0.2/iconify-icon.min.js',
}
