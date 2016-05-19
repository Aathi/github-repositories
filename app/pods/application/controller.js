import Ember from 'ember';

const { isEmpty, Controller } = Ember;

export default Controller.extend({
  actions: {
    getRipos() {
      let ownername = this.get('ownername');
      let accessToken = this.get('accessToken');
      let ownerType = this.get('isUserSelected');

      if (isEmpty(ownername)) {
        this.set('formError', true);
        this.set('formError', 'Please enter the name and access token');
      } else {
        this.set('formError', false);
        if (isEmpty(accessToken)) {
          this.set('formError', `if you didn't provide the access token it will show only public ripo`);
          this.transitionToRoute('repositories', ownerType, ownername, 'public-ripos-only');
        } else {
          this.transitionToRoute('repositories', ownerType, ownername, accessToken);
        }
      }
    },

    selectAuser(userType) {
      !isEmpty(userType) ? this.set('isUserSelected', userType) : this.set('isUserSelected', userType);
    }
  }
});
