<script>
import SocialWrapper from '../slot_common/SocialWrapper.vue';
export default {
    name: 'HeaderTop',
    components: {
        SocialWrapper,
    }
}
</script>

<template>
    <div class="header_top">
        <div class="container_lg d-flex justify-content-between align-items-center">
            <div class="contact_us">
                <a href="#" class="phone">
                    <font-awesome-icon icon="fa-solid fa-phone" />
                </a>
                <a href="#">Call us for a free quote: 1.800.555.6789</a>
            </div>

            <div class="social">
                <SocialWrapper />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variable.scss' as *;

.header_top {
    background-color: $mv-Success;
    padding-top: 11px;
    padding-bottom: 12px;
    border-bottom: 1px solid $mv-Success-lighter;
    color: $mv-White;

    a {
        font-size: 11px;
        color: $mv-White;
    }

    .phone {
        font-size: 14px;
        padding-left: 10px;
        display: inline-block;
        transform: scale(-1, 1);
    }

    .social {
        a {
            padding-left: 14px;
        }
    }
}
</style>