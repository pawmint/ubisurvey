import DS from "ember-data";

var Answer = DS.Model.extend({
  patient: DS.belongsTo('patient', {async: true}),
  question: DS.belongsTo('question', {async: true}),
  answer: DS.attr('string'),
  choice: DS.belongsTo('answer_choice', {async: true})
});

Answer.reopenClass({
  FIXTURES: [
    {
      id: 1,
      patient: 1,
      question: 1,
      answer: '78'
    }
  ]
});

export default Answer;
