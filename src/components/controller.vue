<script setup lang="ts">
const emits = defineEmits(["orderChange"]);
// 阶层数改变
function orderChange(event: any) {
  emits("orderChange", event);
}
</script>

<template>
  <div id="status">
    <div class="status-item">
      <label for="finish">状态: </label>
      <span id="finish"></span>
    </div>
    <div class="status-item">
      <label for="order-select">阶数: </label>
      <select id="order-select" @change="orderChange">
        <option value="2">2</option>
        <option value="3" selected>3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
    <!-- <div class="status-item">
      <button id="restore">还原</button>
    </div>
    <div class="status-item">
      <button id="disorder">打乱</button>
    </div> -->
    <div>
      <a href="https://github.com/pengfeiw/rubiks-cube">查看源码</a>
    </div>
  </div>
</template>

<style scoped>
#status {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100vw;
  font-size: 18px;
}

.status-item {
  margin-left: 20px;
  display: flex;
  align-items: center;
}

#order-select {
  outline: none;
}

#disorder {
  width: 50px;
  display: none;
}

#restore {
  width: 50px;
}
</style>
