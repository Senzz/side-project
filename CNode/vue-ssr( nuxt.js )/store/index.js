import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from '~/storeFile/actions.js'
import * as mutations from '~/storeFile/mutations.js'

Vue.use(Vuex);

const store = () => new Vuex.Store({
  actions,
  mutations,
  state: {
    pageIndex: 1,
    pageLimit: 10,
    activeTopicsType: "",
    
    articleList: [],
    articleDetail: {},
  }
});

export default store