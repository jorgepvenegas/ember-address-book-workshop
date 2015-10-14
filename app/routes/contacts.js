import Ember from "ember";
import ajax from "ic-ajax";

export default Ember.Route.extend({
  model: function() {
  	var getContacts = ajax('http://www.json-generator.com/api/json/get/bQFnNmihua');

    return getContacts.then(function(response) {
      return response;
    });
  }
});
