<template>
  <div id="app">
    <div class="field" :class="{ active: picked.length }" ref="multiSelect">
      <span
        class="item"
        v-for="(st, index) in picked"
        :key="index"
        @click="removeItem(st)"
      >
        <span class="select2-selection__choice__remove" role="presentation">×</span>
        {{ st }}
      </span>
      <input
        type="text"
        v-model="text"
        @click="handleDropdown"
        :class="{ 'input-active': picked.length }"
      />
    </div>
    <ul v-if="isFocused">
      <li 
        v-for="(item, index) in getStates" 
        :key="index" 
        @click.enter="setItem(item)" 
        :class="{'bg-grey': picked.includes(item), 'bg-blue': arrowIndex === index}">
          {{ item }}
      </li>
    </ul>

    <!-- {{ picked }} -->
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      text: "",
      items: ["Alaska", "Alabama", "Nevada", 'California', 'Michigan', 'Texas'],
      isFocused: false,
      picked: [],
      arrowIndex: 0,
      pickedText: ""
    };
  },

  computed: {
      getStates() {
          return this.items.filter(item => item.toLowerCase().indexOf(this.text.toLowerCase()) !== -1)
      }
  },

  methods: {
    handleDropdown() {
      this.isFocused = !this.isFocused;
    },
    setItem(value) {
      if (!this.picked.includes(value)) {
        this.picked.push(value);
      } else {
          this.removeItem(value)
      }
      this.isFocused = false
      this.text = ''
      this.arrowIndex = 0
    },
    removeItem(id) {
      this.picked = this.picked.filter(item => item !== id)
    },
    setArrowDown() {
        document.addEventListener("keydown", (e) => {
            if(e.keyCode === 40) {
                console.log('ARNOLD')
                if(this.arrowIndex === this.getStates.length - 1) {
                  this.arrowIndex = -1
                }
                this.arrowIndex++
                this.pickedText = this.getStates[this.arrowIndex]
            }
        })
    },

    setArrowUp() {
        document.addEventListener("keydown", (e) => {
            if(e.keyCode === 38) {
                console.log('ARNOLD')
                if(this.arrowIndex === 0) {
                  this.arrowIndex = this.getStates.length
                }
                this.arrowIndex--
                this.pickedText = this.getStates[this.arrowIndex]
            }
        })
    }
  },

  mounted() {
      document.addEventListener("click", (e) => {
          if(e.target && this.$refs.multiSelect && !this.$refs.multiSelect.contains(e.target)) {
              this.isFocused = false
              this.arrowIndex = 0
          }
      })

      document.addEventListener("keyup", (e) => {
        if(e.keyCode === 13) {
          this.setItem(this.pickedText)
        }
      })

      this.setArrowDown()
      this.setArrowUp()
      
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 300px;
  border: 1px solid #ccc;
}

ul li {
  cursor: pointer;
  padding: 8px;
  border-bottom: 1px solid #fff;
  font-size: 13px;
}

ul li:hover {
  background: #506ee4;
  color: #fff;
}

.field {
  /* background: red; */
  width: 300px;
  
}

.bg-grey {
    background: #ddd;
    color: #333;
}

.bg-blue {
  background: #506ee4;
  color: #fff;
}

.field input {
    width: 100%;
    height: 40px;
    outline: none;
    border: 1px solid #aaa;
    border-radius: 4px;
}

.active {
  height: auto;
  border: 1px solid #ccc;
  width: 300px;
  border-radius: 4px;
}

.input-active {
  width: 60px !important;
  height: 100%;
  height: 38px!important;
  border: none!important;
  outline: none;
  margin-left: 4px;
}

span.item {
  line-height: 40px;
  background: #9ba7ca;
  margin: 0 2px;
  padding: 3px;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 13px;
}

</style>
