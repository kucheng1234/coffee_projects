<template>
  <div class="product">
    <div class="pro_img"></div>
    <div class="pro_content">
      <div class="pro_name">666</div>
      <div class="pro_price">&yen;<span>666</span><span class="iconfont icon-jia"></span></div>
    </div>
  </div>
</template>

<script>
export default {
    
};
</script>

<style lang="less" scoped>
.product {
  display: flex;
  .pro_img {
    flex: 0 0 80px;
    height: 80px;
    background-color: red;
    border-radius: 5px;
  }
  .pro_content{
      flex: 1;
      padding-left: 5px;
      .pro_name{
          padding: 10px 0 25px 0;
          font-size: 16px;
      }
      .pro_price{
          width: 100%;
          color: #dc4c00;
          position: relative;
          span{
              font-size: 15px;
              margin-left: 2px;
          }
          .iconfont{
              float: right;
              margin-right: 10px;
              color: #383698;
              font-size: 18px;
          }
      }
  }
}
</style>