<template>
  <el-header id="header">
     <div class="logo" @click="$root.goRouterPath('/')">
       <img v-lazy="img"></img>
       VueJs
     </div>
  </el-header>
</template>

<script>
export default {
   data(){
     return {
       img:require("@/assets/img/logo.png")
     }
   }
}
</script>

<style scoped>
  #app[data-theme="white"] #header
  {
    color:#41b883;
    background: #fff;
    box-shadow: -1px 1px 5px 1px #9a9797;
  }
  #app[data-theme="black"] #header
  {
    background: #272727;
    color:#fff;
  }
  #header{
    width: 100%;
    position: fixed;
    top:0;
    z-index: 10;
    display: flex;
    align-items: center;
    font-size: 25px;
    padding-left: 70px;
  }
   #header .logo
  {
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
 #header .logo img{
    height: 100%;
    /* filter: grayscale(50); */
    margin-right: 10px;
  }
</style>
