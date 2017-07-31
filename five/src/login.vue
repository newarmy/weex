

<template>
    <div class="content" :style="{height: height}">
        <div class="form">
            <div class="item1">
                <text class="label">姓名：</text>
                <input class="input" type="text" placeholder="请输入姓名1" return-key-type="next"  value="" @input="oninput1" />
            </div>
            <div class="item1">
                <text class="label">密码：</text>
                <input class="input" type="text" placeholder="请输入密码2" return-key-type="next"  value="" @input="oninput2" />
            </div>
            <div class="item-submit"><div @click="submit" class="login"><text class="login-text">登录</text></div></div>
        </div>
    </div>
</template>

<style>
    .content{justify-content:center; align-items: center;}
    .form{flex-direction: column;}
    .item1{flex-direction: row; justify-content:flex-start;height:100px; padding:10px 0;}
    .label{width: 120px; height:80px; line-height:80px; color:#333; font-size:36px; text-align: left;}
    .input{width:340px; font-size:36px; padding-left:20px;height:80px;line-height:80px;border:1px solid #ddd; border-radius:6px;color:#333;placeholder-color:#777;}
    .item-submit{height:100px;padding:10px 0;justify-content: center;}
    .login{width:200px; background-color:#0088fb;height:80px; justify-content: center; align-items: center;}
    .login-text{color:#fff; font-size:36px;}
</style>

<script>
    import api from './api';
	import * as types from './vuex/Mutation-Type';
    export default {
        data() {
            return {
                name: null,
				pwd: null,
				height: 0
            }
        },
		computed: {
			isLogin: function() {
				return this.$store.state.isLogin
			}
		},
        methods: {
		    oninput1: function (event) {
				this.name = event.value;
				console.log('oninput', event.value);
			  },
			  oninput2: function (event) {
				this.pwd = event.value;
				console.log('oninput', event.value);
			  },
			submit: function(e) {
				e.preventDefault();
				var k = this;
				if(!this.name || !this.pwd) {
					alert('请输入个人信息');
					return;
				} 
				api.login({name:this.name, pwd: this.pwd}, function(flag) {
					k.$store.commit(types.LOGIN, flag);
					k.$router.push('/home/list');
				});
				
			}
		},
		mounted: function() {
            let platform = weex.config.env.platform;

            if(platform === 'Web') {
                this.height = window.innerHeight+'px';
            } else {
                this.height = weex.config.env.deviceHeight;
            }

        }
    }
</script>