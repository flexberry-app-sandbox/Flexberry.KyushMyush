import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iP: DS.attr('string'),
  порт: DS.attr('number'),
  протокол: DS.attr('string')
});

export let ValidationRules = {
  iP: {
    descriptionKey: 'models.i-i-s-kyush-myush-сервер.validations.iP.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  порт: {
    descriptionKey: 'models.i-i-s-kyush-myush-сервер.validations.порт.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  протокол: {
    descriptionKey: 'models.i-i-s-kyush-myush-сервер.validations.протокол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СерверE', 'i-i-s-kyush-myush-сервер', {
    iP: attr('IP', { index: 0 }),
    порт: attr('Порт', { index: 1 }),
    протокол: attr('Протокол', { index: 2 })
  });

  modelClass.defineProjection('СерверL', 'i-i-s-kyush-myush-сервер', {
    iP: attr('IP', { index: 0 }),
    порт: attr('Порт', { index: 1 }),
    протокол: attr('Протокол', { index: 2 })
  });
};
