<template>
  <footer class="md-layout md-elevation-24 md-alignment-center">
    <span class="md-body-2 text-gray">&#64; Artyom Danilin, 2021</span>
    <div class="md-layout md-alignment-center-right">
      <footer-external-link :href="github"
                            icon-name="github"
                            :size="20"/>

      <footer-external-link :href="linkedin"
                            icon-name="linkedIn"
                            :size="18"/>
    </div>
  </footer>
</template>

<script>
import FooterExternalLink from '@/app/components/footer/FooterExternalLink.vue';

export default {
  name: 'BottomBar',
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
  background-color: md-theme(primary);
  padding: 0.75rem 1.5rem;
}
</style>
