import Vue from 'vue'
import App from './App.vue'
import Navbar from './components/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store'

(async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    await window.ethereum.enable()
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider)
  } else {
    window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
  }
})()




Vue.config.productionTip = false
Vue.component('vNavbar', Navbar)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')