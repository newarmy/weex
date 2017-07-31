<template>
	<div>
		<text class="header">总的数据为</text>
		<div class="content">
			<text class="total">{{total}}</text>
		</div>
	</div>
</template>

<style>
    .header{height:80px; line-height: 80px; text-align: center; font-size: 40px; margin-bottom:20px;}
    .content{justify-content:center; align-items: center;}
    .total{font-size:60px; font-weight: bold; color:red;}
</style>

<script>
  export default {
      computed: {
		total: function() {
			return this.$store.getters.total;
		}
	  }
  }
</script>