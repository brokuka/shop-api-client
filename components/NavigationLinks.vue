<script lang="ts" setup>
const LINKS = [
  {
    id: 1,
    label: 'Продукты',
    href: '/products',
  },
]
</script>

<template>
  <nav class="">
    <ul class="flex items-center space-x-2">
      <li v-for="link in LINKS" :key="link.id">
        <ULink class="hover:text-primary p-2 text-sm/6 font-semibold" :to="link.href" active-class="text-primary">
          {{
            link.label
          }}
        </ULink>
      </li>
    </ul>
  </nav>
</template>
