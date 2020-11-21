import Vue from "vue"
import VueRouter from "vue-router"
// components collection
import Home from "@/views/Home"
import Table from "@/views/Table"
import SwiperSlider from "@/views/SwiperSlider"
import Filters from "@/views/Filters"
import MultiSelect from "@/views/MultiSelect"
import Images from "@/views/Images"

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/table",
            name: "Table",
            component: Table
        },
        {
            path: "/swiper",
            name: "SwiperSlider",
            component: SwiperSlider
        },
        {
            path: "/filters",
            name: "Filters",
            component: Filters
        },
        {
            path: "/multi",
            name: "Multi",
            component: MultiSelect
        },
        {
            path: "/Images",
            name: "Images",
            component: Images
        }
    ]
})

export default router