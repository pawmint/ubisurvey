import DS from "ember-data";

var Question = DS.Model.extend({
  name: DS.attr('string'),
  placeholder: DS.attr('string'),
  number: DS.attr('integer'),
  type: DS.attr('string'),
  choices: DS.hasMany('answer_choice', {async: true}),
  category: DS.belongsTo('category', {async: true})
});

Question.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: "How old are you?",
      placeholder: "Age",
      number: 1,
      type: "string",
      category: 1
    },
    {
      id: 2,
      name: "What's your name?",
      placeholder: "Name",
      number: 2,
      type: "string",
      category: 1
    },
    {
      id:3,
      name: "Where do you live?",
      placeholder: "Location",
      number:3,
      type: "radio",
      choices: [1, 2],
      category: 1
    }
  ]
});

export default Question;
