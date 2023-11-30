<template>
  <div class="relative flex h-screen flex-col">
    <Header />

    <Main>
      <slot />
    </Main>

    <Footer />
    <MobileNavigation />
  </div>
</template>
