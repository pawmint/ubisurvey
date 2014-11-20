import DS from "ember-data";

var Category = DS.Model.extend({
  name: DS.attr('string'),
  number: DS.attr('integer'),
  questions: DS.hasMany('question', {async: true}),
  parent_category: DS.belongsTo('category', {inverse: 'children_categories',
                                             async: true}),
  children_categories: DS.hasMany('category', {inverse: 'parent_category',
                                               async: true})
});

Category.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'Patient',
      number: 1,
      questions: [1, 2, 3],
      parent_category: null,
      children_categories: []
    }
  ]
});

export default Category;
