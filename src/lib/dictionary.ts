import 'server-only';
import type { Locale } from '../i18n.config';

const messages = { 
    pt: () => import('@/messages/pt.json').then(m => m.default),
    en: () => import('@/messages/en.json').then(m => m.default)
}

export const getDictionary = async (locale: Locale) => messages[locale]() ?? messages.en()