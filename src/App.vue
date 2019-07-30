<template>
  <div id="app" :data-theme="theme">
    <router-view />
  </div>
</template>

<script>
  let theme = localStorage.theme || 'white'
export default {
  data() {
    return {
      theme
    }
  },
}
</script>

<style>
*
{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html,body
{
  height: 100%;
}
#app {
  height: 100%;
}

</style>
