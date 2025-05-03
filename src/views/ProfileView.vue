<template>
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Sidebar Menu -->
      <div class="md:col-span-1">
        <ProfileMenu />
      </div>

      <!-- Main Content -->
      <div
        class="md:col-span-3 bg-white rounded-lg shadow-md p-6 min-h-[500px]"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>