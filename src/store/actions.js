import colorABI from '../abis/Color'
export default {

    async loadUser(store) {
        const web3 = await window.web3
        const accounts = await web3.eth.getAccounts()
        store.commit('setUser', accounts[0])
    },
    async loadData(store) {

        const networkId = await window.web3.eth.net.getId()
        if (colorABI.networks[networkId]) {
            const address = colorABI.networks[networkId].address
            const colorContract = new web3.eth.Contract(colorABI.abi, address)
        } else {
            window.alert('Contract not deployed to detected newtwork')
        }
    }

}