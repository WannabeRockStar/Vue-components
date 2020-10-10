<template>
    <div class='wrapper'>
        <form class="form">
            <div>
                <input type="text" v-model="search">
            </div>
            <div>
                <select v-model="price">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>
            </div>
        </form>

        <ul class="list">
            <li v-for="car in getCars" :key="car.id">
                <span>Brand: {{ car.brand }}</span><br>
                <span>Price: ${{ car.price }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: () => ({
        search: "",
        price: 0,
        cars: [
            {id: 1, brand: "BMW", price: 11},
            {id: 2, brand: "Mercedes", price: 16},
            {id: 3, brand: "Audi", price: 5},
            {id: 4, brand: "Honda", price: 50},
            {id: 5, brand: "Toyota", price: 26},
            {id: 6, brand: "Hyundai", price: 22},
            {id: 7, brand: "Porsche", price: 16},
            {id: 8, brand: "Ferrari", price: 6},
            {id: 9, brand: "Mclaren", price: 30},
            {id: 10, brand: "Peugeot", price: 20},
            {id: 11, brand: "Fiati", price: 10}
        ]
    }),

    computed: {
        getCars() {
            let carObject = [...this.cars]
            this.price = parseInt(this.price)
            
            if(this.search) {
                carObject = carObject.filter(car => car.brand.toLowerCase().indexOf(this.search.toLowerCase()) !== -1)
            }

            if(this.price > 0) {
                carObject = carObject.filter(car => car.price <= this.price)
            }
            return carObject
        }
    }
}
</script>

<style scoped>

    .form {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
    }
    .form div {
        margin-right: 1rem;
    }
    .list {
        list-style-type: none;
    }
    .list li {
        margin-bottom: 1rem;
    }

</style>