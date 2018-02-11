<template>
  <div class='content-list'>
    <list-item 
      v-for="item in $store.state.articleList" 
      :key='item.id' 
      :data='item' />
  </div>
</template>

<script>
import ListItem from '~/components/ListItem'
export default {
  components: {
    ListItem
  },
  async fetch({ store, params }) {
    await store.dispatch('FETCH_ARTICLE_LIST', {
      type: params.tab
    })
    .then(() => {
      console.log('finish')
      console.log(store.state)
    })
  },
}
</script>
