<template lang="jade">
div
  div.blogs
    router-link.card.bs(v-for="issue in issues", :to="{name: 'blog', params: {id: issue.number}}")
      .title.one-line {{issue.title}}
      .two-line.sub {{issue.plainBody}}
    .small-loading(ref="loadingFlag" v-show="issues.loaded")

  div.loading(v-show="!issues.loaded")
</template>

<script>
import {mapState, mapActions} from 'vuex'
import {isElementInViewport} from 'tools/methods'
export default {
  name: 'Blogs',
  data () {
    return {
      page: 1
    }
  },
  computed: mapState(['issues']),
  methods: mapActions(['getIssues']),
  deactivated () {
    window.onscroll = null
  },
  activated () {
    this.getIssues()
    window.onscroll = () => {
      if (isElementInViewport(this.$refs.loadingFlag)) this.getIssues({page: ++this.page})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../sass/subimport";
.small-loading {
  background: url(../assets/small_loading.svg) no-repeat center;
  margin: auto;
  border-radius: r(10);
  height: r(72);
  width: r(72);
}
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
  background-color: white;
  color: $primary-text-color;
  border-bottom: 1px solid $divider-color;
}
.sub {
  font-size: r(28);
  padding: 0 r(10);
  color: $secondary-text-color;
}
</style>
