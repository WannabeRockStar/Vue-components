<template>
    <ul>
        <li class="pagination-switch" @click="prevPage" v-if="currentPage !== 1">Prev</li>
        <li class="pagination-button" @click="setCurrent(1)" v-if="rangeStart !== 1">1</li>
        <span class="dots" v-if="rangeStart !== 1">...</span>
        <li class="pagination-button" 
            :class="{active: page === currentPage}"
            v-for="page in pages" 
            :key="page" 
            @click="setCurrent(page)">
            {{ page }}
        </li>
        <span class="dots" v-if="currentPage < (totalPages - 2)">...</span>
        <li 
            class="pagination-button" 
            v-if="currentPage < (totalPages - 2)" 
            @click="setCurrent(totalPages)">
            {{ totalPages }}
        </li>

        <li class="pagination-switch" v-if="currentPage < totalPages" @click="nextPage">Next</li>
    </ul>
</template>

<script>
export default {
    props: {
        dataLength: {
            type: Number
        },

        // currentPage: {
        //     type: Number
        // },

        pageRange: {
            type: Number,
            default: 2
        },

        perPage: {
            type: Number
        }
    },

    data() {
        return {
            currentPage: 1
        }
    },

    computed: {

        pages: function() {
            let pages = []

            for(var i = this.rangeStart; i <= this.rangeEnd; i++) 
                pages.push(i)

            return pages
        },

        rangeStart: function() {
            let start = this.currentPage - this.pageRange

            return (start > 0) ? start : 1
        },

        rangeEnd: function() {
            let end = this.currentPage + this.pageRange

            return (end < this.totalPages) ? end : this.totalPages
        },

        totalPages() {
            return Math.ceil(this.dataLength / this.perPage)
        }
    },

    methods: {
        toParent() {
            this.$emit('set-current', this.currentPage)
        },

        setCurrent(current) {
            this.currentPage = current
            this.toParent()
        },

        prevPage() {
            this.currentPage--
            this.toParent()
        },

        nextPage() {
            this.currentPage++
            this.toParent()
        }
    }
}
</script>

<style scoped>
    
    ul .pagination-button, 
    ul .pagination-switch {
        display: inline-block;
        border: 1px solid #ccc;
        cursor: pointer;
        width: 36px;
        height: 28px;
        text-align: center;
        line-height: 28px;
        
    }

    ul .pagination-switch {
        width: auto;
        /* height: auto; */
        padding: 0 .5rem;
    }

    ul .pagination-button:hover, 
    ul .pagination-switch:hover {
        background: #333;
        color: #fff;
    }

    ul .pagination-button::selection, 
    .dots::selection,
    ul .pagination-switch::selection {
        background: transparent
    }

   .active {
        background: #333;
        color: #fff;
    }

    .dots {
        padding: 0 5px;
        font-weight: 700;
    }
</style>