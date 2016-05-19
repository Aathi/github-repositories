import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let url;
    if (params.accessToken === 'public-ripos-only') {
      url = `https://api.github.com/${params.ownerType}/${params.ownername}/repos?per_page=200`;
    } else {
      url = `https://api.github.com/${params.ownerType}/${params.ownername}/repos?per_page=200?access_token=${params.accessToken}`;
    }

    return Ember.RSVP.hash({
      ripos: Ember.$.getJSON(url),
      ownername: params.ownername,
      ownerDetails: Ember.$.getJSON(`https://api.github.com/${params.ownerType}/${params.ownername}`)
    });
  },
  setupController(controller, models) {
    console.log(models.ripos);
    controller.setProperties({
      model: models.ripos,
      ownername: models.ownername,
      ownerDetails: models.ownerDetails,
    });
  }
});
