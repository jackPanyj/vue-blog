<template lang="jade">
div.header.bs
  div.title
    div 潘家大少爷的博客
    div.justified.icon(@click="showRoute=!showRoute")
  div.modules(v-if="showRoute")
    router-link.item.ts(:to="{name: 'chat'}") chat
    router-link.item.ts(:to="{name: 'blogs'}") blogs
    router-link.item.ts(:to="{name: 'about'}") about
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      showRoute: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../sass/subimport";
.title {
  font-family: panshao;
  display: flex;
  line-height: r(120);
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: $primary-color-dark;
  padding: 0 r(30);
  font-size: r(48);
}
.header {
  display: flex;
  flex-direction: column;
  background-color: $primary-color;
  text-align: center;
  margin-bottom: r(30);
}
.modules {
  display: flex;
  flex-direction: column;
}
.item {
  text-transform: uppercase;
  width: 100%;
  line-height: r(80);
  border-bottom: 1px solid $divider-color;
}
</style>
