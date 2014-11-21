import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['flashMessage'],
  actions: {
    confirm: function confirm() {
      var flashMessage = this.get('controllers.flashMessage');

      this.get('model').save()

      flashMessage.set('message', 'Merci pour ces informations !');
      this.transitionTo('patients');
    }
  }
});
