<script>
import { store } from "../../data/store.js";
export default {
    name: 'SocialWrapper',
    data() {
        return {
            store
        }
    }
}
</script>
<!-- <font-awesome-icon icon="fa-brands fa-facebook-f" /> -->
<template>
    <a :href="social.href" v-for="social in store.socials">
        <font-awesome-icon :icon="social.icon" />
    </a>
</template>
  
<style lang="scss" scoped>
@use '../../assets/scss/partials/variable.scss' as *;

a {
    font-size: 15px;
    color: $mv-White;
    padding: 0 12px;
    display: inline-block;
}
</style>