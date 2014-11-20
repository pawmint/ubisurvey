import Ember from 'ember';

var PatientsRoute = Ember.Route.extend({
  model: function model() {
    return this.store.find('patient');
  }
});

export default PatientsRoute;
