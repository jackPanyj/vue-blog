<template lang="jade">
#app
  header-component
  router-view
</template>

<script>
import HeaderComponent from 'components/HeaderComponent'
export default {
  name: 'app',
  components: {HeaderComponent}
}
</script>

<style lang="scss">
@import "./sass/base";
#app {
  padding: 0 r(30);
}
</style>
