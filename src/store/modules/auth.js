import { jwtDecrypt } from "../../shared/jwtHelper";

const state = () => ({
  authData: {
    token: "",
    refreshToken: "",
    // tokenExp: "",
    userId: "",
    userName: "",
  },
  loginStatus:"",
});
 
const getters = {
  getLoginStatus(state){
    return state.loginStatus;
  },
  getAuthData(state){
    return state.authData;
  },

};
 
const actions = {
  async login({ commit }, payload) {
    await fetch('https://techtest.folkatech.com/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: payload.email,
            password: payload.password,
        }),
    })
        .then((res) => res.json())
        .then((result) => {
            if (result.data) {
                commit('saveTokenData', result.data)
                commit('setLoginStatu', result.message)
            } else {
                commit('setLoginStatu', 'failed')
            }
        })
        .catch((err) => {
            console.log(err)
        })
},
  async register({ commit }, payload) {
    await fetch('https://techtest.folkatech.com/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: payload.name,
            // lastName: payload.lastName,
            email: payload.email,
            phone: payload.phone,
            password: payload.password,
        }),
    })
        .then((res) => res.json())
        .then((result) => {
            if (result.data.message === 'Success.') {
              this.$router.push('/login')
            }
        })
        .catch((err) => {
            console.log(err)
        })
},
};
 
const mutations = {
  saveTokenData(state, data) {
    localStorage.setItem("access_token", data.token);
 
    const jwtDecodedValue = jwtDecrypt(data.token);
    const newTokenData = {
      token: data.token,
      userId: jwtDecodedValue.id,
      userName: jwtDecodedValue.name,
    };
    state.authData = newTokenData; 
  },
  setLoginStatu(state, value){
     state.loginStatus = value;
  }
};
 
export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}