<template lang="jade">
#app
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapActions(['getUserInfo', 'getIssues'])
  },
  created () {
    this.getUserInfo()
    this.getIssues()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
