import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

	this.route('contacts', {path: 'contacts'}, function(){
    this.route('detail', {path: '/:contact_id'});
    this.route('add', {path: '/add'});
  });

});

export default Router;
