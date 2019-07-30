<template>
   <div id="theme">
       <el-row type="flex" justify="space-around">
         <el-col :span="5">
           <el-card class="box-card" @click.native="switchTheme('white')">
             <div class="white" >

             </div>
              White
            </el-card>
         </el-col>
         <el-col :span="5">
           <el-card class="box-card" @click.native="switchTheme('black')">
              <div class="black" >

              </div>
               Black
            </el-card>
         </el-col>
         <el-col :span="5">
           <el-card class="box-card">
              <div class="blue">

              </div>
               Blue
            </el-card>
         </el-col>
         <el-col :span="5">
           <el-card class="box-card">
              <div class="red">

              </div>
              Red
            </el-card>
         </el-col>
       </el-row>
   </div>
</template>

<script>
  export default {
      methods:{
          switchTheme(theme){
            localStorage.theme = theme
            let app = document.querySelector('#app')
            app.setAttribute('data-theme',theme)
          }
      }
  }
</script>

<style scoped>
  .box-card
  {
    text-align: center;
    position: relative;
  }
  .box-card::after{
    content: "Theme";
    position: absolute;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    top: 0;
    background: #ecf5ff;
  }
  .white
  {
    width: 100%;
    height: 150px;
    background: white;
    border: 1px solid #ccc;
    margin-bottom: 20px;
  }
  .blue
  {
    width: 100%;
    height: 150px;
    background: blue;
    margin-bottom: 20px;
  }
  .red
  {
    width: 100%;
    height: 150px;
    background: red;
    margin-bottom: 20px;
  }
  .black
  {
    width: 100%;
    height: 150px;
    background: black;
    margin-bottom: 20px;
  }
  .box-card:hover
  {
    cursor: pointer;
  }
  .box-card:hover::after
  {
    display: flex;
  }

</style>
