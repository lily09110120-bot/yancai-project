<template>
  <div class="min-h-screen bg-[#f4f1ea] text-[#332c22] font-serif flex flex-col">
    <Navbar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    
    <!-- 回到顶部 -->
    <button 
      @click="scrollToTop" 
      class="fixed bottom-10 right-10 z-[100] w-12 h-12 bg-white/80 backdrop-blur-md border border-[#8c4322]/20 rounded-full flex items-center justify-center text-[#8c4322] shadow-xl hover:bg-[#8c4322] hover:text-white transition-all duration-500 group"
      :class="showBackTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'"
    >
      <svg class="w-6 h-6 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </button>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const showBackTop = ref(false)

const handleScroll = () => {
  showBackTop.value = window.scrollY > 500
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>
