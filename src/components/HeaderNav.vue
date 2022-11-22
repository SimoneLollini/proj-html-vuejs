<script>
import NavItem from './NavItem.vue';
import PrimaryButton from './slot/PrimaryButton.vue';

export default {
    name: 'HeaderNav',
    components: {
        NavItem, PrimaryButton
    },
    data() {
        return {
            Items: [
                {
                    href: '#',
                    text: 'Home'
                }, {
                    href: '#',
                    text: 'Rates'
                }, {
                    href: '#',
                    text: 'Testimonials'
                }, {
                    href: '#',
                    text: 'FAQ'
                }, {
                    href: '#',
                    text: 'Blog'
                }, {
                    href: '#',
                    text: 'Contact'
                },
            ]
        }
    }
}

</script>

<template>
    <div class="nav_bar">
        <div class="container_lg">
            <nav class="d-flex justify-content-between">
                <a href="#">
                    <img src="../assets/images/avada-movers-logo.png" alt="logo">
                </a>
                <div class="link_wrapper d-flex align-items-center">
                    <NavItem :item="item" v-for="item in this.Items" />
                    <a href="#">
                        <PrimaryButton>FREE QUOTE</PrimaryButton>
                    </a>
                </div>
                <!-- /.link_wrapper -->
            </nav>
        </div>
    </div>


</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variable.scss' as *;

.nav_bar {
    position: absolute;
    left: 50%;
    translate: -50%;
    width: 933px;

    nav {
        padding-top: 14px;

        a {
            img {
                width: 133px;
            }

            font-size: 11px;
        }

    }
}
</style>

