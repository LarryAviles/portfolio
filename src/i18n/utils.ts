import { ui, defaultLang } from './ui';
import spanish from '../i18n/es';
import english from '../i18n/en';


const LANG = {
  SPANISH: 'es',
  ENGLISH: 'en',
};

export const showDefaultLang = false;

/*
  Variable que contiente la información de los JSONs y que se usa para traducir el sitio
*/
export const getI18N = ({
  currentLocale = 'es',
}: {
  currentLocale: string | undefined;
}) => {
  if (currentLocale === LANG.ENGLISH) return { ...spanish, ...english };
  return spanish;
};

/*
  Función que se usa para obtener el idioma del sitio
*/
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}
