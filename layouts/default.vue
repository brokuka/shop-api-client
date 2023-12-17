<template>
  <Header />

  <Main>
    <UContainer class="pb-20 pt-6 md:py-10">
      <slot />
    </UContainer>
  </Main>

  <Footer />
  <MobileNavigation />
</template>
