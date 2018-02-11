import Vue from 'vue'
import moment from 'moment'

const filters = {
  fromNow (time) {
    return moment(time).fromNow()
  }
}


// filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})