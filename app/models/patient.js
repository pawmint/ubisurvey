import DS from "ember-data";

var Patient = DS.Model.extend({
  patient_name: DS.attr('string'),
  answers: DS.hasMany('answer', {async: true})
});

Patient.reopenClass({
  FIXTURES: [
    {
      id: 1,
      patient_name: 'Mme Gautier',
      answers: []
    }
  ]
});

export default Patient;
