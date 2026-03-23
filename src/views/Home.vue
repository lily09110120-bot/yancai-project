<template>
  <div class="page-home overflow-hidden">
    <!-- 1. 轮播图 (Carousel) -->
    <section class="relative h-[90vh]">
      <swiper
        :modules="[SwiperAutoplay, SwiperEffectFade, SwiperPagination]"
        :effect="'fade'"
        :loop="true"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        class="h-full w-full"
      >
        <swiper-slide v-for="slide in homeData.carousel" :key="slide.id">
          <div class="relative h-full w-full overflow-hidden">
            <!-- 背景层 (视差效果) -->
            <div 
              class="absolute inset-0 bg-cover bg-center scale-110 transition-transform duration-[5000ms]"
              :style="{ backgroundImage: `url(${slide.image})` }"
            ></div>
            <div class="absolute inset-0 bg-black/20"></div>
            
            <!-- 内容层 (竖排排版) -->
            <div class="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center justify-between">
              <div class="text-white space-y-8 max-w-2xl">
                <div class="flex gap-4 mb-4">
                  <span v-for="tag in slide.tags" :key="tag" class="px-3 py-1 bg-black/30 border border-white/20 rounded-full text-xs tracking-widest uppercase">{{ tag }}</span>
                </div>
                <h2 class="text-6xl md:text-9xl font-bold tracking-[0.4em] animate-fade-in-up drop-shadow-[0_8px_24px_rgba(0,0,0,0.9)] whitespace-nowrap">{{ slide.title }}</h2>
                <p class="text-xl md:text-3xl font-light tracking-[0.3em] opacity-100 border-l-4 border-[#8c4322] pl-8 drop-shadow-xl">{{ slide.subtitle }}</p>
                <button class="btn-primary mt-12">
                  开启艺术之旅
                </button>
              </div>
              
              <!-- 竖排文字 (中式美学) -->
              <div class="hidden md:flex flex-col gap-12 text-white/40 font-serif text-3xl tracking-[1em] select-none writing-vertical">
                <span>取大地之色</span>
                <span class="ml-12">赋万物之魂</span>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </section>

    <!-- 2. 宏观印象 (Keywords) -->
    <section class="py-32 bg-[#f4f1ea] relative overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full fill-[#8c4322]">
          <path d="M44.7,-76.4C58.1,-69.2,69.5,-57.4,78.2,-43.8C86.9,-30.2,93,-15.1,91.8,-0.7C90.5,13.7,82,27.3,72.1,39.2C62.1,51.1,50.7,61.2,37.8,69.1C24.8,77,10.4,82.6,-4,89.5C-18.4,96.4,-36.8,104.5,-51.1,99.5C-65.5,94.5,-75.7,76.4,-82.7,59.3C-89.7,42.2,-93.4,26.1,-91.9,10.9C-90.4,-4.3,-83.7,-18.6,-75.6,-32.1C-67.5,-45.6,-57.9,-58.3,-45.3,-66.2C-32.6,-74.1,-16.3,-77.3,0.3,-77.8C16.9,-78.3,31.3,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="text-center mb-24">
          <h3 class="text-4xl font-bold tracking-[0.2em] text-[#332c22] mb-6">岩彩宏观印象</h3>
          <p class="text-gray-500 tracking-widest uppercase text-sm">The Macro Impression of Yancai Art</p>
        </div>

        <div class="grid md:grid-cols-3 gap-16">
          <div v-for="keyword in homeData.keywords" :key="keyword.name" class="group p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-transparent hover:border-[#8c4322]/20 hover:bg-white transition-all duration-500 hover:shadow-xl">
            <div class="text-6xl font-serif text-[#8c4322]/10 mb-6 group-hover:text-[#8c4322]/20 transition-colors">{{ keyword.name }}</div>
            <h4 class="text-2xl font-bold mb-4 text-[#332c22]">{{ keyword.name }}</h4>
            <p class="text-gray-600 leading-relaxed">{{ keyword.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. 最新动态 (News) -->
    <section class="py-32 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex justify-between items-end mb-16">
          <div>
            <h3 class="text-4xl font-bold tracking-[0.2em] text-[#332c22] mb-4">最新动态</h3>
            <p class="text-[#8c4322] tracking-widest text-sm uppercase font-bold">Latest Dynamics</p>
          </div>
          <button class="text-sm font-bold border-b-2 border-[#8c4322] pb-1 hover:opacity-70 transition">查看全部</button>
        </div>

        <div class="grid md:grid-cols-3 gap-10">
          <div v-for="item in homeData.news" :key="item.title" class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-xl mb-6 aspect-[16/10]">
              <img :src="item.image" :alt="item.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
              <div class="absolute top-4 left-4 px-3 py-1 bg-[#8c4322] text-white text-[10px] tracking-widest uppercase rounded shadow-lg">{{ item.category }}</div>
            </div>
            <div class="text-xs text-[#8c4322] font-bold mb-2">{{ item.date }}</div>
            <h4 class="text-xl font-bold text-[#332c22] leading-snug group-hover:text-[#8c4322] transition-colors mb-4 line-clamp-2">{{ item.title }}</h4>
            <div class="w-8 h-[2px] bg-gray-200 group-hover:w-full transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay as SwiperAutoplay, EffectFade as SwiperEffectFade, Pagination as SwiperPagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { homeData } from '../assets/data/homeData.js'
</script>

<style scoped>
.writing-vertical {
  writing-mode: vertical-rl;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 1.5s ease-out forwards;
}

.page-home :deep(.swiper-pagination-bullet) {
  background: white;
  opacity: 0.5;
}

.page-home :deep(.swiper-pagination-bullet-active) {
  background: #8c4322;
  opacity: 1;
  width: 24px;
  border-radius: 4px;
  transition: all 0.3s;
}
</style>
