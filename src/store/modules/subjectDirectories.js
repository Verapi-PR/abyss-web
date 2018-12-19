/* eslint-disable */
import api from '@/api';

const state = {
  items: [],
};

const getters = {
  // setSubjectDirectories: (state) => {
  //   return state.subjectDirectories;
  // },
};

const actions = {
  getSubjectDirectories: ({ commit }) => {
    api.getSubjectDirectories().then((response) => {
      commit('setSubjectDirectories', response.data);
    });
  },
  putSubjectDirectories: ({ commit }, subjectDirectory) => {
    api.putSubjectDirectories(subjectDirectory).then((response) => {
      commit('updateSubjectDirectories', response.data);
    });
  },
};

const mutations = {
  setSubjectDirectories: (state, subjectDirectories) => {
    state.items = subjectDirectories;
  },
  updateSubjectDirectories: (state, subjectDirectories) => {
    state.items = state.items.map((item) => {
      const itemShouldUpdate = subjectDirectories
        .find(subjectDirectory => subjectDirectory.uuid === item.uuid);
      return itemShouldUpdate ? itemShouldUpdate : item;
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
