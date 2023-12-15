<template>
  <div
    class="flex h-fit flex-col space-y-5 rounded-lg bg-white p-4 ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800 md:space-x-4"
  >
    <div class="flex space-x-2">
      <USkeleton class="h-20 w-full max-w-[80px] md:h-[126px] md:max-w-[126px]" />

      <div class="flex flex-1 flex-col space-y-2">
        <div
          class="flex w-full flex-col items-center space-y-1.5 sm:flex-row sm:justify-between sm:space-x-4 sm:space-y-0"
        >
          <USkeleton class="h-7 w-full max-w-[422px]" />
          <USkeleton class="hidden h-6 w-full max-w-[90px] sm:block" />
        </div>

        <div class="hidden space-y-2 sm:block">
          <USkeleton class="h-4 w-full" />
          <USkeleton class="h-4 w-full" />
          <USkeleton class="h-4 w-full" />
          <USkeleton class="h-4 w-1/2" />
        </div>
      </div>
    </div>

    <USkeleton class="h-6 w-full max-w-[90px] sm:hidden" />

    <div class="space-y-2 sm:hidden">
      <USkeleton class="h-4 w-full" />
      <USkeleton class="h-4 w-full" />
      <USkeleton class="h-4 w-full" />
      <USkeleton class="h-4 w-1/2" />
    </div>
  </div>
</template>
