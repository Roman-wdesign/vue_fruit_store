<template>
  <div class="header">
    <div class="header__one">
      <div class="header__one__picture">
        <router-link to="/">
          <v-img
              class="header__one__picture-img"
              src="fruit_logo.png"
          ></v-img>
        </router-link>
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

export default {
  name: "storeHeader",
  data: () => ({
    loading: false,
    items: [],
    search: null,
    select: null,
    states: [
      'Cranberries',
      'Magons',
      'Bananas',
      'Durian',
      'Apples',
    ],
    clicks: [
      {title: 'Fruits'},
      {title: 'Dried'},
      {title: 'Fresh'},
      {title: 'Exotic'},
      {title: 'Nuts'},
    ],

  }),
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val)
    },
  },
  computed: {},
  methods: {

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

  },

}
</script>

<style scoped>

</style>