<template>
  <div class="category">
    <van-search shape="round" placeholder="请输入搜索关键词" />
    <div class="category_box">
      <div class="box_left">
        <div
          class="box_left_item"
          v-for="(item, index) in lists"
          :key="index"
          :class="{ active: activeIndex === index }"
          @click="toggle(index, item.type)"
        >
          {{ item.typeDesc }}
        </div>
      </div>
      <div class="box_right">
        <div class="box_right_item">
          <product></product>
        </div>
        <div class="box_right_item">
          <product></product>
        </div>
        <div class="box_right_item">
          <product></product>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../components/Product";

export default {
  data() {
    return {
      activeIndex: 0,
      lists: [],
    };
  },
  components: {
    Product,
  },
  created() {
    this.toggleData()
  },
  methods: {
    // 获取类型
    toggleData() {
      this.axios({
        method: "GET",
        url: "/type",
      })
        .then((res) => {
          if (res.data.code === 400) {
            console.log(res);
            //构造人气Top类型
            res.data.result.unshift({ type: "isHot", typeDesc: "人气Top" });
            this.lists = res.data.result;
          }
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    toggle(index, type) {
      if (this.activeIndex == index) {
        return;
      }
      this.activeIndex = index;
      this.toggleType(type)
    },

    // 根据商品类型获取商品
    toggleType(type){
      console.log(type);
    }
  },
};
</script>

<style lang="less" scoped>
.van-search {
  position: static;
  top: 0;
}
.category_box {
  position: fixed;
  top: 54px;
  bottom: 50px;
  left: 0;
  right: 0;
  display: flex;
  .box_left {
    flex: 0 0 100px;
    height: 100%;
    overflow-y: auto;
    .box_left_item {
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 14px;
      &.active {
        color: #0c34ba;
        background-color: #ccc;
        font-weight: bold;
      }
    }
  }
  .box_right {
    flex: 1;
    height: 100%;
    .box_right_item {
      padding: 5px;
    }
  }
  .goods-card {
    margin: 0;
    background-color: white;
  }

  .delete-button {
    height: 100%;
  }
}
</style>
