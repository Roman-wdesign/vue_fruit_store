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
      <div id="yandex-map" v-show="checkbox" style="width: 100%; height: 500px; padding: 2rem 0"
           :groups=groups

      ></div>

      <div class="yandex_map_results" v-show="!checkbox">
        <ul>
          <li style="margin: 0 0 5px 0"
              v-for="(value, index) in groups"
              :key="index">
            {{ value }}
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


  methods: {

    initializeYandexMap() {
      return new Promise(r =>
          // eslint-disable-next-line no-undef
          ymaps.ready(() => {
            // eslint-disable-next-line no-undef
            this.map = new ymaps.Map("yandex-map", {
              center: [55.778922068976605, 37.71569549999996],
              zoom: 10,
              controls: ['fullscreenControl', 'rulerControl'],
              searchControlProvider: 'yandex#search',
            });

            // eslint-disable-next-line no-undef
            let searchControl = new ymaps.control.SearchControl({
              options: {
                provider: 'yandex#search',
              }
            });

            this.map.controls.add(searchControl);
            searchControl.search('Фрукты и овощи');
            r();
          }));
    },


    toggleCheckbox() {
      this.checkbox = !this.checkbox
      this.$emit('setCheckboxVal', this.checkbox)
    },
    getCoordData() {
      return new Promise(r => setTimeout(() => {
        this.groups = [
           "Москва, Большой Палашёвский переулок, 1/14с1",
           "Москва,Плетешковский переулок, 3с2",
           "Москва, Щербаковская улица, 35",
           "Москва, улица Земляной Вал, 64с2",
        ];
        r();
      }, 1000));
    },
    setMarkers() {
      for (let i = 0; i < this.groups.length; i++) {
        // eslint-disable-next-line no-undef
        let PlacemarkOne = new ymaps.Placemark([55.76361956896707,37.59706399999992], {
              iconContent: '1',
              balloonContent: 'The Orange main store',
              hintContent: 'Москва, Большой Палашёвский переулок, 1/14с1'
            },

            {
              preset: 'twirl#orangeIcon'
            });
        // eslint-disable-next-line no-undef
        let PlacemarkTwo = new ymaps.Placemark([55.77198565059403,37.67582410069842], {
              iconContent: '2',
              balloonContent: 'The Orange store',
              hintContent: 'Москва,Плетешковский переулок, 3с2'
            },
            {
              preset: 'twirl#orangeIcon'
            });
        // eslint-disable-next-line no-undef
        let PlacemarkThree = new ymaps.Placemark([55.782870568956966, 37.729619499999956], {
              iconContent: '3',
              balloonContent: 'The Orange store',
              hintContent: 'Москва, Щербаковская улица, 35'
            },
            {
              preset: 'twirl#orangeIcon'
            });
        // eslint-disable-next-line no-undef
        let PlacemarkFour = new ymaps.Placemark([55.74618756898188, 37.654708499999956], {
              iconContent: '4',
              balloonContent: 'The Orange store',
              hintContent: 'Москва, улица Земляной Вал, 64с2'
            },
            {preset: 'twirl#orangeIcon'});
        this.map.geoObjects.add(PlacemarkOne);
        this.map.geoObjects.add(PlacemarkTwo);
        this.map.geoObjects.add(PlacemarkThree);
        this.map.geoObjects.add(PlacemarkFour);
      }
    },
  },
  mounted() {
    let scriptYandexMap = document.createElement('script');
    scriptYandexMap.setAttribute('src', 'https://api-maps.yandex.ru/2.1/?apikey=0c94976f-5b19-4562-adab-814369f61605&lang=ru_RU');
    document.head.appendChild(scriptYandexMap);

    scriptYandexMap.addEventListener('load', () => Promise.all([
      this.initializeYandexMap(),
      this.getCoordData(),

    ]).then(this.setMarkers));
  },
}
</script>

<style scoped>

</style>