<template lang="jade">
#app
  header-component
  keep-alive
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
</style>
