<template>
  <footer class="bg-background/75 -mb-px border-t border-gray-200 backdrop-blur dark:border-gray-800">
    <UContainer>
      <div class="py-3">
        <UButton
          icon="i-mdi-github"
          variant="ghost"
          color="gray"
          size="lg"
          @click="navigateTo('https://github.com/brokuka', { external: true, open: { target: '_blank' } })"
          >@brokuka</UButton
        >
      </div>
    </UContainer>
  </footer>
</template>
