import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date'),
  датаОкончания: DS.attr('date'),
  описаний: DS.attr('string'),
  типНастроек: DS.attr('i-i-s-kyush-myush-тип-настр')
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-kyush-myush-настройки.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкончания: {
    descriptionKey: 'models.i-i-s-kyush-myush-настройки.validations.датаОкончания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  описаний: {
    descriptionKey: 'models.i-i-s-kyush-myush-настройки.validations.описаний.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  типНастроек: {
    descriptionKey: 'models.i-i-s-kyush-myush-настройки.validations.типНастроек.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НастройкиE', 'i-i-s-kyush-myush-настройки', {
    типНастроек: attr('Тип настроек', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаОкончания: attr('Дата окончания', { index: 2 }),
    описаний: attr('Описаний', { index: 3 })
  });

  modelClass.defineProjection('НастройкиL', 'i-i-s-kyush-myush-настройки', {
    типНастроек: attr('Тип настроек', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаОкончания: attr('Дата окончания', { index: 2 }),
    описаний: attr('Описаний', { index: 3 })
  });
};
