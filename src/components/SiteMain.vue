<script>
import Jumbotron from './Jumbotron.vue';
import FreeQuote from './FreeQuote.vue';

export default {
  name: 'SiteMain',
  components: {
    Jumbotron,
    FreeQuote
  }
}
</script>

<template>
  <main>
    <Jumbotron />
    <!-- /.jumbotron -->

    <FreeQuote />
    <!-- /.free_quote -->

    <section class="testimonials_feedback">
      testimonials
    </section>
    <!-- /.testimonials_feedback -->

    <section class="offers">
      offers
    </section>
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
