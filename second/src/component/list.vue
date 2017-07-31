<template>
    <list>
        <div class="row" v-for="obj in list">
            <text class="col">{{obj.id}}</text>
            <text class="col">{{obj.name}}</text>
            <text class="col">{{obj.num}}</text>
        </div>
    </list>
</template>

<style>
    .row{display:flex;border-bottom-color: #ccc; border-bottom-style: solid; border-bottom-width: 1px;}
    .col{flex:1; text-align: center; line-height:50px; color:#333; font-size:36px;}
</style>

<script>
    export default {
        computed:{
            list: function () {
                return this.$store.state.arr;
            }
        },
        created : function () {
            if(this.$store.state.arr.length === 0) {
                this.$store.dispatch('getAllData');
            }
        }
    }
</script>