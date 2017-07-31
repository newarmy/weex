<template>
    
    <div class="content">
		<text class="header">{{header}}</text>
        <div class="form">
            <div class="item">
                <text class="label">名称：</text>
                <input class="input" type="text" placeholder="请输入名称" v-model="name"/>
            </div>
            <div class="item">
                <text class="label">数量：</text>
                <input class="input" type="text" placeholder="请输入数量" v-model="num"/>
            </div>
            <div class="item-submit"><div class="login"><text @click="sumbit" class="login-text">确定</text></div></div>
        </div>
    </div>
</template>

<style>
    .header{height:80px; line-height: 80px; text-align: center; font-size: 40px; margin-bottom:20px;}
    .content{justify-content:center; align-items: center;}
    .form{flex-direction: column;}
    .item{flex-direction: row; justify-content:flex-start;height:100px; padding:10px 0;}
    .label{width: 120px; height:80px; line-height:80px; color:#333; font-size:36px; text-align: left;}
    .input{width:340px; font-size:36px; padding-left:20px;height:80px;line-height:80px;border:1px solid #ddd; border-radius:6px;color:#333;placeholder-color:#777;}
    .item-submit{height:100px;padding:10px 0;justify-content: center;}
    .login{width:200px; background-color:#0088fb;height:80px; justify-content: center; align-items: center;}
    .login-text{color:#fff; font-size:36px;}
</style>

<script>
import * as types from '../vuex/Mutation-Type';
var modal = weex.requireModule('modal');
  export default {
      data() {
        return {
            header: '',
			name: '',
			num: '',
			isAdd: true,
			id: 0
        };
      },
	  computed: {
		length: function() {
			return this.$store.getters.length;
		}
	  },
      created: function() {
			var path = this.$route.path;
			if(path.indexOf('add') > -1) {
				this.header = "添加";
				this.isAdd = true;
			} else {
				this.header = "修改";
				this.isAdd = false;
				console.log( this.$route.params.id);
				this.get(this.$route.params.id);
			} 

      },
	  methods:{
		get: function(id) {
			var k =this;
			k.$store.state.arr.forEach(function (e) {
				if(e.id === Number(id)) {
				    console.log(id);
					k.name = e.name;
					k.num = e.num;
					k.id = e.id;
				}
			});
		},
		sumbit: function() {
			var k = this;
			let obj = {};
			
			obj.name = k.name;
			obj.num = k.num;
			if(k.isAdd) {
				obj.id = k.length;
				this.$store.commit(types.ADD_DATA, obj);
			} else {
				obj.id = k.id;
				this.$store.commit(types.UPDATE_DATA, obj);
			}
			model.toast({
                message: this.header+'成功',
                duration: 1
            });
			
		}
	  }
  }
</script>