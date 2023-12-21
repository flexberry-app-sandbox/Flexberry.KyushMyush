import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.курсовая.caption'),
          title: i18n.t('forms.application.sitemap.курсовая.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.курсовая.сервера.caption'),
            title: i18n.t('forms.application.sitemap.курсовая.сервера.title'),
            children: [{
              link: 'i-i-s-kyush-myush-расположение-l',
              caption: i18n.t('forms.application.sitemap.курсовая.сервера.i-i-s-kyush-myush-расположение-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.сервера.i-i-s-kyush-myush-расположение-l.title'),
              icon: 'tasks',
              children: null
            }, {
              link: 'i-i-s-kyush-myush-отчет-о-сервере-l',
              caption: i18n.t('forms.application.sitemap.курсовая.сервера.i-i-s-kyush-myush-отчет-о-сервере-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.сервера.i-i-s-kyush-myush-отчет-о-сервере-l.title'),
              icon: 'tasks',
              children: null
            }, {
              link: 'i-i-s-kyush-myush-сервер-l',
              caption: i18n.t('forms.application.sitemap.курсовая.сервера.i-i-s-kyush-myush-сервер-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.сервера.i-i-s-kyush-myush-сервер-l.title'),
              icon: 'address card',
              children: null
            }, {
              link: 'i-i-s-kyush-myush-настройки-l',
              caption: i18n.t('forms.application.sitemap.курсовая.сервера.i-i-s-kyush-myush-настройки-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.сервера.i-i-s-kyush-myush-настройки-l.title'),
              icon: 'folder open',
              children: null
            }, {
              link: 'i-i-s-kyush-myush-программы-l',
              caption: i18n.t('forms.application.sitemap.курсовая.сервера.i-i-s-kyush-myush-программы-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.сервера.i-i-s-kyush-myush-программы-l.title'),
              icon: 'building',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.курсовая.сотрудники.caption'),
            title: i18n.t('forms.application.sitemap.курсовая.сотрудники.title'),
            children: [{
              link: 'i-i-s-kyush-myush-должность-l',
              caption: i18n.t('forms.application.sitemap.курсовая.сотрудники.i-i-s-kyush-myush-должность-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.сотрудники.i-i-s-kyush-myush-должность-l.title'),
              icon: 'list',
              children: null
            }, {
              link: 'i-i-s-kyush-myush-сотрудник-l',
              caption: i18n.t('forms.application.sitemap.курсовая.сотрудники.i-i-s-kyush-myush-сотрудник-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.сотрудники.i-i-s-kyush-myush-сотрудник-l.title'),
              icon: 'book',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})