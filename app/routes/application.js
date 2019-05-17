import Route from '@ember/routing/route';

export default Route.extend({
    activate(){
        this._super(...arguments);
        document.body.classList.add('bg-gradient-primary');
    }
});