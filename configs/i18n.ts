import type { NuxtI18nOptions } from '@nuxtjs/i18n'
import { siteConfig } from './siteConfig'

export const i18n: NuxtI18nOptions = {
  baseUrl: siteConfig.url,
  defaultLocale: 'en',
  strategy: 'no_prefix',
  locales: [
    {
      code: 'en',
      name: 'English',
      file: 'en.yaml',
    },
  ],
  langDir: '../app/i18n',
  compilation: {
    strictMessage: false,
  },
}
