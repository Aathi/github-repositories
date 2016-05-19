import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('repositories', {
      path: '/:ownerType/:ownername/:accessToken'
  });
  this.route('repositories.repo', {
    path: '/:owner/:name'
  });
});

export default Router;
