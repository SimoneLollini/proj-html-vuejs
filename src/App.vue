<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteMain from './components/SiteMain.vue'
import SiteFooter from './components/SiteFooter.vue'
import AngleUp from './components/slot_common/AngleUp.vue';

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter,
    AngleUp
  }
}
</script>

<template>
  <SiteHeader />
  <SiteMain />
  <SiteFooter />
  <AngleUp />
</template>

<style lang="scss" scoped>

</style>
