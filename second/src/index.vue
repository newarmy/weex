<template>
  <div class="wapper">
    <router-view class="content"></router-view>
    <div class="navi">
       <text class="item cur" @click="goHome">首页</text>
       <text class="item" @click="goList">列表</text>
      <text class="item" @click="goAbout">关于我们</text>
    </div>
  </div>
</template>

<style>
  .wapper{width:100%;}
  .content{margin-bottom:40px;}
  .navi{position:fixed;flex-direction: row;bottom:0;left:0; height:40px; background-color:yellow; display:flex;width:100%; }
  .item{flex:1; height:40px; line-height:40px; text-align:center; font-size:24px; color:#fff;background-color:yellow;}
  .cur{background-color:blue;}
</style>

<script>
 
  var modal = weex.requireModule('modal');
  export default {
    mounted: function () {
			 modal.toast({
				message: 'run to there',
				duration: 2
			 });
    },
	  methods: {
		goHome: function() {
		    this.$router.push('/home');
        },
        goList: function() {
		    this.$router.push('/list');
        },
        goAbout: function() {
		    this.$router.push('/about');
        }
	  }
  }
</script>