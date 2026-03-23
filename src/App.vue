<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
import "./style.scss";
</script>

<template>
  <Header></Header>
  <div class="container">
    <router-view />
  </div>
  <Footer></Footer>
</template>
