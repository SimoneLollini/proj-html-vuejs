<script>
import PrimaryButton from '../slot_common/PrimaryButton.vue';

export default {
    name: 'SingleCol',
    components: {
        PrimaryButton
    },
    props: {
        col: Object
    }
}

</script>


<template>
    <div class="col">
        <div class="card_body">
            <div class="card_top">
                <img :src="col.image" alt="">
                <!-- <img src="" alt=""> -->
            </div>
            <!-- /.card_top -->
            <div class="card_bottom">
                <h4>{{ col.name }}</h4>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores molestias, omnis
                    necessitatibus eaque commodi totam temporibus in consequuntur odio quas, facilis
                    doloribus odit earum. Nesciunt?
                </p>
                <PrimaryButton>Read more</PrimaryButton>
            </div>
            <!-- /.card_bottom -->
        </div>
        <!-- /.card_body -->
    </div>
    <!-- /.col -->
</template>

<style lang="scss" scoped>

</style>