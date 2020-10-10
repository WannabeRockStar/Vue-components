<template>
    <div>
        <h1>About</h1>
        <div>{{ getNum }}</div>
        <button @click="decrement">Decrement</button>
    </div>
</template>

<script>
export default {
    computed: {
        getNum() {
            return this.$store.getters.getNum
        }
    },

    methods: {
        decrement() {
            this.$store.dispatch("decrement")
        }
    }
}
</script>