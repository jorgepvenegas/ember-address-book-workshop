import Ember from "ember";
import ajax from "ic-ajax";

export default Ember.Controller.extend({
  actions: {
    createContact: function() {
      var contact = {
        _id: Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substr(0, 16), // Qué feo
        name: this.get('newName'),
        age: this.get('newAge'),
        company: this.get('newCompany'),
        about: this.get('newAbout')
      };

      console.log('contact', contact);
      var options = {
        url: 'v1/contact',
        method: 'post',
        contentType: 'application/json',
        data: JSON.stringify(contact)
      };

      //ajax(options).then(function(response) {});
      debugger;
      this.model.addObject(contact);
      this.transitionTo('/contacts/%@'.fmt(contact.__id));
    }
  }
});
