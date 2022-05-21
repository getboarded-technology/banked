/* =========================================================================================
  File Name: moduleOrganization.js
  Description: Organization Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Studioor: Pixinvent
  Studioor URL: http://www.themeforest.net/user/pixinvent
========================================================================================== */

// import state from './moduleStudioState.js';
import mutations from "./moduleOrganizationMutations.js";
import actions from "./moduleOrganizationActions.js";
import getters from "./moduleOrganizationGetters.js";
import state from "./moduleOrganizationState.js";
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
