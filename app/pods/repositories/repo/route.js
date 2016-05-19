import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const ripoUrl = `https://api.github.com/repos/${params.owner}/${params.name}`;
    const branchUrl = `https://api.github.com/repos/${params.owner}/${params.name}/branches`;
    return Ember.RSVP.hash({
      ripos: Ember.$.getJSON(ripoUrl),
      branches: Ember.$.getJSON(branchUrl),

    });
  },
  setupController(controller, models) {
    console.log(models.ripos);
    let isPrivate = {};
    if (models.private) {
        isPrivate = {
          css: 'danger',
          data: 'private'
        };
      } else {
        isPrivate = {
          css: 'success',
          data: 'public'
        };
    }
    controller.setProperties({
      model: models.ripos,
      branches: models.branches,
      isPrivate: isPrivate
    });
  }
});




