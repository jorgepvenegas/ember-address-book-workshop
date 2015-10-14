import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    viewContact: function(contact) {
      this.transitionTo('/contacts/%@'.fmt(contact._id));
    }
  }
});
