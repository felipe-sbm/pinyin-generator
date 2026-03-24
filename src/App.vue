<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
import "./style.scss";
</script>

<template>
  <div class="app-shell">
    <Header></Header>
    <main class="app-content">
      <div class="container">
        <router-view />
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>
