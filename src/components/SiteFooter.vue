<script>
import FooterMain from './Footer_partials/FooterMain.vue';
import FooterSocial from './Footer_partials/FooterSocial.vue';

export default {
  name: 'SiteFooter',
  components: {
    FooterMain,
    FooterSocial
  }
}
</script>

<template>
  <footer>
    <FooterMain />
    <!-- /.footer_main -->

    <FooterSocial />
    <!-- /.footer_social -->
  </footer>
</template>

<style lang="scss" scoped>

</style>
