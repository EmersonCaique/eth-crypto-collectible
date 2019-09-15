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
            const contract = new web3.eth.Contract(colorABI.abi, address)
            const totalSupply = await contract.methods.totalSupply().call()

            store.commit('setContract', contract)

            for (let i = 0; i < totalSupply; i++) {
                store.commit('addColor', await contract.methods.colors(i).call())
            }

        } else {
            window.alert('Contract not deployed to detected newtwork')
        }
    },
    addColor(store, payload) {
        store.commit('addColor', payload)
    }

}