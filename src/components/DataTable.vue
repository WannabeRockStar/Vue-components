<template>
    <div class="table-container">
        <!-- Top filters section search input and data per page -->
        <div class="top-filter">
            <input type="text" v-model="rowTitle" />
            <select id="tt" v-model="perPage">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>
        <!-- Start of Table -->
        <table>
            <thead>
                <tr>
                    <th v-for="(headItem, index) in tableHead" :key="index">
                        {{ headItem }}
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="row in getRows" :key="row.id">
                    <td>{{ row.id }}</td>
                    <td>{{ row.title }}</td>
                    <td>{{ row.price }}</td>
                    <td>{{ row.date }}</td>
                </tr>
            </tbody>
        </table>
        <!-- {{ getLength }} -->
        <!-- Start of bottom filter section -->
        <div class="bottom-filter">
            <ul class="pagination">
                <li class="pag-item" v-for="page in totalPages" :key="page" @click="getCurrent(page)">
                    <template v-if="totalPages > 1">
                        {{ page }}
                    </template>
                </li>
            </ul>

            <div class="show-string">
                {{ getString }}
            </div>
        </div>
    </div>
</template>


<script>

export default {
    props: {
        data: {
            type: Array,
            required: true
        },

        tableHead: {
            type: Array,
            required: true
        }
    },

    data() {
        return {
            rowTitle: "",
            perPage: 3,
            currentPage: 1
        }
    },

    computed: {
        getRows() {
            return this.data.filter(item => item.title.toLowerCase().indexOf(this.rowTitle.toLowerCase()) !== -1)
                .slice((this.currentPage - 1) * parseInt(this.perPage), ((this.currentPage - 1) * parseInt(this.perPage)) + parseInt(this.perPage))
        },

        totalPages() {
            return Math.ceil(this.getLength / this.perPage)
        },

        getString() {
            const endPoint = ((this.currentPage - 1) * parseInt(this.perPage)) + parseInt(this.perPage)
            return `Showing ${(this.currentPage - 1) * parseInt(this.perPage) + 1 } to ${ endPoint > this.getLength ? this.getLength : endPoint } of ${ this.getLength } entries`
        },

        getLength() {
            if(this.rowTitle !== "")
                return this.data.filter(item => item.title.toLowerCase().indexOf(this.rowTitle.toLowerCase()) !== -1).length
            return this.data.length
        }
    },

    methods: {
        getCurrent(value) {
            this.currentPage = value
        }
    }
}

</script>

<style scoped>

    .table-container {
        padding-top: 2rem;
    }

    .top-filter {
        display: flex;
        justify-content: space-between;
    }

    table {
        width: 100%;
        margin-top: 1rem;
        border: 1px solid #ccc;
        border-collapse: collapse;
    }

    table tr th {
        background: #f4f4f4;
    }
    

    table tr th, table tr td {
        text-align: left;
        border: 1px solid #ccc;
        padding: .5rem;
    }
    
    .bottom-filter {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
    }

    .pagination {
        display: flex;
        list-style-type: none;
    }

    .pagination .pag-item {
        margin-right: 1rem;
        cursor: pointer;
    }

</style>