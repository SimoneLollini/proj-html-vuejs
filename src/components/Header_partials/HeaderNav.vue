<script>
import NavItem from './NavItem.vue';
import PrimaryButton from '../slot_common/PrimaryButton.vue';
import LogoMovers from '../slot_common/LogoMovers.vue';
import { store } from '../../data/store.js';

export default {
    name: 'HeaderNav',
    components: {
        NavItem, PrimaryButton, LogoMovers
    },
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <div class="nav_bar">
        <div class="container_lg">
            <nav class="d-flex justify-content-between">
                <LogoMovers />
                <div class="link_wrapper d-flex align-items-center">
                    <NavItem :item="item" :index="index" v-for="(item, index) in store.navBar" />
                    <!-- /.NavItem -->
                    <PrimaryButton>free quote</PrimaryButton>
                </div>
                <!-- /.link_wrapper -->
            </nav>
        </div>
    </div>


</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variable.scss' as *;

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

