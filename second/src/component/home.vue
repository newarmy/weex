<template>
    <div class="wapper">
        <image src="http://img.alicdn.com/tps/TB1zBLaPXXXXXXeXXXXXXXXXXXX-121-59.svg" style="width: 200px; height:150px;"></image>
        <div class="head">
            <text class="head-text">测试主页面</text>
        </div>
        <div class="sub">
            <text class="sub-text">总量为{{total}}</text>
        </div>

    </div>
</template>

<style>
    .wapper { align-content: center;}
    .head {margin-top:20px;align-content: center;}
    .head-text{color:#333; font-weight: bold; font-size:48px;}
    .sub{margin-top:20px; align-content:center;}
    .sub-text{color:red; font-size:30px;}
</style>

<script>
    export default {
        computed: {
            total(){
                return this.$store.getters.total;
            }
        }
    }
</script>