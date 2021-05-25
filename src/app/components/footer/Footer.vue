<template>
  <footer class="md-layout md-elevation-24 md-alignment-center">
    <span class="md-body-2 text-gray">&#64; Artyom Danilin, 2021</span>
    <div class="md-layout md-alignment-center-right">
      <footer-external-link :href="linkedin" icon="link"/>
      <footer-external-link :href="github" icon="account_circle"/>
    </div>
  </footer>
</template>

<script>
import FooterExternalLink from '@/app/components/footer/FooterExternalLink.vue';

export default {
  name: 'Footer',
  components: { FooterExternalLink },
  data() {
    return {
      github: process.env.VUE_APP_FOO_GITHUB_LINK,
      linkedin: process.env.VUE_APP_FOO_LINKEDIN_LINK,
    };
  },
};
</script>

<style scoped lang="scss">
@import "~vue-material/dist/theme/engine.scss";
@import "/src/styles/theme";

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: md-theme(primary);
  padding: 0.5rem 1.5rem;
}
</style>
