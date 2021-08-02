<template>
  <div class="header">
    <div class="header__one">
      <div class="header__one__picture">
        <v-img
            class="header__one__picture-img"
            src="fruit_logo.png"
        ></v-img>
      </div>
      <div class="header__one__list">
        <v-menu
            open-on-hover
            bottom
            offset-y
            close-delay="2"
            transition="scale-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="teal darken-4"
                dark
                v-bind="attrs"
                v-on="on"
            >
              <div class="header__two-icons"><i class="fas fa-list-ul"></i></div>
              All Categories
            </v-btn>
          </template>

          <v-list>
            <v-list-item
                v-for="(click, index) in clicks"
                :key="index"
                link
            >
              <v-list-item-title>{{ click.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

      </div>
      <div class="header__one__search">
        <v-toolbar
            dark
            color="teal darken-4"
        >

          <v-autocomplete
              v-model="select"
              :loading="loading"
              :items="items"
              :search-input.sync="search"
              cache-items
              class="mx-1"
              flat
              hide-no-data
              hide-details
              label="What fruit do you need?"
              solo-inverted

          ></v-autocomplete>
        </v-toolbar>
      </div>
    </div>


    <div class="header__two">
      <div class="header__two-icons">
        <i class="fas fa-sign-in-alt"></i>
        <i class="fas fa-shopping-bag"></i>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
  name: "storeHeader",
  data: () => ({
    loading: false,
    items: [],
    search: null,
    select: null,
    states: [
      'Alabama',
      'Alaska',
      'American Samoa',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'District of Columbia',
      'Federated States of Micronesia',
      'Florida',
      'Georgia',
      'Guam',
      'Hawaii',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Maine',
      'Marshall Islands',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
      'North Carolina',
      'North Dakota',
      'Northern Mariana Islands',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Palau',
      'Pennsylvania',
      'Puerto Rico',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'Utah',
      'Vermont',
      'Virgin Island',
      'Virginia',
      'Washington',
      'West Virginia',
      'Wisconsin',
      'Wyoming',
    ],
    clicks: [
      { title: 'Fruits' },
      { title: 'Dried' },
      { title: 'Fresh' },
      { title: 'Exotic' },
      { title: 'Nuts' },
    ],

  }),
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val)
    },
  },
  computed: {
    ...mapGetters(["CATEGORIES"])
  },
  methods: {
    ...mapActions(["GET_CATEGORIES_FROM_API"]),
    querySelections(v) {
      this.loading = true
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    },
  },
  mounted() {
    this.GET_CATEGORIES_FROM_API();
  },

}
</script>

<style scoped>

</style>