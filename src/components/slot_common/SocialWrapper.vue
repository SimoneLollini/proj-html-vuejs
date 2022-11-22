<script>
export default {
    name: 'SocialWrapper',
    data() {
        return {
            socials: [{
                name: 'FaceBook',
                icon: 'fa-brands fa-facebook-f',
                href: '#'
            },
            {
                name: 'FaceBook',
                icon: 'fa-brands fa-twitter',
                href: '#'
            }, {
                name: 'FaceBook',
                icon: 'fa-brands fa-instagram',
                href: '#'
            }, {
                name: 'FaceBook',
                icon: 'fa-brands fa-youtube',
                href: '#'
            },
            ]
        }
    }
}
</script>
<!-- <font-awesome-icon icon="fa-brands fa-facebook-f" /> -->
<template>
    <a :href="social.href" v-for="social in this.socials">
        <font-awesome-icon :icon="social.icon" />
    </a>
</template>
  
<style lang="scss" scoped>
@use '../../assets/scss/partials/variable.scss' as *;

a {
    font-size: 15px;
    color: $mv-White;
    padding: 0 12px;
}
</style>