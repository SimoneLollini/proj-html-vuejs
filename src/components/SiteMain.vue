<script>
import Jumbotron from './Main_partials/Jumbotron.vue';
import FreeQuote from './Main_partials/FreeQuote.vue';
import TestimonialsFeedback from './Main_partials/TestimonialsFeedback.vue';
import OurOffers from './Main_partials/OurOffers.vue';
import EaseMove from './Main_partials/EaseMove.vue';
import HappyCustomers from './Main_partials/HappyCustomers.vue';
import CallToActionQuote from './Main_partials/CallToActionQuote.vue';

export default {
  name: 'SiteMain',
  components: {
    Jumbotron,
    FreeQuote,
    TestimonialsFeedback,
    OurOffers,
    EaseMove,
    HappyCustomers,
    CallToActionQuote
  }
}
</script>

<template>
  <main>
    <Jumbotron />
    <!-- /.jumbotron -->

    <FreeQuote />
    <!-- /.free_quote -->

    <TestimonialsFeedback />
    <!-- /.testimonials_feedback -->

    <!-- TODO rendere dinamico questo componente -->
    <OurOffers />
    <!-- /.offers -->

    <EaseMove />
    <!-- /.ease_moves -->

    <HappyCustomers />
    <!-- /.happy_customers -->

    <CallToActionQuote />

  </main>
</template>

<style lang="scss" scoped>

</style>
