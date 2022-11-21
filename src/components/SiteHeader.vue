<script>
import HeaderTop from './HeaderTop.vue';

export default {
  name: "SiteMain",
  components: {
    HeaderTop
  }
}
</script>

<template>
  <header>
    <HeaderTop />
    <!-- /.header_top -->

    <nav>
      <a href="#">
        <img src="../assets/images/avada-movers-logo.png" alt="logo">
      </a>
    </nav>
    <!-- /nav -->

  </header>
</template>

<style lang="scss" scoped>
nav {
  img {
    width: 133px;
  }
}
</style>
