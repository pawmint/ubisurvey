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
      patient_name: 'Résident A',
      residence: 'Saint-Vincent-de-Paul',
      age: 90,
      autonomy: "Autonome",
      mobility: "En fauteuil. Risque de chute du lit",
      cognitive_skills: "Normale",
      patient_details: "Diabétique type 2"
    },
    {
      id: 2,
      patient_name: 'Résident B',
      residence: 'Saint-Vincent-de-Paul',
      age: 84,
      autonomy: "Autonome",
      mobility: "Normale",
      cognitive_skills: "Alzheimer léger",
      patient_details: "Trouble du sommeil"
    },
    {
      id: 3,
      patient_name: 'Résident C',
      residence: 'Saint-Vincent-de-Paul',
      age: 85,
      autonomy: "Normale",
      mobility: "En déambulateur. Problème d'équilibre",
      cognitive_skills: "Alzheimer modéré",
      patient_details: "Passe une grande partie de la journée sur son lit. Mari parmi les résidents"
    },
    {
      id: 4,
      patient_name: 'Résident D',
      residence: 'Saint-Vincent-de-Paul',
      age: 87,
      autonomy: "Normale",
      mobility: "Problème d'équilibre. En fauteuil roulant à l'extérieur de la chambre",
      cognitive_skills: "Normal",
      patient_details: "Insuffisance respiratoire"
    },
    {
      id: 5,
      patient_name: 'Résident E',
      residence: 'Saint-Vincent-de-Paul',
      age: 92,
      autonomy: "Normale",
      mobility: "Normale",
      cognitive_skills: "Difficulté à s'exprimer",
      patient_details: "Mange en excès"
    },
    {
      id: 6,
      patient_name: 'Résident Maison',
      residence: 'Appartement privé',
      age: 91,
      autonomy: "Normale",
      mobility: "Marche avec un déambulateur",
      cognitive_skills: "Normal",
      patient_details: "Visite fréquente de la famille et d'un aidant"
    }
  ]
});

export default Patient;
