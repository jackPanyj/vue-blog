<template lang="jade">
div.blog.markdown-body(v-html="activeBlog && activeBlog.htmlBody")
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['issues']),
    activeBlog () {
      return this.issues.find(i => i.number === +this.$route.params.id)
    }
  },
  activated () {
    if (this.issues.length === 0) this.$store.dispatch('getIssues')
  }
}
</script>

<style lang="scss" scope>
@import "../sass/subimport";
.blog {
  padding: r(30);
}
</style>
