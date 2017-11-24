import Ember from 'ember';

export default Ember.Controller.extend({
    aufgabenText: null,
    actions: {
        // wird aufgerufen, wenn Enter gedrückt wird
        createTodo(text) {
            const title = text.trim();
            if (title === "") {
                return;
            }

            let aufgabe = this.store.createRecord('mudo', {
                title: title,
                done: false
            });
            aufgabe.save();

            this.set('aufgabenText', null);
        },

        erledigen(aufgabe) {
            aufgabe.set('done', true);
            aufgabe.save();
        }
    }
});