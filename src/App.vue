<template>
  <div id="app">
    <v-navbar></v-navbar>
    <div class="container p-5">
      <div class="row justify-content-center mb-2">
        <div class="col-3">
          <div class="form-group">
            <label for="exampleInputEmail1">New Color</label>
            <input class="form-control" placeholder="Example: #FFFFFF" v-model="color" />
          </div>
          <button class="btn btn-primary btn-block" @click.prevent="add()">Add</button>
        </div>
      </div>
      <hr />
      <div class="row justify-content-between">
        <span
          v-for="(color, index) in $store.getters.colors"
          :key="index"
          class="row flex-column align-content-center text-center"
        >
          <span class="token" :style="`background: ${color}`"></span>
          <span class="mt-2">{{ color }}</span>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      color: null
    };
  },
  methods: {
    async add() {
      if (this.color) {
        await this.$store.getters.contract.methods
          .mint(this.color)
          .send({
            from: this.$store.getters.user
          })
          .once("receipt", receipt => {
            this.$store.dispatch("addColor", this.color);
          });
      }
    }
  },
  mounted() {
    this.$store.dispatch("loadUser", this);
    this.$store.dispatch("loadData", this);
  }
};
</script>
<style >
.token {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  display: inline-block;
}
</style>