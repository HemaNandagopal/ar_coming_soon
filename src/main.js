import React from "react";
import ReactDOM from "react-dom";
import { addLocaleData, IntlProvider } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import itLocaleData from 'react-intl/locale-data/it';
import esLocaleData from 'react-intl/locale-data/es';
import itJson from '../translations/it.json';
import enJson from '../translations/en.json';
import esJson from '../translations/es.json';
import ComponentOwner from "./js/Component-owner";
import ComingSoonComponent from "./js/ComingSoonComponent";
import "./main.scss";

const translations = {
  it: itJson,
  en: enJson,
  es: esJson
};

export default class ComingSoon {
  constructor(config) {
    
    addLocaleData(itLocaleData);
    addLocaleData(enLocaleData);
    addLocaleData(esLocaleData);
    this.init(config);
  }
 
  get_language = (locale) =>{
    console.log(locale,'locale');
    const dash_index = locale.indexOf('-')
    if (dash_index >= 0)
    {
        return locale.substring(0, dash_index)
    }
    return locale;
  };
  
  init(config) {
    this.locale = config.locale ? config.locale : 'it';
    ReactDOM.render(
      <IntlProvider locale={this.locale} messages={translations[this.locale]}>
      <ComponentOwner data={config.data}/>
      </IntlProvider>,
      document.getElementById(config.elementId)
    );
  };
}
export { ComingSoonComponent };
