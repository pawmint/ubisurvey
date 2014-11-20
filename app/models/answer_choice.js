import DS from "ember-data";

var AnswerChoice = DS.Model.extend({
  content: DS.attr('string'),
  question: DS.belongsTo('question', {async: true})
});

AnswerChoice.reopenClass({
  FIXTURES: [
    {
      id: 1,
      content: "City",
      question: 3
    },
    {
      id: 2,
      content: "Village",
      question: 3
    }
  ]
});

export default AnswerChoice;
