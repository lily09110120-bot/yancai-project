<template>
  <footer class="bg-[#332c22] text-[#d4cbb3] py-20 text-center border-t border-white/5 mt-auto">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
        <div class="text-left max-w-sm">
          <h2 class="text-2xl font-bold tracking-[0.3em] mb-4 text-white/90">非遗传承 · 岩彩艺术</h2>
          <p class="text-sm opacity-50 leading-relaxed">
            致力于通过数字化手段保护与传承中国传统岩彩绘画艺术，让千年大地之色在现代焕发新生。
          </p>
        </div>
        
        <div class="flex gap-x-12 text-sm">
          <div class="flex flex-col gap-4 text-left">
            <h4 class="text-white font-bold mb-2">快速链接</h4>
            <router-link to="/intro" class="hover:text-white transition opacity-60">什么是岩彩</router-link>
            <router-link to="/history" class="hover:text-white transition opacity-60">历史脉络</router-link>
          </div>
          <div class="flex flex-col gap-4 text-left">
            <h4 class="text-white font-bold mb-2">关注我们</h4>
            <a href="#" class="hover:text-white transition opacity-60">微信公众号</a>
            <a href="#" class="hover:text-white transition opacity-60">官方微博</a>
            <a href="#" class="hover:text-white transition opacity-60">学术期刊</a>
          </div>
        </div>
      </div>

      <div class="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-xs opacity-40 italic">“取大地之色，赋万物之魂”</p>
        <div class="text-[10px] tracking-widest opacity-30 uppercase">
          © 2026 Yancai Cultural Heritage Project | Digital Conservation Program
        </div>
      </div>
    </div>
  </footer>
</template>
