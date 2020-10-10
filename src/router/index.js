import Vue from "vue"
import VueRouter from "vue-router"
// components collection
import Home from "@/views/Home"
import About from "@/views/About"
import Slider from "@/views/Slide"
import Table from "@/views/Table"
import SwiperSlider from "@/views/SwiperSlider"
import Filters from "@/views/Filters"

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
            path: "/about",
            name: "About",
            component: About
        },
        {
            path: "/slider",
            name: "Slider",
            component: Slider
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
        }
    ]
})

export default router