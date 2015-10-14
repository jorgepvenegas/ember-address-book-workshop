import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('contacts', {path: '/'}, function(){
    this.route('detail', { path: 'contacts/:contact_id' });
    this.route('add');
  });

});

export default Router;
