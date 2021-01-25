<template>
  <img
    :alt="alt"
    :srcset="srcset"
    :sizes="calcSizes"
  >
</template>

<script>
export default {
    name: 'ResponsiveImage',
    props: {
        alt: {
            type: String,
            default: 'an image'
        },
        sizes: {
            type: Array,
            default: () => [
                "(min-width: 1000px) 55vw",
                "(max-width: 999px) 96vw"
            ]
        },
        sources: {
            type: Object
        },
        width: {
            type: Number
        },
        height: {
            type: Number
        }
    },
    computed: {
        calcSizes(){
            return this.sizes.join(',');
        },
        srcset(){
            const photoSizes = {
                'medium': 300,
                'mediumLarge': 768,
                'large': 1024
            };
            const result = [];
            for(const size of Object.keys(photoSizes)){
                const url = this.sources[size].sourceUrl;
                result.push(`${url} ${photoSizes[size]}w`);
            }
            return result.join(',');
        }
    }

}
</script>

<style>
img {
    height: 100%;
}
</style>