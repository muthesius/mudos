import Ember from 'ember';

const aufgaben = [];

export default Ember.Route.extend({
   model() {
       return aufgaben;
   } 
});