<template>
  <nav class="sticky top-0 z-[100] bg-white/90 backdrop-blur-md shadow-sm">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <router-link to="/" class="group">
        <h1 class="text-2xl font-bold tracking-[0.2em] text-[#8c4322] transition-all group-hover:tracking-[0.3em]">
          非遗·岩彩
        </h1>
      </router-link>
      
      <ul class="hidden md:flex space-x-10 text-sm font-medium">
        <li v-for="item in menu" :key="item.path">
          <router-link 
            :to="item.path" 
            class="relative pb-1 transition-colors hover:text-[#8c4322]"
            :class="$route.path === item.path ? 'text-[#8c4322] font-bold' : 'text-gray-600'"
          >
            {{ item.name }}
            <span 
              v-if="$route.path === item.path"
              class="absolute bottom-0 left-0 w-full h-[2px] bg-[#8c4322] transform origin-left"
            ></span>
          </router-link>
        </li>
      </ul>

      <!-- 移动端菜单按钮 (可选，目前保持简单) -->
      <button class="md:hidden text-[#8c4322]">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
  </nav>
</template>

<script setup>
const menu = [
  { name: '首页', path: '/' },
  { name: '介绍', path: '/intro' },
  { name: '历史', path: '/history' },
  { name: '工艺', path: '/process' }
];
</script>
