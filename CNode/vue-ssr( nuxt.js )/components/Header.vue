<template>
  <header class='wrapHeader'>
    <div class='header'>
      <div class='search'>
        <a href="/">
          <img class='searchImg' src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="logo"/>
        </a>
				<el-input
					style="width:200px;margin-left:20px;"
					size='medium'
					placeholder="请输入搜索内容"
					suffix-icon="el-icon-search"
					@keyup.enter.native="search"
					v-model="searchValue">
				</el-input>
      </div>
      <div>
        <nuxt-link to='/'>首页</nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>

export default {
	data() {
		return {
			searchValue: ''
		}
	},
	methods: {
		search(e){
			const value = e.target.value;
			const searchBaiduUrl = 'https://www.baidu.com/#ie=utf8&wd=%s';
			const url = searchBaiduUrl.replace('%s', value);
			window.open(url, '_blank');
		}
	}
}
</script>


<style scoped>
.wrapHeader{
	position: fixed;
	top:0;
	width: 100%;
	height: 50px;
	background-color: #444;
	margin-bottom: 50px;
}
.header{
	display: flex;
	justify-content: space-around;
	align-items: center;
	align-content: center;
	width: 1000px;
	height: 100%;
	margin:0 auto;
}
.search{
	display: flex;
	flex: 1;
}
.searchImg{
	width:120px;
	height: 34px;
}
.search-input input{
	background: #888;
}
.search-input input:focus{
	background: #fff;
}
.header a{
	color:#ccc;
}


</style>
