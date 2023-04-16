<template>
  <div>
    <button @click="showSingle">Show Floorplan</button>
    <vue-easy-lightbox
      scrollDisabled
      escDisabled
      moveDisabled
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    ></vue-easy-lightbox>
  </div>
</template>

<script>
    import VueEasyLightbox from 'vue-easy-lightbox';

    export default {
        components: {
            VueEasyLightbox
        },
        data() {
            return {
                imgs: '', 
                visible: false,
            }
        },
        methods: {
            showSingle() {

            this.imgs = [{
                title: 'Central Library Level 5',
                src: "https://i.ibb.co/23Wphkc/clb-level-5.jpg"
            }]
            this.show()
            },

            show() {
                this.visible = true
            },
            handleHide() {
                this.visible = false
            }
        }
    }
</script>
