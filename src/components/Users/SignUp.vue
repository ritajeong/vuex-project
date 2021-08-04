<template>
  <div>
    <h1>SignUp</h1>
    <v-text-field label="아이디" v-model="userId"></v-text-field>
    <v-text-field
      label="비밀번호"
      type="password"
      v-model="password"
    ></v-text-field>
    <v-text-field label="이름" v-model="name"></v-text-field>
    <v-text-field label="주소" v-model="address"></v-text-field>
    <v-text-field label="이미지" v-model="src"></v-text-field>
    <v-btn @click="signUp">회원가입</v-btn>
  </div>
</template>

<script>
import { EventBus } from "@/main.js";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      userId: null,
      password: null,
      name: null,
      address: null,
      src: null,
    };
  },
  methods: {
    //...mapMutations(['addUsers']), //store에서는 addUsers로 중복되어도 상관없음. 그러나 컴포넌트 내에서 addUsers로 중복되기때문에 주석처리함
    ...mapActions(['addUsers']),
    signUp() {
      let userObj = {
        userId: this.userId,
        password: this.password,
        name: this.name,
        address: this.address,
        src: this.src,
      };
      //EventBus.$emit("signUp", userObj);
      //this.addUsers(userObj)//여기서 넘긴 인자가 store.js의 mutations-addUsers-payload로 전달됨
      //this.$store.commit('addUsers', userObj) //'addUsers'라는 mutations를 사용할 것인데, userObj를 payload로 전달
      //this.$store.dispatch('addUsers',userObj) //(dispatch니까) store의 'addUsers'라는 함수를 호출하고, userObj를 payload로 전달
      this.addUsers(userObj)
      this.clearForm();

    },
    clearForm() {
      (this.userId = null),
        (this.password = null),
        (this.name = null),
        (this.address = null),
        (this.src = null);
    },
  },
};
</script>