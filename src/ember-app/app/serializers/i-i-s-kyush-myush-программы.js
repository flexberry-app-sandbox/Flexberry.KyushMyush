import { Serializer as ПрограммыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kyush-myush-программы';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПрограммыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
