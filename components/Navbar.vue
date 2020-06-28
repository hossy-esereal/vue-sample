<template>
    <nav class="gnav fixed">
        <ul class="gnav-list">
            <li v-for="(item, key) in columns" :key="key" class="gnav-item">
                <a class="gnav-link" :href="item.ref">{{ item.text }}</a>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'navbar',
    data() {
        return {
            columns: {
                home: {
                    ref: '#home-section',
                    text: 'HOME'
                },
                about: {
                    ref: '#about-section',
                    text: 'ABOUT'
                },
                skill: {
                    ref: '#skill-section',
                    text: 'SKILL'
                },
                contact: {
                    ref: '#contact-section',
                    text: 'CONTACT'
                }
            }
        }
    }
})
</script>
