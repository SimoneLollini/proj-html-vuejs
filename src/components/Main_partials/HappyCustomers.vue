<script>
import SingleCol from './SingleCol.vue';
import PrimaryButton from '../slot_common/PrimaryButton.vue';

export default {
    name: 'HappyCustomers',
    components: {
        PrimaryButton,
        SingleCol
    },
    data() {
        return {
            customers: [
                {
                    name: 'John Doe',
                    image: '/images/avada-movers-johndoe-final.jpg',
                }, {
                    name: 'Jane Doe',
                    image: '/images/avada-movers-janedoe-final.jpg',
                }, {
                    name: 'John Smith',
                    image: '/images/avada-movers-johnsmith-final.jpg',
                }
            ]
        }
    }

}
</script>

<template>
    <section class="customers">
        <div class="titles">
            <span>happy customers</span>
            <h3>Testimonials</h3>
        </div>
        <!-- /titles -->

        <div class="container_lg">
            <div class="row row-cols-3">
                <!-- <SingleCol :col="customer" v-for="customer in this.customers" /> -->

                <SingleCol :col="customer" v-for="customer in this.customers" />

            </div>
            <!-- /.row -->
        </div>
        <!-- ./container_lg -->
    </section>
</template>


<style lang="scss">
@use '../../assets/scss/partials/variable.scss' as *;

.customers {
    background-image: url(/images/avada-movers-testimonial-background.jpg);
    background-size: cover;

    .titles {
        text-align: center;
        padding-top: 131px;

        span {
            color: $mv-Silver;
            @include span_upper;
            font-weight: bold;

        }

        h3 {
            color: $mv-Success;
            padding-bottom: 45px;
            padding-top: 25px;
        }
    }

    .card_body {
        padding: 14px;
        text-align: center;

        img {
            width: 108px;
            aspect-ratio: 1/1;
            object-fit: contain;
            border-radius: 50%;
        }

        .card_bottom {
            margin-top: 14px;
            padding-bottom: 21px;

            h4 {
                color: $mv-Secondary;
                padding-top: 31px;
                padding-bottom: 23px;
            }

            p {
                padding-bottom: 29px;
            }
        }
    }
}
</style>