<template>
  <div class="w-full">
    <UCard class="w-full md:sticky md:right-0 md:top-3 md:h-fit">
      <template #header>
        <USkeleton class="h-[27px] w-1/2" />
      </template>

      <div class="flex flex-col space-y-3">
        <USkeleton class="h-6 w-full" />
        <USkeleton class="h-6 w-full" />
      </div>

      <template #footer>
        <USkeleton class="h-11 w-full" />
      </template>
    </UCard>
  </div>
</template>
