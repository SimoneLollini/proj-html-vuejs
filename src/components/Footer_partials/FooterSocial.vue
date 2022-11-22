<script>
import SocialWrapper from '../slot_common/SocialWrapper.vue';
export default {
    name: 'FooterSocial',
    components: {
        SocialWrapper
    }

}
</script>

<template>
    <div class="footer_social">
        <div class="copyright">
            <font-awesome-icon icon="fa-regular fa-copyright" /> Copyright 2012 - 2020 | Avada Theme by ThemeFusion |
            All Rights Reserved | Powered by Simone
        </div>
        <SocialWrapper />
    </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/partials/variable.scss' as *;

.footer_social {
    background-color: $mv-Lima;
    padding: 29px;
    color: $mv-White;
    @include mv-a;
    text-align: center;

    .copyright {
        padding-bottom: 22px;
    }

}
</style>