<template>
    <el-container direction="vertical">
      <vheader></vheader>
      <el-aside width="250px">
        <vmenu></vmenu>
      </el-aside>
      <el-main>
        <transition name="slide-fade" mode="out-in">
          <router-view/>
        </transition>
      </el-main>
      <el-backtop target=".el-main"></el-backtop>
    </el-container>
</template>

<script>
  import vheader from "@/components/header"
  import vmenu from "@/components/menu"
  export default {
    components:{
      vheader,
      vmenu
    }
  }
</script>

<style>
  .el-container
  {
    width: 100%;
    height: 100%;
  }
  #app[data-theme="white"] .el-aside
  {
    box-shadow: 2px 0 6px 0px #cacaca;
  }
  #app[data-theme="white"] .el-main
  {
    background: #fff;
  }
  #app[data-theme="black"] .el-main
  {
    background: #121212;
  }
  .el-aside
  {
    position: fixed;
    left: 0;
    top:60px;
    height: 100%;
    z-index: 5;
  }
  .el-main
  {
    margin-top: 60px;
    margin-left: 250px;
    z-index: 1;
  }
  .slide-fade-enter-active {
    transition: all .2s ease;
  }
  .slide-fade-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
