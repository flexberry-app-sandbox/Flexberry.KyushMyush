import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  режим: DS.attr('i-i-s-kyush-myush-режим-сервера')
});

export let ValidationRules = {
  режим: {
    descriptionKey: 'models.i-i-s-kyush-myush-отчет-о-сервере.validations.режим.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтчетОСервереE', 'i-i-s-kyush-myush-отчет-о-сервере', {
    режим: attr('Режим', { index: 0 })
  });

  modelClass.defineProjection('ОтчетОСервереL', 'i-i-s-kyush-myush-отчет-о-сервере', {
    режим: attr('Режим', { index: 0 })
  });
};
