import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        createTodo(text) {
            const title = text.trim();
            if (title === "") {
                return;
            }
            let model = this.get('model');
            let aufgabe = Ember.Object.create({
                title, done: false
            });
            model.unshiftObject(aufgabe);
            this.set('aufgabenText', null);
        },

        erledigen(aufgabe) {
            aufgabe.set('done', true);
        }
    }
});
