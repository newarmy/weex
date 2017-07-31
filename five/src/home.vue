<template>
	<div>
	  <div class="content">
		  <router-view></router-view>
	  </div>
	  <div class="nav">
		  <text @click="toList" class="item ">首页</text>
		  <text @click="toAdd" class="item">添加</text>
		  <text @click="toTJ" class="item last">统计</text>
	  </div>
  </div>
</template>

<style scoped>
  .nav{width:750px; flex-direction:row; justify-content: flex-start;}
    .item{width:250px; height:80px; line-height: 80px; background-color:#0088fb;text-align: center;border-right:1px solid #fff;font-size:36px; color:#fff;}
    .last{border-right:1px solid #0088fb;}
    .cur{background-color: blue;}
</style>

<script>
  export default {
      methods:  {
			toList: function() {
				this.$router.push('/home/list');
			},
			toAdd: function() {
				this.$router.push('/home/add');
			},
			toTJ: function(){
				this.$router.push('/home/tj');
			}

      }
  }
</script>