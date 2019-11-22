let fetch = require('./fetch.js');

let baseUrl = 'http://kumanxuan1.f3322.net:8090'; 

const getHomeBean = ()=>{
  return fetch.get({ url: baseUrl + "/home.json"})
}

const login = (data) => {
  return fetch.get({ url: baseUrl + "/login.json" ,data:data})
}
// 获取商品
const gooslist = () => {
  return fetch.get({ url: baseUrl + "/goods/list"})
}

// 获取NEW
const getNewBean = () => {
  return fetch.get({ url: baseUrl + "/new.json" })
}
// 根据ID获取商品
const getDetailId = (data) => {
  return fetch.get({ url: baseUrl + "/goods/findById" ,
  data:data
  })
}

module.exports={
  getHomeBean, login, gooslist, getDetailId, getNewBean
}