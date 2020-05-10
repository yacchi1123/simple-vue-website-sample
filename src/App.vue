<template>
  <v-app>
    <header>
      <v-app-bar
        app
        dark
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>MyPortfolioSite</v-toolbar-title>
        <v-tabs>
          <v-tab
            v-for="(menuItem, index) in menuItems"
            :key="index"
          >
            {{ menuItem.NAME }}
          </v-tab>
        </v-tabs>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group>
            <v-list-item
              v-for="menuItem in menuItems"
              :key="menuItem.NAME"
            >
              <v-list-item-title>{{ menuItem.NAME }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </header>
    <div v-show="drawer" style="margin-top: 100px;">{{ drawer }}</div>
  </v-app>
</template>

<script>
import constants from './common/constants'

export default {
  data () {
    return {
      drawer: false,
      menuItems: constants.MENU_ITEMS
    }
  }
}
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}
</style>
