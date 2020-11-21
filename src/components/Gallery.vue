<template>
    <div class="light-box" :class="{'isOpen': open}">
        <div class="light-header">
            <span @click="$emit('close-modal')">
                <svg data-v-6830f590="" xmlns="http://www.w3.org/2000/svg" width="15.424" height="15.424" viewBox="0 0 15.424 15.424">
                    <path data-v-6830f590="" id="Icon_metro-cancel" data-name="Icon metro-cancel" d="M22.815,9.64l-4.82,4.82-4.82-4.82-2.892,2.892,4.82,4.82-4.82,4.82,2.892,2.892,4.82-4.82,4.82,4.82,2.892-2.892-4.82-4.82,4.82-4.82Z" transform="translate(-10.283 -9.64)" fill="#fff"></path>
                </svg>
            </span>
        </div>

        <div class="light-container">
            <div class="light-body">
                <span class="prev-btn btn" @click="prevImage">
                    <svg data-v-2951e615="" width="25" height="40" viewBox="0 0 25 40">
                        <polyline data-v-2951e615="" 
                            points="19 5 5 20 19 35" 
                            stroke-width="3" 
                            stroke-linecap="butt" 
                            fill="none" 
                            stroke-linejoin="round" 
                            stroke="rgba(255, 255, 255, 0.8)">
                        </polyline>
                    </svg>
                </span>

                <img ref="mainImage" :src="data[counter].url" alt="">
                
                <span class="next-btn btn" @click="nextImage">
                    <svg data-v-2951e615="" width="25" height="40" viewBox="0 0 25 40">
                        <polyline data-v-2951e615="" 
                            points="6 5 20 20 6 35" 
                            stroke-width="3" 
                            stroke-linecap="butt" 
                            fill="none" 
                            stroke-linejoin="round" 
                            stroke="rgba(255, 255, 255, 0.8)"></polyline>
                    </svg>
                </span>
            </div>

            <div class="light-footer">
                <ul class="thumb-box">
                    <li class="thumb-item" v-for="(image, index) in data" :key="image.id" :class="{'active': index === counter}" >
                        <img 
                            :src="image.url" 
                            :alt="image.id"
                            @click="setImage(index)">
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        open: {
            type: Boolean,
            required: true
        },

        data: {
            type: Array,
            required: true
        }
    },

    data() {
        return {
            imageURL: '',
            counter: 0
        }
    },

    methods: {
        setImage(id) {
            this.counter = id
        },

        prevImage() {
            
            this.counter--
        },

        nextImage() {
            if(this.counter === this.data.length - 1) this.counter = -1
            this.counter++
        }
    },

    mounted() {
        document.addEventListener('keypress', (e) => {
            console.log('In this dancery', e)
            if(e.which  === 27) {
                this.$emit('close-modal')
                console.log('ESC')
            }
        })
    }
}
</script>

<style scoped>

    .light-box {
        width: 100%;
        height: 100vh;
        position: fixed;
        background: #222;
        top: 0;
        left: 0;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition: all 300ms;
    }

    .isOpen {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
    }

    .light-container {
        padding-left: 75px;
        padding-right: 75px;
        margin: auto;
    }

    .light-header {
        height: 40px;
        width: 100%;
        padding: 0 20px;
        background: #333;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    
    .light-header span {
        cursor: pointer;
    }

    .light-header span:hover .light-header span svg {
        fill: #ccc;
    }

    .light-body {
        width: 60%;
        margin: auto;
        padding-top: 2rem;
        
    }

    .btn {
        cursor: pointer;
        top: 50%;
    }

    .prev-btn {
        position: absolute;
        left: 0;
        
    }

    .next-btn {
        position: absolute;
        right: 0;
    }

    .light-body img {
        width:100%;
        -webkit-border-radius: 8px;
        border-radius: 8px;
        /* display: block; */
    }

    .light-footer {
        width: 60%;
        margin: auto;
    }

    .thumb-box {
        display: flex;
        width: 60%;
    }

    .thumb-box .thumb-item {
        width: 20%;
        list-style-type: none;
        margin-right: 1rem;
        transition: all 400ms;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
    }

    .thumb-box .thumb-item img {
        width: 100%;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        cursor: pointer;
        
        display: block;
    }
    .active {
        border: 1px solid #ddd;
    }

    .thumb-box .thumb-item img:hover {
        opacity: .8;
    }

</style>