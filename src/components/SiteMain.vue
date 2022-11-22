<script>
import Jumbotron from './Jumbotron.vue';
import FreeQuote from './FreeQuote.vue';
import TestimonialsFeedback from './TestimonialsFeedback.vue';
import OurOffers from './OurOffers.vue';
import EaseMove from './EaseMove.vue';
import HappyCustomers from './HappyCustomers.vue';

export default {
  name: 'SiteMain',
  components: {
    Jumbotron,
    FreeQuote,
    TestimonialsFeedback,
    OurOffers,
    EaseMove,
    HappyCustomers
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
    <!-- /.testimonials_quotes -->

    <section class="call_to_action_quote">
      call to action quote
    </section>
    <!-- /.happy_customers -->
  </main>
</template>

<style lang="scss" scoped>

</style>
