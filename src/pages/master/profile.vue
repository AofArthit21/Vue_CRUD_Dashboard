<template>
  <div
    class="min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center"
  >
    <div class="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
      <div class="text-center">
        <!-- Profile Picture -->
        <div class="mx-auto w-80 h-80">
          <img
            src="/public/profile.jpg"
            alt="Profile"
            class="rounded-full border-4 border-blue-500 shadow-md object-cover w-full h-full"
          />
        </div>
        <!-- Name and Title -->
        <h1 class="text-2xl font-bold text-gray-800 mb-1">Arthit Naktham</h1>
        <p class="text-gray-600 mb-4">Frontend Developer</p>
        <!-- Bio -->
        <p class="text-sm text-gray-600 leading-relaxed">
          Passionate about building modern web applications with Vue.js and
          Tailwind CSS. Always learning and exploring new technologies.
        </p>
        <!-- Buttons -->
        <div class="mt-6 flex justify-center gap-4">
          <router-link
            to="/"
            class="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
          >
            Home
          </router-link>
          <a
            class="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
            href="https://portfolio-arthit-naktham.vercel.app/"
            >Portfolio</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style scoped></style>
