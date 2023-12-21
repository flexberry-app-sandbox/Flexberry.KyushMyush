import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kyush-myush-должность', 'Unit | Model | i-i-s-kyush-myush-должность', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kyush-myush-должность',
    'model:i-i-s-kyush-myush-настройки',
    'model:i-i-s-kyush-myush-отчет-о-сервере',
    'model:i-i-s-kyush-myush-программы',
    'model:i-i-s-kyush-myush-расположение',
    'model:i-i-s-kyush-myush-сервер',
    'model:i-i-s-kyush-myush-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
