import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        createTodo(text) {
            const title = text.trim();
            if (title === "") {
                return;
            }
            let aufgabe = this.store.createRecord('mudo', {
                title, done: false
            });
            aufgabe.save();
            this.set('aufgabenText', null);
        },

        erledigen(aufgabe) {
            aufgabe.set('done', true);
        }
    }
});
