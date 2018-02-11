<template>
  <div class="list-item">
    <div class='img'>
      <img :src='data.author.avatar_url' :alt="data.author.loginname">
    </div>
    <div class="title">
      {{data.title}}
    </div>
    <div class='ext'>
      <div>
        {{data.reply_count}} / {{data.visit_count}}
      </div>
      <div class='time'>
        {{data.last_reply_at | fromNow }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  },
}
</script>

<style scoped>
  .list-item{
    display: flex;
    justify-content:space-between;
    align-content: center;
    align-items: center;
    margin: 20px 0;
    padding: 15px;
    background-color: #fff;
  }
  .list-item:last-child{
    margin: 0;
  }
  .img img{
    width: 50px;
  }
  .title{
    overflow: hidden;
    text-overflow: ellipsis;
    flex:1 ;
    font-size: 20px;
    white-space: nowrap;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .ext{
    width: 200px;
    text-align: right;
  }
</style>

