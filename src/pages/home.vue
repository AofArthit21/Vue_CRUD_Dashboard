<template>
  <div
    class="min-h-screen bg-gray-100 flex flex-col items-center justify-center"
  >
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">
        Welcome to the Home Page
      </h1>
      <p class="text-lg text-gray-600">
        This is your home page, styled with Tailwind CSS.
      </p>
      <div class="mt-6">
        <button
          class="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        >
          <router-link to="/"> Get Started</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
/* คุณสามารถเพิ่ม style เฉพาะส่วนเพิ่มเติมได้ที่นี่ */
</style>
