<template>
    <header class="header">
        <h1 class="logo">
            <div class="logo-title">{{name}}</div>
            <div class="logo-subtitle">{{subtitle}}</div>
        </h1>
    </header>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'page-header',
    data() {
        return {
            name: 'Y.HOSHI',
            subtitle: 'PORTFOLIO'
        }
    }
})
</script>
