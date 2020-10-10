<template>
    <div class="wrapper">
        <h1>Home</h1>

        <transition name="fade" mode="out-in">
            <ul class="list">
                <li 
                    class="list-item"  
                    :class="currentPage > 0 ? 'animate' : ''"
                    v-for="(item, index) in getUsers" 
                    :key="index">
                    {{ item.title }}
                </li>
            </ul>
        </transition>
        
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

    watch: {
        
    },

    created() {
        this.$store.dispatch('getUsers')
    }
}
</script>

<style scoped>
    .list {
        list-style-type: none;
        transition: all 400ms;
        opacity: 1;
    }

    .list.active {
        opacity: 0;
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