import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kyush-myush-настройки', 'Unit | Serializer | i-i-s-kyush-myush-настройки', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kyush-myush-настройки',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kyush-myush-ед-изм',
    'transform:i-i-s-kyush-myush-режим-сервера',
    'transform:i-i-s-kyush-myush-тип-настр',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
