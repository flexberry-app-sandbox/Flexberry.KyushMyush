import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипНастрEnum from '../enums/i-i-s-kyush-myush-тип-настр';

export default FlexberryEnum.extend({
  enum: ТипНастрEnum,
  sourceType: 'IIS.KyushMyush.ТипНастр'
});
