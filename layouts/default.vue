<template>
  <div class="relative flex min-h-screen flex-col">
    <Header />

    <Main>
      <slot />
    </Main>

    <Footer />
    <MobileNavigation />
  </div>
</template>
