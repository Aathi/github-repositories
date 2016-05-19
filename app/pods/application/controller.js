import Ember from 'ember';

const { isEmpty, Controller } = Ember;

export default Controller.extend({
  actions: {
    getRipos() {
      let ownername = this.get('ownername');
      let accessToken = this.get('accessToken');
      let ownerType = this.get('owner');
      if (this.get('owner') === 'users') {
        if (isEmpty(ownername) || isEmpty(accessToken) ) {
          this.set('formError', 'Please enter the name and access token');
        } else {
          this.set('formError', false);
          this.transitionToRoute('repositories', ownerType, ownername, accessToken);
        }
      }
      if (this.get('owner') === 'orgs') {
        if (isEmpty(ownername)) {
          this.set('formError', 'Please enter the organization name');
        } else {
          this.set('formError', false);
          this.transitionToRoute('repositories', ownerType, ownername, 'ripos');
        }
      }
    },

    hideOnChange() {
      if (this.get('owner') === 'users') {
        this.set('isUser', true);
      } else {
        this.set('isUser', false);
      }
    }
  }
});
