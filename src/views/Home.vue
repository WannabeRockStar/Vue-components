<template>
    <div>
        <h1>Home</h1>
        <div>{{ getNum }}</div>
        <button>Increment</button>

        <ul>
            <li 
                class="list-item"  
                :class="currentPage > 0 ? 'animate' : ''"
                v-for="(item, index) in getUsers" 
                :key="index">
                {{ item.title }}
            </li>
        </ul>
        
        <Pagination 
            :dataLength="dataLength" 
            :perPage="perPage"
            @set-current="setCurrent"
        />
        
    </div>
</template>

<script>
import Pagination from "@/components/Pagination"

export default {
    components: {
        Pagination
    },

    data() {
        return {
            
            currentPage: 1,
            perPage: 5
        }
    },

    computed: {
        getNum() {
            return this.$store.getters.getNum
        },

        getUsers() {
            return this.$store.getters.getUsers
                .slice((this.currentPage - 1) * this.perPage, ((this.currentPage - 1) * this.perPage) + this.perPage)
        },

        dataLength() {
            return this.$store.getters.getUsers.length
        }
    },

    methods: {

        setCurrent(current) {
            this.currentPage = current
        }
    },

    created() {
        this.$store.dispatch("getUsers")
    }
}
</script>

<style scoped>
    ul {
        list-style-type: none;
    }

    .list-item {
        padding: 1rem;
        opacity: 0;
        transition: all 300ms;
    }

    .animate {
        opacity: 1;
    }
</style>