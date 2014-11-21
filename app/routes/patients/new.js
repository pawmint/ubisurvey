import Ember from 'ember';

var PatientsNewRoute = Ember.Route.extend({
  model: function model() {
    return this.store.createRecord('patient', {});
  },
  controllerName: 'patient'
});

export default PatientsNewRoute;
