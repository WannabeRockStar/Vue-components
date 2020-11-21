<template>
    <div class="wrapper">
        <h2>Shit Happened</h2>
        <button class="" @click="isOpen = !isOpen">Button</button>

        <Gallery 
            :open="isOpen" 
            @close-modal="closeModal" 
            :data="data" 
        />
    </div>
</template>

<script>
import Gallery from '@/components/Gallery'

export default {
    components: {
        Gallery
    },

    data() {
        return {
            isOpen: false,
            data: [
                {id: 1, url: 'https://images.pexels.com/photos/783200/pexels-photo-783200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                {id: 2, url: 'https://images.pexels.com/photos/243125/pexels-photo-243125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                {id: 3, url: 'https://images.pexels.com/photos/1751556/pexels-photo-1751556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
                {id: 4, url: 'https://images.pexels.com/photos/1321915/pexels-photo-1321915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
            ]
        }
    },

    methods: {
        closeModal() {
            this.isOpen = !this.isOpen
        }
    }
}
</script>

<style scoped>



</style>