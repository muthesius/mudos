import Controller from '@ember/controller';

export default Controller.extend({
    // erledigte: Ember.computed.filterBy('model.[]', 'done', true),
    // offene: Ember.computed.filterBy('model.[]', 'done', false),

    numDone: Ember.computed('model.erledigte', {
        get() {
            return this.get('model.erledigte.length');
        }
    })
});
