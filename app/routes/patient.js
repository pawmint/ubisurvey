import Ember from 'ember';

var PatientRoute = Ember.Route.extend({
  model: function model(params) {
    return this.store.find('patient', params.patient_id);
  },
  setupController: function setupController(controller, model) {
    controller.set('content', model);

    var categories = this.store.find('category', {parent_category: null});
    controller.set('categories', categories);

    this.controllerFor('question').send('goToPatient', 1);
  },

  actions: {
    confirm: function confirm() {
      this.currentModel.save();

      this.flashMessage('Thank you for your feedback!', 'success');
      this.transitionTo('patients');
    }
  }
});

export default PatientRoute;
