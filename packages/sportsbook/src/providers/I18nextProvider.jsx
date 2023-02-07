import React, { Suspense, useEffect } from 'react';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import Backend from 'i18next-http-backend';
// import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { store } from '../redux/store';
import { selectSupportedLanguages } from '../redux/reducers/configs/configs.slice';
import GlobalLoader from '../components/GlobalLoader/GlobalLoader';

export const langFromUrl = location.pathname.split('/')[1];
const langFromLocalStorage = localStorage.getItem('lang');

export function getDefaultLanguage(supportedLangs) {
  const supportedLanguages =
    supportedLangs || store.getState().configs.languages;

  if (langFromUrl && supportedLanguages.includes(langFromUrl)) {
    return langFromUrl;
  } else if (
    langFromLocalStorage &&
    supportedLanguages.includes(langFromLocalStorage)
  ) {
    return langFromLocalStorage;
  } else {
    return supportedLanguages[0];
  }
}

export const t = i18n.t.bind(i18n);

function MyI18nextProvider({ children }) {
  const supportedLanguages = useSelector(selectSupportedLanguages);
  // const navigate = useNavigate();

  useEffect(() => {
    if (supportedLanguages) {
      const defaultLang = getDefaultLanguage(supportedLanguages);

      // if (langFromUrl && defaultLang !== langFromUrl) {
      //   const pathname = location.pathname.replace(
      //     `${langFromUrl}`,
      //     defaultLang,
      //   );

      //   navigate(pathname, { replace: true });
      // }

      i18n.use(Backend).init({
        lng: defaultLang,
        supportedLngs: supportedLanguages,
        ns: ['translation', 'markets', 'betSlip'],
        defaultNS: 'translation',
        backend: {
          loadPath:
            'https://dictionary.betxgaming.com/public/{{lng}}/{{ns}}.json',
        },
      });
    }
  }, [supportedLanguages]);

  return (
    <Suspense fallback={<GlobalLoader />}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </Suspense>
  );
}

export default MyI18nextProvider;
