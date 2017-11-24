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

            const model = this.get('model');
            let aufgabe = Ember.Object.create({
                title: title,
                done: false
            });
            model.unshiftObject(aufgabe);

            this.set('aufgabenText', null);
        },

        erledigen(aufgabe) {
            aufgabe.set('done', true);
        }
    }
});