<script>
import HeaderTop from './HeaderTop.vue';
import HeaderNav from './HeaderNav.vue';

export default {
  name: "SiteMain",
  components: {
    HeaderTop,
    HeaderNav
  }
}
</script>

<template>
  <header>
    <HeaderTop />
    <!-- /.header_top -->
    <HeaderNav />
    <!-- /nav -->
  </header>
</template>

<style lang="scss" scoped>
header {
  position: relative;
}
</style>
