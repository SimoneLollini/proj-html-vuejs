<script>
import PrimaryButton from '../slot_common/PrimaryButton.vue';

export default {
    name: 'TestimonialsFeedback',
    components: {
        PrimaryButton
    }
}
</script>

<template>
    <section class="testimonials_feedback">
        <div class="container_sm">
            <span>headache free</span>
            <h3>
                Award Winning Moving Company
            </h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis nihil et facere maxime tempore,
                in
                ex delectus itaque qui unde enim atque hic iure tempora nisi numquam minima assumenda repellendus
                aliquam,
                reiciendis dolores.
            </p>
            <PrimaryButton>Read our testimonials</PrimaryButton>
        </div>

    </section>
</template>

<style lang="scss">
@use '../../assets/scss/partials/variable.scss' as *;

.testimonials_feedback {
    background-color: $mv-Dirty-White;
    @include CallToAction_Quote;
    color: $mv-Silver;
}
</style>