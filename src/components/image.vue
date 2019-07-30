<template>
  <div id="container">
    <ul class="infinite-list" v-infinite-scroll="load">
      <li v-for="i in count" class="infinite-list-item">
        <div class="infinite-list-item-child" v-for="i in 5">
          <img v-lazy="img" alt="">
          <span class="title">THE ULTIMATE Zed Montage - Best Zed Plays 2019 ( League of Legends )</span>
          <span class="author">Genius</span>
          <span class="time">8298 次观看 · 5小时前</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
     return {
       count: 0,
       img:'/static/img/img.png'
     }
    },
    methods: {
     load () {
       this.count += 2
     }
    }
  }
</script>

<style scoped>
  li{
    list-style: none;
  }
  .infinite-list-item
  {
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
  }
  .infinite-list-item-child
  {
    width: 210px;
  }
  #app .infinite-list-item-child .title{
    width: 100%;
    height: 40px;
    display: -webkit-box;
    font-size: 14px;
    overflow: hidden;
    text-overflow:ellipsis;
    -webkit-line-clamp: 2;
    white-space:normal;
    margin:10px 0 5px 0;
  }
   #app[data-theme="white"] .infinite-list-item-child
   {
     color: #606060;
   }
   #app[data-theme="black"] .infinite-list-item-child
   {
     color: #b5b5b5;
   }
  #app .infinite-list-item-child .author
  {
    font-size: 14px;
    display: block;
    margin-bottom: 2px;
  }
  #app .infinite-list-item-child .time
  {
    font-size: 14px;
  }
</style>
