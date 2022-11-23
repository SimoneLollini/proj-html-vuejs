<script>
import SingleCol from './SingleCol.vue';
import PrimaryButton from '../slot_common/PrimaryButton.vue';
const imgPath = new URL("../../assets/images/avada-movers-janedoe-final.jpg", import.meta.url).href;

export default {
    name: 'OurOffers',
    components: {
        SingleCol,
        PrimaryButton
    },
    data() {
        return {
            offers: [
                {
                    name: 'Two Man Teams',
                    image: '/images/avada-movers-serviceonephoto-final-600x383.jpg',
                }, {
                    name: 'We Do All The Lifting',
                    image: '/images/avada-movers-servicetwophoto-final-600x383.jpg',
                }, {
                    name: 'Coast To Coast',
                    image: '/images/avada-movers-servicethreephoto-final-600x383.jpg',
                },
            ]
        }
    }

}
</script>

<template>
    <section class="offers">
        <div class="titles">
            <span>we are professional</span>
            <h3>Full-Service Solution</h3>
        </div>
        <div class="container_lg">
            <div class="row row-cols-3">

                <SingleCol :col="offer" v-for="offer in this.offers" />

            </div>
            <!-- /.row -->
        </div>
        <!-- ./container_lg -->
    </section>
</template>


<style lang="scss">
@use '../../assets/scss/partials/variable.scss' as *;

.offers {
    background-color: $mv-White;

    .titles {
        text-align: center;
        padding-top: 131px;

        span {
            color: $mv-Silver;
            @include span_upper;
        }

        h3 {
            color: $mv-Success;
            padding-bottom: 45px;
            padding-top: 25px;
        }
    }


    .card_body {
        padding: 14px;
        background-color: $mv-light;
        text-align: center;


        .card_bottom {
            background-color: $mv-White;
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