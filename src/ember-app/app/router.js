import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kyush-myush-должность-l');
  this.route('i-i-s-kyush-myush-должность-e',
  { path: 'i-i-s-kyush-myush-должность-e/:id' });
  this.route('i-i-s-kyush-myush-должность-e.new',
  { path: 'i-i-s-kyush-myush-должность-e/new' });
  this.route('i-i-s-kyush-myush-настройки-l');
  this.route('i-i-s-kyush-myush-настройки-e',
  { path: 'i-i-s-kyush-myush-настройки-e/:id' });
  this.route('i-i-s-kyush-myush-настройки-e.new',
  { path: 'i-i-s-kyush-myush-настройки-e/new' });
  this.route('i-i-s-kyush-myush-отчет-о-сервере-l');
  this.route('i-i-s-kyush-myush-отчет-о-сервере-e',
  { path: 'i-i-s-kyush-myush-отчет-о-сервере-e/:id' });
  this.route('i-i-s-kyush-myush-отчет-о-сервере-e.new',
  { path: 'i-i-s-kyush-myush-отчет-о-сервере-e/new' });
  this.route('i-i-s-kyush-myush-программы-l');
  this.route('i-i-s-kyush-myush-программы-e',
  { path: 'i-i-s-kyush-myush-программы-e/:id' });
  this.route('i-i-s-kyush-myush-программы-e.new',
  { path: 'i-i-s-kyush-myush-программы-e/new' });
  this.route('i-i-s-kyush-myush-расположение-l');
  this.route('i-i-s-kyush-myush-расположение-e',
  { path: 'i-i-s-kyush-myush-расположение-e/:id' });
  this.route('i-i-s-kyush-myush-расположение-e.new',
  { path: 'i-i-s-kyush-myush-расположение-e/new' });
  this.route('i-i-s-kyush-myush-сервер-l');
  this.route('i-i-s-kyush-myush-сервер-e',
  { path: 'i-i-s-kyush-myush-сервер-e/:id' });
  this.route('i-i-s-kyush-myush-сервер-e.new',
  { path: 'i-i-s-kyush-myush-сервер-e/new' });
  this.route('i-i-s-kyush-myush-сотрудник-l');
  this.route('i-i-s-kyush-myush-сотрудник-e',
  { path: 'i-i-s-kyush-myush-сотрудник-e/:id' });
  this.route('i-i-s-kyush-myush-сотрудник-e.new',
  { path: 'i-i-s-kyush-myush-сотрудник-e/new' });
});

export default Router;
