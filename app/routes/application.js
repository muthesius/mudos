import Ember from 'ember';

export default Ember.Route.extend({
   model() {
       return Ember.RSVP.hash({
           offene: this.store.query('mudo', {filter: { done: false}}),
           erledigte: this.store.query('mudo', {filter: { done: true}})
       })
   } 
});