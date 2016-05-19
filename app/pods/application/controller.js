import Ember from 'ember';

const { isEmpty, Controller } = Ember;

export default Controller.extend({
  actions: {
    getRipos() {
      let ownername = this.get('ownername');
      let accessToken = this.get('accessToken');
      let ownerType = this.get('isUserSelected');

      if (isEmpty(ownername)) {
        this.set('formError', 'Please enter the name');
      } else {
        this.set('formError', false);
        if (isEmpty(accessToken)) {
          this.set('formError', `if you didn't provide the access token it will show only public repositories`);
          this.transitionToRoute('repositories', ownerType, ownername, 'public-ripos-only');
        } else {
          this.transitionToRoute('repositories', ownerType, ownername, accessToken);
        }
      }

      Ember.run.later(this, function() {
         $(".alert").fadeOut(500);
         this.set('formError', false);
      }, 3000);
    },

    selectAuser(userType) {
      !isEmpty(userType) ? this.set('isUserSelected', userType) : this.set('isUserSelected', userType);
    }
  }
});
