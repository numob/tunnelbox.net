<script setup>
import DefaultTheme from 'vitepress/theme'
import NavCTA from './NavCTA.vue'
</script>

<template>
  <DefaultTheme.Layout>
    <!-- This slot sits NEXT TO social links -->
    <template #nav-bar-content-after>
      <NavCTA />
    </template>
  </DefaultTheme.Layout>
</template>
