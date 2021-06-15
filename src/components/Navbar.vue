<template>
  <div>
  <div>
  </div>
    <van-tabbar route active-color="#34398b" inactive-color="#4f4b4c">
      <van-tabbar-item replace to="/index" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item replace icon="gift-o" to="/category">菜单</van-tabbar-item>
      <van-tabbar-item replace icon="friends-o" to="/shopcart">购物车</van-tabbar-item>
      <van-tabbar-item replace icon="setting-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    data() {
    return {
      active: 0,
    };
  },
  }
</script>

<style lang="less" scoped>

</style>