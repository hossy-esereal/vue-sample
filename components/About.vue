<template>
    <section id="about-section" class="about-section section">
        <div class="inner">
            <div class="section-heading">
                <h2 class="heading-primary">{{section}}</h2>
            </div>
            <div class="section-lead">
                <p>{{description}}</p>
            </div>
            <div class="section-body about">
                <div class="about-item">
                    <div class="about-image-wrapper">
                        <img
                            class="about-image lazyload fadein"
                            src="../assets/image/kirby.jpg"
                            alt
                        />
                    </div>
                    <div class="about-body">
                        <div
                            v-for="(event, year) in contents"
                            :key="year"
                            class="about-body-content"
                        >
                            <dl class="year">{{ year }}</dl>
                            <dd class="description">{{ event }}</dd>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'about',
    data() {
        return {
            section: 'ABOUT',
            description: 'ぼくはキメ顔でそう言った',
            contents: {
                1991: '栃木にて生まれる',
                1995: '東京に移住',
                1999: '初めて犬を飼う',
                2002: '妹ができる',
                2010: '大学にて心理学を学ぶ',
                2013: '愛犬が天に召される、病む',
                2015: '社会人として転生する'
            }
        }
    }
})
</script>
