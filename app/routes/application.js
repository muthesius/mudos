import Route from '@ember/routing/route';

const aufgaben = [];

export default Route.extend({
    model() {
        return aufgaben;
    }
});
