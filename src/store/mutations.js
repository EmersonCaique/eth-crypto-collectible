export default {
    setUser(state, payload) {
        state.user = payload
    },
    setColors(state, payload) {
        state.colors = payload
    },
    addColor(state, payload) {
        state.colors = [...state.colors, payload]
    },
    setContract(state, payload) {
        state.contract = payload
    }
}