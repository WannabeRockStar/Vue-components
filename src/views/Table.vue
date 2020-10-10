<template>
    <div class="app wrapper">
        <DataTable :data="data" :tableHead="tableHead" />
    </div>
</template>

<script>

import DataTable from "@/components/DataTable"

export default {

    components: {
        DataTable
    },

    data() {
        return {
            data: [
                {id: 1, title: "Thing", price: "$45", date: "14.06.2020"},
                {id: 2, title: "Product", price: "$80", date: "10.10.2020"},
                {id: 3, title: "Post", price: "$105", date: "28.09.2020"},
                {id: 4, title: "Data", price: "$115", date: "28.09.2020"},
                {id: 5, title: "Article", price: "$80", date: "28.09.2020"},
                {id: 6, title: "Section", price: "$200", date: "28.09.2020"},
                {id: 7, title: "Page", price: "$154", date: "28.09.2020"},
                {id: 8, title: "Server", price: "$251", date: "28.09.2020"}
            ],
            tableHead: ['id', 'title', 'price', 'date']
        }
    }, 

    methods: {
        
    }
}

</script>

<style scoped>
    
    
    
</style>