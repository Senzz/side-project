<template>
  <div class="navigation">
    <nuxt-link to="/all" active-class='active'>全部</nuxt-link>
    <nuxt-link to="/good" active-class='active'>精华</nuxt-link>
    <nuxt-link to="/share" active-class='active'>分享</nuxt-link>
    <nuxt-link to="/ask" active-class='active'>问答</nuxt-link>
    <nuxt-link to="/job" active-class='active'>招聘</nuxt-link>
    <nuxt-link to="/dev" active-class='active'>客户端测试</nuxt-link>
  </div>
</template>

<style scoped>
.navigation{
  display: flex; 
  justify-content: center;
}
.navigation a{
  padding: 5px 10px;
  background-color: #fff;
  border-radius: 4px;
  text-decoration: none;
}
a.active {
  color: #fff;
  background: blue;
}
</style>

