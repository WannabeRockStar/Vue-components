<template>
    <div>
        <button @click="inc">{{this.num}}</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num: 0
        }
    },

    methods: {
        inc() {
            this.num++
        }
    }
}
</script>