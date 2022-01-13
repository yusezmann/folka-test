import jwtInterceptor from "../../shared/jwtInterceptor";
 
const state = {
  products :'',
  detailProducts :[]
};
 
const getters = {
  getAllProducts(state){
   state.products;
  },
  getDetailProducts(state){
   state.detailProducts;
  }
};
 
const actions = {
  async getAllProducts({commit}){
    await jwtInterceptor.get('https://techtest.folkatech.com/api/product?keyword=&price=10000,250000&page=1&limit=9&order=product_name,ASC')
      .then((res) => {
        commit('setProducts', res.data.data)
    })
  },
  async getDetailProducts({commit}, routeId){
    await jwtInterceptor.get('https://techtest.folkatech.com/api/product?keyword=&price=10000,250000&page=1&limit=3&order=product_name,ASC')
      .then((res) => {
        commit('setDetailProducts', res.data.data.list)
    console.log(res.data.data.list);
    })
  },
};
 
const mutations = {
  setProducts(state, payload){
   state.products = payload;
  },
  setDetailProducts(state, payload){
   state.detailProducts = payload;
  }
};
 
export default{
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}