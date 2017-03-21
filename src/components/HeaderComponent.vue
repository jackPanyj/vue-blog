<template lang="jade">
div.header.bs
  div.item.ts chat
  router-link.item.ts(:to="{name: 'blogs'}") blogs
  div.item.ts about
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
@import "../sass/subimport";
.header {
  display: flex;
  line-height: r(120);
  text-align: center;
  background-color: $primary-color-dark;
  margin-bottom: r(30);
}
.item {
  flex-basis: calc(100vw / 3);
  text-transform: uppercase;
}
</style>
