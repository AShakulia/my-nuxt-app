<template>
  <header class="flex items-center justify-between p-4 bg-white shadow-md">
    <!-- Логотип -->
    <div class="logo">
      <h1>LOGO</h1>
    </div>

    <!-- Иконка гамбургер для мобильной версии -->
    <button class="block lg:hidden" @click="toggleMenu">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>

    <!-- Навигация с использованием Transition -->
    <transition 
      name="fade" 
      @before-enter="beforeEnter" 
      @enter="enter" 
      @leave="leave"
    >
      <nav v-if="isOpen" 
        class="fixed top-0 left-0 w-full h-full bg-white lg:bg-transparent lg:static lg:block lg:w-auto">
        
        <!-- Кнопка "Закрыть" для мобильной версии -->
        <button class="absolute top-4 right-4 lg:hidden" @click="closeMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <ul class="flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:space-x-6 text-center lg:text-left lg:p-0 p-8">
          <li>
            <a href="#about" class="text-gray-600 hover:text-blue-600">About</a>
          </li>
          <li>
            <a href="#price" class="text-gray-600 hover:text-blue-600">Price</a>
          </li>
          <li>
            <a href="#companies" class="text-gray-600 hover:text-blue-600">Companies</a>
          </li>
          <li>
            <a href="#contacts" class="text-gray-600 hover:text-blue-600">Contacts</a>
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};

const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.style.visibility = 'visible';
};

const enter = (el, done) => {
  el.offsetHeight; // триггер рендеринга
  el.style.transition = 'opacity 5s ease-in-out';
  el.style.opacity = 1;
  done();
};

const leave = (el, done) => {
  el.style.transition = 'opacity 5s ease-in-out';
  el.style.opacity = 0;
  el.addEventListener('transitionend', done);
};
</script>

<style scoped>
/* Анимация fade */
.fade-enter-active, .fade-leave-active {
  transition: opacity 5s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  visibility: hidden;
}
</style>






