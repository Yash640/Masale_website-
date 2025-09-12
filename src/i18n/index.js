import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Dry Fruits": "Dry Fruits",
          "Raw Masale": "Raw Masale",
          "Millets": "Millets",
          "Healthy Snacks": "Healthy Snacks",
          "Pickles": "Pickles",
          "Homemade Masale": "Homemade Masale",
          "Badam": "Almonds",
          "Cashew": "Cashews",
          "Anjeer": "Figs",
          "Berries": "Berries",
          "View Products": "View Products"
        }
      },
      mr: {
        translation: {
          "Dry Fruits": "सुका मेवा",
          "Raw Masale": "कच्चे मसाले",
          "Millets": "बाजरी",
          "Healthy Snacks": "आरोग्यदायी स्नॅक्स",
          "Pickles": "लोणचे",
          "Homemade Masale": "घरगुती मसाले",
          "Badam": "बदाम",
          "Cashew": "काजू",
          "Anjeer": "अंजीर",
          "Berries": "बेरी",
          "View Products": "उत्पादने पहा"
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
