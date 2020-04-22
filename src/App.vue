<template>
  <v-app>
    <header>
      <v-app-bar
        app
        dark
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>MyPortfolioSite</v-toolbar-title>
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
            <!-- ここから追加 -->
            <v-list-item
              v-for="menuItem in menuItems"
              :key="menuItem.NAME"
            >
              <v-list-item-title>{{ menuItem.NAME }}</v-list-item-title>
            </v-list-item>
            <!-- ここまで追加 -->
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </header>
    <div v-show="drawer" style="margin-top: 100px;">{{ drawer }}</div>
  </v-app>
</template>

<script>
import constants from './common/constants' // 今回追加

export default {
  data () {
    return {
      drawer: false,
      menuItems: constants.MENU_ITEMS // 今回追加
    }
  }
}
</script>

<style></style>
