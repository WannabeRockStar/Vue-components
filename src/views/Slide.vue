<template>
    <div class="slider-container" ref="parentDiv">
        {{ pics.length }}
        <div class="inner-container" ref="childDiv" @transitionend="getTransition">
            <!-- <img id="firstPic" :src="require(`@/assets/img/${pics[0].src}`)" alt="first-pic"> -->
            <img 
                v-for="pix in pics"
                :key="pix.id"
                :src="require(`@/assets/img/${pix.src}`)" 
                :alt="pix.title" 
            />
            <!-- <img id="lastPic" :src="require(`@/assets/img/${pics[pics.length - 1].src}`)" alt="last-pic"> -->
        </div>
        <div
            class="productSliderButton prev" 
            @click="prevSlide">
           <svg xmlns="http://www.w3.org/2000/svg" width="12.013" height="21.906" viewBox="0 0 12.013 21.906">
                <g id="Group_70" data-name="Group 70" transform="translate(42.561 -19626.655) rotate(-90)">
                    <path id="Path_61" data-name="Path 61" d="M0,9.892,9.892,0" transform="translate(-19637.607 -41.5)" fill="none" stroke="#444958" stroke-linecap="round" stroke-width="1.5"></path>
                    <path id="Path_60" data-name="Path 60" d="M9.892,9.892,0,0" transform="translate(-19647.5 -41.5)" fill="none" stroke="#444958" stroke-linecap="round" stroke-width="1.5"></path>
                </g>
            </svg>
        </div>
        <div 
            class="productSliderButton next"
            @click="nextSlide">
            <svg xmlns="http://www.w3.org/2000/svg" width="12.013" height="21.906" viewBox="0 0 12.013 21.906">
                <g id="Group_70" data-name="Group 70" transform="translate(42.561 -19626.655) rotate(-90)">
                    <path id="Path_61" data-name="Path 61" d="M0,9.892,9.892,0" transform="translate(-19637.607 -41.5)" fill="none" stroke="#444958" stroke-linecap="round" stroke-width="1.5"></path>
                    <path id="Path_60" data-name="Path 60" d="M9.892,9.892,0,0" transform="translate(-19647.5 -41.5)" fill="none" stroke="#444958" stroke-linecap="round" stroke-width="1.5"></path>
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pics: [
                {id: 1, src: 'pexels-photo.jpeg', title: 'image_1', ide: "first"},
                {id: 2, src: 'pexels-photo.jpeg', title: 'image_2'},
                {id: 3, src: 'pexels-photo.jpeg', title: 'image_3'},
                {id: 4, src: 'pexels-photo.jpeg', title: 'image_4'},
                {id: 5, src: 'pexels-photo.jpeg', title: 'image_5', ide: "last"}
            ],
            counter: 1,
            itemSize: 0
        }
    },

    methods: {
        initTransition() {
            this.$refs.childDiv.style.transition = "all 400ms ease-in-out"
        },

        initCounter() {
            this.$refs.childDiv.style.transform = 'translateX(' + (-this.itemSize * this.counter) + 'px)'
        },

        prevSlide() {
            console.log("prev")
            this.initTransition()
            this.counter--
            this.initCounter()
        },

        nextSlide() {
            console.log("next")
            this.initTransition()
            this.counter++
            this.initCounter()
        },

        getTransition() {
            console.log("fired")
            if(this.pics[this.counter].hasOwnProperty("ide")) {
                this.$refs.childDiv.style.transition = "none"
                this.counter = this.pics.length - 2;
                this.initCounter()
            }

            if(this.pics[this.counter].hasOwnProperty("ide")) {
                this.$refs.childDiv.style.transition = "none"
                this.counter = this.pics.length - this.counter;
                this.initCounter()
            }
        }
    },

    mounted() {
        this.itemSize = this.$refs.parentDiv.clientWidth
        console.log(this.$refs.childDiv.offsetWidth)
        this.initCounter()
    }
}
</script>

<style scoped>
    .slider-container {
        width: 1200px;
        margin: auto;
        position: relative;
        overflow: hidden;
    }
    .inner-container {
        width: 100%;
        display: flex;
        transition: all 500ms;
        
    }
    .inner-container img {
        width: 100%;
        display: block;
    }

    .productSliderButton {
        width: 54px;
        height: 54px;
        background-color: #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        -webkit-box-shadow: 0px 0px 5px 5px rgba(0,97,175,0.25);
        -moz-box-shadow: 0px 0px 5px 5px rgba(0,97,175,0.25);
        box-shadow: 0px 0px 5px 5px rgba(0,97,175,0.25);
        transition: 0.4s ease-in-out;
        cursor: pointer;
        outline: none;
        z-index: 10;
        position: absolute;
        top: calc(50%);
    }

    .prev {
        left: -20px;
    }
    .next {
        right: -20px;
    }
</style>