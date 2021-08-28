<template>
  <div class="address">
    <div class="loyalty_container">
      <h4 v-show="checkbox">Map</h4>
      <h4 v-show="!checkbox">List</h4>
      <div class="panel panel-default ">

        <div class="panel-body">
          <label class="switch">
            <input type="checkbox" @click="toggleCheckbox">
            <div class="slider round"></div>
          </label>
        </div>
      </div>
      <h3>Our addresses</h3>
      <div id="yandex-map" v-show="checkbox" style="width: 100%; height: 500px; padding: 2rem 0"></div>

      <div class="yandex_map_results" v-show="!checkbox">
        <ul>
          <li
              v-for="value in groups"
              :key="value">
            {{ value.one }}
          </li>
        </ul>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "storeAddress",
  data: () => ({
    checkbox: true,
    groups: [],
  }),

  mounted() {
    let scriptYandexMap = document.createElement('script');
    scriptYandexMap.setAttribute('src', 'https://api-maps.yandex.ru/2.1/?apikey=0c94976f-5b19-4562-adab-814369f61605&lang=ru_RU');
    document.head.appendChild(scriptYandexMap);
    scriptYandexMap.addEventListener("load", this.initializeYandexMap);


  },
  methods: {
    initializeYandexMap() {
      // eslint-disable-next-line no-undef
      ymaps.ready(() => {
        // eslint-disable-next-line no-undef
        this.map = new ymaps.Map("yandex-map", {
          center: [55.778922068976605, 37.71569549999996],
          zoom: 15,
          controls: ['fullscreenControl', 'rulerControl'],
          searchControlProvider: 'yandex#search'
        });
        // eslint-disable-next-line no-undef
        let searchControl = new ymaps.control.SearchControl({
          options: {
            provider: 'yandex#search'
          }
        });
        this.map.controls.add(searchControl);
        searchControl.search('Фрукты и овощи');

        this.getCoordData().then(() => this.setMarkers());
      });
    },

    toggleCheckbox() {
      this.checkbox = !this.checkbox
      this.$emit('setCheckboxVal', this.checkbox)
    },
    getCoordData() {
      return new Promise(r => setTimeout(() => {
        this.groups = [
          {
            one: "Москва, Бакунинская улица, 32/36к1", two: [55.77536806896744,37.68623949999987]
          },
          {
            one: "Москва,Плетешковский переулок, 3с2", two: [55.77161106895781,37.67528899999994]
          },
          {
            one: "Москва, Щербаковская улица, 35", two: [55.782870568956966,37.729619499999956]
          },
          {
            one: "Москва, улица Земляной Вал, 64с2 ", two: [55.74618756898188,37.654708499999956]
          },
        ];
        r();
      }, 1000));
    },
  }
}
</script>

<style scoped>

</style>