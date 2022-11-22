<script>
import Jumbotron from './Jumbotron.vue';
import FreeQuote from './FreeQuote.vue';
import TestimonialsFeedback from './TestimonialsFeedback.vue';
import OurOffers from './OurOffers.vue';

export default {
  name: 'SiteMain',
  components: {
    Jumbotron,
    FreeQuote,
    TestimonialsFeedback,
    OurOffers
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


    <OurOffers />
    <!-- /.offers -->
    <section class="ease_moves">
      ease moves
    </section>
    <!-- /.ease_moves -->
    <section class="testimonials_quotes">
      testimonials
    </section>
    <!-- /.testimonials_quotes -->

    <section class="call_to_action_quote">
      call to action quote
    </section>
    <!-- /.call_to_action_quote -->
  </main>
</template>

<style lang="scss" scoped>

</style>
