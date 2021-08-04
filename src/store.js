import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allUsers: [
      {
        userId: "hoza123",
        password: "123",
        name: "Hoza",
        address: "Seoul",
        src: "https://goo.gl/oqLfJR",
      },
      {
        userId: "max123",
        password: "456",
        name: "Max",
        address: "Berlin",
        src: "https://goo.gl/Ksk9B9",
      },
      {
        userId: "lego123",
        password: "789",
        name: "Lego",
        address: "Busan",
        src: "https://goo.gl/x7SpCD",
      },
    ],
  },
  getters: {
    allUsersCount: function(state) {
      return state.allUsers.length;
    },
    countOfSeoul: (state) => {
      let count = 0;
      state.allUsers.forEach((user) => {
        if (user.address === "Seoul") count++;
      });
      return count;
    },
    percentOfSeoul: (state, getters) => {
      //state와 꼭 함께 써야함
      return Math.round((getters.countOfSeoul / getters.allUsersCount) * 100);
    },
  },
  mutations: {
    addUsers: (state, payload) => {
      //state에 payload를 붙여서 변경시킴
      state.allUsers.push(payload);
    },
  },
  actions: {
    addUsers: ({ commit }, payload) => {
      // 원래 인자로 context, payload
      // context를 간단히 쓰기 위해 객체 형태로 {commit}으로 작성
      // {commit}, payload
      commit('addUsers', payload);
    },
  },
});
