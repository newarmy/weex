<template>
    <div>
       <div class="header">
           <text class="td">id</text>
           <text class="td">名称</text>
           <text class="td">数量</text>
           <text class="td">操作</text>
       </div>
      <list class="list">
          <loading class="loading" :display="showLoading">
              <text class="indicator">Loading ...</text>
          </loading>
          <cell class="cell" v-for="item in arr" >
              <div class="li">
                 <text class="c">{{item.id}}</text>
                 <text class="c">{{item.name}}</text>
                 <text class="c">{{item.num}}</text>
                  <a class="c p"><text   class="del" @click="del(item.id)">删除</text> <text  @click="update(item.id)" class="update">更新</text></a>
              </div>
          </cell>
      </list>
    </div>
</template>

<style scoped>
 .header{  height:60px;width: 750px; background-color: #0088fb; flex-direction: row; justify-content: flex-start;}
    .td{width:187.5px; line-height:60px; text-align: center; overflow: hidden; color:#fff;
        font-weight:bold;}
    .cell{height:80px;}
    .list{width:750px; border-top-color: #0088fb; border-top-style: solid;border-top-width: 1px;}
    .li{flex-direction: row; height:80px;justify-content: flex-start;}
    .c{width:187.5px;height: 80px; text-align: center; line-height:80px; font-size:32px; color:#333; align-items: center;border-bottom-color: #0088fb; border-bottom-style: solid;border-bottom-width: 1px;

    }
    .del{margin-bottom: 10px; line-height:20px; font-size: 18px;}
    .update {line-height:20px;font-size:18px;}
</style>

<script>
import * as types from '../vuex/Mutation-Type';
  export default {
      computed: {
          arr: function() {
              return this.$store.state.arr
          },
          showLoading: function() {
            if (this.$store.state.arr.length === 0) {
                return 'show';
            } else {
                return 'hide';
            }
          }
      },
      created: function() {
          if(this.arr.length === 0) {
              this.$store.dispatch('getAllData');
          }
      },
	  methods: {
		del: function(id) {
		    id = Number(id);
			this.$store.commit(types.REMOVE_DATA, id);
		},
		update: function(id) {
            id = Number(id);
			this.$router.push('/home/update/'+id);
		}
	  }
  }
</script>