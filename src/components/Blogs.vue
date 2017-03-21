<template lang="jade">
div.blogs
  div.card.bs(v-for="issue in issues")
    .title.one-line {{issue.title}}
    .two-line.sub {{issue.plainBody}}
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'Blogs',
  computed: mapState(['issues']),
  methods: mapActions(['getIssues']),
  created () {
    this.getIssues()
  }
}
</script>

<style lang="scss" scoped>
@import "../sass/subimport";
.title {
  font-size: r(48);
  padding: r(20) r(10);
  text-align: center;
  align-items: center;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: r(240);
  margin: r(15) 0;
  color: $primary-text-color;
  border-bottom: 1px solid $divider-color;
}
.sub {
  font-size: r(28);
  padding: 0 r(10);
  color: $secondary-text-color;
}
</style>
