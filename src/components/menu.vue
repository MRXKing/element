<template>
  <div id="menu">
     <el-menu
    :router="true"
    :text-color="textColor"
    :active-text-color="activeTextColor"
    :default-active="$router.currentRoute.fullPath || ''"
    ><!--  -->
      <el-menu-item index="/timeline">
        <i class="el-icon-time"></i>
        <span slot="title">时间线</span>
      </el-menu-item>
      <el-menu-item index="/image">
        <i class="el-icon-picture-outline"></i>
        <span slot="title">无限滚动</span>
      </el-menu-item>
      <el-menu-item index="/theme" >
        <i class="el-icon-document"></i>
        <span slot="title">主题</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
 export default {
   data() {
     return {
       textColor:"#000",
       activeTextColor:'#000'
     }
   },
    mounted(){
       let app = document.querySelector('#app');
       let observer = new MutationObserver(mutations=> {
        mutations.forEach(mutation => {
           if(mutation.attributeName == "data-theme")
           {
             if(app.getAttribute('data-theme') == "black"){
               this.textColor = "#fff"
               this.activeTextColor="#fff"
             }else if(app.getAttribute('data-theme') == "white"){
               this.textColor = '#000'
               this.activeTextColor='#076d3f'
             }
           }
        });
      });

      observer.observe(app, {
        attributes: true //configure it to listen to attribute changes
      });
      if(app.getAttribute('data-theme') == "black"){
        this.textColor = "#fff"
        this.activeTextColor="#fff"
      }else if(app.getAttribute('data-theme') == "white"){
        this.textColor = '#000'
        this.activeTextColor='#076d3f'
      }
    },
    methods:{

    }
 }
</script>

<style scoped>
  #menu
  {
    height: 100%;
    width: 100%;
  }
  .el-menu
  {
     border: none;
  }
  #app[data-theme="black"] .el-menu,#app[data-theme="black"] #menu
  {
    background: #1c1c1c;
  }
  #app[data-theme="black"] .el-menu-item:focus, #app[data-theme="black"] .el-menu-item:hover
  {
    background: rgba(255,255,255,0.2);
  }
  #app[data-theme="white"] .el-menu-item:focus,#app[data-theme="white"] .el-menu-item:hover
  {
    background: #ccffe8;
  }
</style>
