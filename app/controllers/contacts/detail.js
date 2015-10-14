import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editContact: function(contact){
      // this.get('model.name')
      this.set('isEditing', true);
      this.set('newName', contact.name);
      this.set('newAge', contact.age);
      this.set('newEmail', contact.email);
      this.set('newCompany', contact.company);
      this.set('newAbout', contact.about);
    },
    discardChanges: function(){
      this.set('isEditing', false);
    }
  }
});
