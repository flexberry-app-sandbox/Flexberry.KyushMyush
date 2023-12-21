import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import РежимСервераEnum from '../enums/i-i-s-kyush-myush-режим-сервера';

export default FlexberryEnum.extend({
  enum: РежимСервераEnum,
  sourceType: 'IIS.KyushMyush.РежимСервера'
});
