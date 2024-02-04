<template>
  <div class="py-3">
    <UButton
      icon="i-mdi-github"
      variant="ghost"
      color="gray"
      size="lg"
      @click="navigateTo('https://github.com/brokuka', { external: true, open: { target: '_blank' } })"
    >
      @brokuka
    </UButton>
  </div>
</template>
