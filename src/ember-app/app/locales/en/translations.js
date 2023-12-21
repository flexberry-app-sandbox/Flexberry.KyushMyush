import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKyushMyushДолжностьLForm from './forms/i-i-s-kyush-myush-должность-l';
import IISKyushMyushНастройкиLForm from './forms/i-i-s-kyush-myush-настройки-l';
import IISKyushMyushОтчетОСервереLForm from './forms/i-i-s-kyush-myush-отчет-о-сервере-l';
import IISKyushMyushПрограммыLForm from './forms/i-i-s-kyush-myush-программы-l';
import IISKyushMyushРасположениеLForm from './forms/i-i-s-kyush-myush-расположение-l';
import IISKyushMyushСерверLForm from './forms/i-i-s-kyush-myush-сервер-l';
import IISKyushMyushСотрудникLForm from './forms/i-i-s-kyush-myush-сотрудник-l';
import IISKyushMyushДолжностьEForm from './forms/i-i-s-kyush-myush-должность-e';
import IISKyushMyushНастройкиEForm from './forms/i-i-s-kyush-myush-настройки-e';
import IISKyushMyushОтчетОСервереEForm from './forms/i-i-s-kyush-myush-отчет-о-сервере-e';
import IISKyushMyushПрограммыEForm from './forms/i-i-s-kyush-myush-программы-e';
import IISKyushMyushРасположениеEForm from './forms/i-i-s-kyush-myush-расположение-e';
import IISKyushMyushСерверEForm from './forms/i-i-s-kyush-myush-сервер-e';
import IISKyushMyushСотрудникEForm from './forms/i-i-s-kyush-myush-сотрудник-e';
import IISKyushMyushДолжностьModel from './models/i-i-s-kyush-myush-должность';
import IISKyushMyushНастройкиModel from './models/i-i-s-kyush-myush-настройки';
import IISKyushMyushОтчетОСервереModel from './models/i-i-s-kyush-myush-отчет-о-сервере';
import IISKyushMyushПрограммыModel from './models/i-i-s-kyush-myush-программы';
import IISKyushMyushРасположениеModel from './models/i-i-s-kyush-myush-расположение';
import IISKyushMyushСерверModel from './models/i-i-s-kyush-myush-сервер';
import IISKyushMyushСотрудникModel from './models/i-i-s-kyush-myush-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kyush-myush-должность': IISKyushMyushДолжностьModel,
    'i-i-s-kyush-myush-настройки': IISKyushMyushНастройкиModel,
    'i-i-s-kyush-myush-отчет-о-сервере': IISKyushMyushОтчетОСервереModel,
    'i-i-s-kyush-myush-программы': IISKyushMyushПрограммыModel,
    'i-i-s-kyush-myush-расположение': IISKyushMyushРасположениеModel,
    'i-i-s-kyush-myush-сервер': IISKyushMyushСерверModel,
    'i-i-s-kyush-myush-сотрудник': IISKyushMyushСотрудникModel
  },

  'application-name': 'Kyush myush',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kyush myush',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kyush myush',
          title: 'Kyush myush'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        курсовая: {
          caption: 'Курсовая',
          title: 'Курсовая',
          сервера: {
            caption: 'Сервера',
            title: 'Сервера',
            'i-i-s-kyush-myush-расположение-l': {
              caption: 'Расположение',
              title: ''
            },
            'i-i-s-kyush-myush-отчет-о-сервере-l': {
              caption: 'Отчет о сервере',
              title: ''
            },
            'i-i-s-kyush-myush-сервер-l': {
              caption: 'Сервер',
              title: ''
            },
            'i-i-s-kyush-myush-настройки-l': {
              caption: 'Настройки',
              title: ''
            },
            'i-i-s-kyush-myush-программы-l': {
              caption: 'Программы',
              title: ''
            }
          },
          сотрудники: {
            caption: 'Сотрудники',
            title: 'Сотрудники',
            'i-i-s-kyush-myush-должность-l': {
              caption: 'Должность',
              title: ''
            },
            'i-i-s-kyush-myush-сотрудник-l': {
              caption: 'Сотрудник',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kyush-myush-должность-l': IISKyushMyushДолжностьLForm,
    'i-i-s-kyush-myush-настройки-l': IISKyushMyushНастройкиLForm,
    'i-i-s-kyush-myush-отчет-о-сервере-l': IISKyushMyushОтчетОСервереLForm,
    'i-i-s-kyush-myush-программы-l': IISKyushMyushПрограммыLForm,
    'i-i-s-kyush-myush-расположение-l': IISKyushMyushРасположениеLForm,
    'i-i-s-kyush-myush-сервер-l': IISKyushMyushСерверLForm,
    'i-i-s-kyush-myush-сотрудник-l': IISKyushMyushСотрудникLForm,
    'i-i-s-kyush-myush-должность-e': IISKyushMyushДолжностьEForm,
    'i-i-s-kyush-myush-настройки-e': IISKyushMyushНастройкиEForm,
    'i-i-s-kyush-myush-отчет-о-сервере-e': IISKyushMyushОтчетОСервереEForm,
    'i-i-s-kyush-myush-программы-e': IISKyushMyushПрограммыEForm,
    'i-i-s-kyush-myush-расположение-e': IISKyushMyushРасположениеEForm,
    'i-i-s-kyush-myush-сервер-e': IISKyushMyushСерверEForm,
    'i-i-s-kyush-myush-сотрудник-e': IISKyushMyushСотрудникEForm
  },

});

export default translations;
