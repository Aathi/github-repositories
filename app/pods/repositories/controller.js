import Ember from 'ember';

const { computed, observer, isEmpty } = Ember;
export default Ember.Controller.extend({
  genres: Ember.computed.mapBy('model', 'language'),
  unique: Ember.computed.uniq('genres'),

  observeSearchQueryInput: observer('searchQuery','ripoPrivacy','filterByLanguage','filterByAccess', function() {
    this.setProperties({
      ripoLanguageFilter: this.get('searchQuery'),
      ripoPrivacyFilter: this.get('ripoPrivacy'),
    });
  }),

  filteredResults: computed('model', 'ripoLanguageFilter','ripoPrivacyFilter', function() {
    let languageFilter = this.get('ripoLanguageFilter');
    let privacyFilter = this.get('ripoPrivacyFilter');
    if (!languageFilter || isEmpty(languageFilter)) {
      return this.get('model');
    } else {
      if (privacyFilter === undefined) {
        return this.get('model').filterBy('language', languageFilter);
      } else if(privacyFilter) {
        return this.get('model').filterBy('private', privacyFilter);
      } else {
        return this.get('model').filterBy('language', languageFilter);
      }

    }
  }),

  actions: {
    filterByLanguage(parameter) {
      this.set('searchQuery', parameter);
    },
    filterByAccess(parameter) {
      if (parameter === 'public' ) {
        this.set('ripoPrivacy', false);
      } else {
        this.set('ripoPrivacy', true);
      }
    },
    showRopoDetails(owner, name) {
      this.transitionToRoute('repositories.repo', owner, name);
    }
  }
});
