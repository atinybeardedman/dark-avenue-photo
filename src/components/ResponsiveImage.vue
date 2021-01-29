<template>
  <v-lazy-image
    @contextmenu.native="prevent($event)"
    :alt="alt"
    :srcset="srcset"
    :sizes="calcSizes"
    :src="sources.mediumLarge.sourceUrl"
    :draggable="false"
  />
</template>

<script>
import VLazyImage from "v-lazy-image";
export default {
  components: {
    VLazyImage,
  },
  name: "ResponsiveImage",
  props: {
    alt: {
      type: String,
      default: "an image",
    },
    sizes: {
      type: Array,
      default: () => ["(min-width: 1000px) 50vw", "(max-width: 999px) 90vw"],
    },
    sources: {
      type: Object,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
  },
  computed: {
    calcSizes() {
      return this.sizes.join(",");
    },
    srcset() {
      const photoSizes = {
        medium: 300,
        mediumLarge: 768,
        large: 1024,
      };
      const result = [];
      for (const size of Object.keys(photoSizes)) {
        const url = this.sources[size].sourceUrl;
        result.push(`${url} ${photoSizes[size]}w`);
      }
      return result.join(",");
    },
  },
  methods: {
      prevent(e){
          e.preventDefault();
      }
  }
};
</script>

<style scoped>
.v-lazy-image {
  height: 100%;
  width:100%;
  max-height: 80vh;
  max-width: 50vw;
  object-fit: contain;
  opacity: 0;
  transform: translate3d(0, 50%, 0);
  transition: opacity 0.5s, transform 0.5s;
}
.v-lazy-image-loaded {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

@media screen and (max-width:600px) {
    .v-lazy-image {
        max-width: 90vw;
    }
}
</style>