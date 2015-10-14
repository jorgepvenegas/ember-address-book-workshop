import Ember from "ember";

export default Ember.Route.extend({
  model: function(params) {
    var contactList = this.modelFor('contacts');
    var contact = contactList.findBy('_id', params.contact_id);

    return contact;
  },
  actions: {
    saveChanges: function(){
      var controller = this.controller;
      var contact = controller.get('model');

      contact.name = controller.get('newName');
      contact.age = controller.get('newAge');
      contact.company = controller.get('newCompany');
      contact.email = controller.get('newEmail');
      contact.about = controller.get('newAbout');


      // var options = {
      //   url: 'v1/contact/%@'.fmt(contact._id),
      //   method: 'put',
      //   contentType: 'application/json',
      //   data: JSON.stringify(contact)
      // };
      //
      // ajax(options).then(function(e){
      //   // Yay!
      // }).catch(function() {
      //   // Oops! ...
      // });

      controller.set('isEditing', false);
    }
  }
});
