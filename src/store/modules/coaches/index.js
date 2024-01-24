import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'Arpi',
          lastName: 'Harutyunyan',
          areas: ['frontend', 'career'],
          description:
            "I'm Arpi and I've worked as a front end web developer for years.",
          hourlyRate: 30
        },
        {
          id: 'c2',
          firstName: 'Mariana',
          lastName: 'Harutyunyan',
          areas: ['frontend', 'career'],
          description:
            'I am Mariana as a junior developer in a big tech company',
          hourlyRate: 20
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};
