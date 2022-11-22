<script>
import Jumbotron from './Jumbotron.vue';
import FreeQuote from './FreeQuote.vue';
import TestimonialsFeedback from './TestimonialsFeedback.vue';
import OurOffers from './OurOffers.vue';
import EaseMove from './EaseMove.vue';
import HappyCustomers from './HappyCustomers.vue';
import CallToActionQuote from './CallToActionQuote.vue';

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
