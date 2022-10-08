<script setup lang="ts">
import Rubiks from "./rubiks/index";
import Controller from "./components/controller.vue";
import Container from "./components/container.vue";

const container = document.getElementById("container");
const orderChangeEle = document.getElementById(
  "order-select"
) as HTMLSelectElement;
const disorderEle = document.getElementById("disorder") as HTMLButtonElement;
const restore = document.getElementById("restore") as HTMLButtonElement;
console.log(container);
if (container) {
  const rubiks = new Rubiks(container);

  orderChangeEle.addEventListener("change", (event) => {
    const value = (event.target! as HTMLSelectElement).value;

    rubiks.setOrder(parseInt(value));
  });

  // disorderEle.addEventListener("click", () => {
  //     rubiks.disorder();
  // });

  // restore.addEventListener("click", () => {
  //     const ok = window.confirm("还原后，不可恢复哦！");

  //     if (ok) {
  //         rubiks.restore();
  //     }
  // });
}
</script>

<template>
  <!-- 控制器 -->
  <Controller />
  <!-- 实际内容 -->
  <Container />
</template>
