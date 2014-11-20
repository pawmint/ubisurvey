import DS from 'ember-data';

var ApplicationAdapter = DS.FixtureAdapter.extend({});
// var ApplicationAdapter = DS.SailsSocketAdapter.extend({
//   host: 'https://localhost:1337'
// });

ApplicationAdapter.reopen({
    queryFixtures: function(records, query, type) {        
        return records.filter(function(record) {
            for(var key in query) {
                if (!query.hasOwnProperty(key)) { continue; }
                var value = query[key];
                if (record[key] !== value) { return false; }
            }
            return true;
        });
    }
});

export default ApplicationAdapter;
