import Ember from 'ember';

var PatientRoute = Ember.Route.extend({
  model: function model(params) {
    return this.store.find('patient', params.patient_id);
  },
  controllerName: 'patient'
});

export default PatientRoute;
