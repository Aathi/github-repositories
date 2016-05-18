import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let url;
    if (params.ownerType === 'users') {
      url = `https://api.github.com/users/${params.ownername}/repos?per_page=200?access_token=${params.accessToken}`;
    } else {
      url = `https://api.github.com/orgs/${params.ownername}/repos?per_page=200`;
    }

    return Ember.RSVP.hash({
      ripos: Ember.$.getJSON(url),
      ownername: params.ownername
    });
  },
  setupController(controller, models) {
    controller.setProperties({
      model: models.ripos,
      ownername: models.ownername
    });
  }
});
