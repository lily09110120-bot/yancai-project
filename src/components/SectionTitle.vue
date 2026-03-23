<template>
  <div class="relative mb-12 text-center">
    <div class="absolute top-1/2 left-0 w-full h-[1px] bg-[#8c4322]/20 -z-0"></div>
    <h3 class="text-3xl font-bold inline-block relative z-10 px-8 bg-[#f4f1ea]">
      <slot></slot>
    </h3>
  </div>
</template>

<style scoped>
/* 确保标题背景色与页面背景色一致，以产生“切断”线条的效果 */
h3 {
  background-color: inherit;
}
</style>
