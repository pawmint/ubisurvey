import DS from "ember-data";

var Patient = DS.Model.extend({
  patient_name: DS.attr('string'),
  residence: DS.attr('string'),
  age: DS.attr('number'),
  autonomy: DS.attr('string'),
  mobility: DS.attr('string'),
  cognitive_skills: DS.attr('string'),
  patient_details: DS.attr('string'),
});

Patient.reopenClass({
  FIXTURES: [
    {
      id: 1,
      patient_name: 'Mme Gautier',
      residence: null,
      age: null,
      autonomy: null,
      mobility: null,
      cognitive_skills: null,
      patient_details: null
    }
  ]
});

export default Patient;
