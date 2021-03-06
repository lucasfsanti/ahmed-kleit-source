<template>
  <div class="psa-wrapper" :style="{ color: fontColor }">
    <h1>Groupe PSA</h1>
    <div class="psa-container">
      <article>
        <h2>
          Groupe PSA, was a French multinational automotive manufacturing
          company.
        </h2>
        <h2>UX / UI Designer</h2>

        <p>April 2014 | Dez 2014</p>

        <p>
          Working at PSA Vélizy-Villacoublay as a UX/UI designer for the all car
          generation: Peugeot, Citroën and DS.
        </p>

        <p>
          Designing interfaces for the onboarding computers (HMI). Touch screen
          interface creation focused on the user experience improvement. Study
          and analysis of market trends and competitors.
        </p>
      </article>

      <div class="chips-container">
        <Chip>Automotive</Chip>
        <Chip>UX Design</Chip>
        <Chip>UI Design</Chip>
        <Chip>Human Machine Interaction</Chip>
      </div>
    </div>

    <div class="wrapper-carousel">
      <splide
        :options="splideOptions"
        class="carousel"
        @splide:active="showSubtitle"
      >
        <splide-slide>
          <img src="~/assets/images/image01.jpg" />
          <p v-if="carouselIndex == 0">Legenda 1</p>
        </splide-slide>
        <splide-slide>
          <img
            height="90%"
            src="https://media.giphy.com/media/PSKAppO2LH56w/giphy.gif"
          />
          <p v-if="carouselIndex == 1">Legenda 2</p>
        </splide-slide>
        <splide-slide>
          <img src="~/assets/images/image03.jpg" />
          <p v-if="carouselIndex == 2">Legenda 3</p>
        </splide-slide>
      </splide>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
export default Vue.extend({
  data() {
    return {
      carouselIndex: null,
      splideOptions: {
        type: 'loop',
        padding: {
          right: '5rem',
          left: '5rem',
        },
        gap: '1rem',
        height: '550px',
        width: '90%',
        autoWidth: true,
        focus: 'center',
        classes: {
          arrow: 'splide__arrow carousel-arrows',
          prev: 'splide__arrow--prev carousel-previous-arrow',
          next: 'splide__arrow--next carousel-next-arrow',
        },
      },
    }
  },

  computed: {
    ...mapState(['color', 'fontColor']),
  },

  created() {
    this.changeColor('#1E2337', '#FD4239')
  },

  methods: {
    ...mapMutations(['setColor', 'setFontColor']),

    changeColor(backgroundColor: string, fontColor: string) {
      this.setColor(backgroundColor)
      this.setFontColor(fontColor)
    },

    showSubtitle(splide: any) {
      this.carouselIndex = splide.index
    },
  },
})
</script>

<style scoped>
@media (max-width: 720px) {
  .psa-container {
    padding: 0 10px;
  }

  .psa-wrapper {
    display: grid;
    grid-template-areas:
      'title'
      'article'
      'media';
    gap: 1rem;
  }
}

@media (min-width: 720px) {
  .psa-wrapper {
    display: grid;
    grid-template-columns: 1fr fit-content(50%);
    grid-template-rows: 1fr auto;
    grid-template-areas:
      'title title'
      'article media';
    gap: 1rem;
  }
}

.psa-container {
  display: flex;
  flex-direction: column;
}

.psa-wrapper > h1 {
  font-size: 5rem;
  font-weight: bold;
  grid-area: title;
}

.psa-container > article {
  grid-area: article;
}

.psa-container > article > h2 {
  font-size: 2.188rem;
  font-weight: bold;
  margin-bottom: 1.25rem;
}

.psa-container > article > h2:nth-child(1) {
  margin-top: 1.25rem;
}

.psa-container > article > h2:nth-child(2) {
  font-weight: normal;
  margin-top: 1.875rem;
}

.psa-container > article > h3 {
  font-size: 1.563rem;
  font-weight: bold;
  margin-top: 2.5rem;
}

.psa-container p {
  font-size: 1.563rem;
  font-weight: normal;
  margin: 15px 0;
}

.psa-container p:nth-child(4) {
  margin-top: 40px;
}

.psa-container > article > section {
  display: flex;
  flex-direction: column;
  border: 2px solid #b24181;
  border-radius: 5px;
  min-height: auto;
  text-align: center;
  padding: 1.375rem 0;
  width: 100%;
}

.psa-container > article > section > p {
  font-weight: bold;
}

.psa-container > article > section > a {
  font-size: 1.125rem;
  text-decoration: underline;
}

.heart-icon {
  vertical-align: bottom;
}

.carousel {
  place-self: center;
  max-width: 100%;
}

.wrapper-carousel {
  grid-area: media;
  overflow: hidden;
  text-align: -webkit-center;
  max-width: 100%;
}

.chips-container {
  display: flex;
  flex-direction: row;
  margin-top: 3.125rem;
  flex-flow: wrap;
  grid-area: chips;
}
</style>
