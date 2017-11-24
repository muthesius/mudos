import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        reset(aufgabe) {
            aufgabe.set('done', false);
            aufgabe.save();
        }
    }
});
