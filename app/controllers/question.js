import Ember from 'ember';

export default Ember.ObjectController.extend({
  isRadio: Ember.computed.equal('type', 'radio'),
  isString: Ember.computed.equal('type', 'string'),
  isCheckbox: Ember.computed.equal('type', 'checkbox'),

  patient: null,

  answer: function getAnswer(){
    console.log(this.get('patient'));
    if(this.get('patient') === null){ return; }

    var answer = this.get('answers', {patient: this.get('patient')});
    if(answer){
      return answer;
    } else {
      return this.store.createRecord('answer', {
        patient: this.get('patient'),
        question: this
      });
    }
  }.property('patient'),

  actions: {
    goToPatient: function goToPatient(patient){
      this.set('patient', patient);
    }
  }
});
