<template>
  <section class="home-access">
    <div class="section__title">
      <div class="section__title-text">05. Access</div>
    </div>
    <v-container>
      <v-row class="home-access__contents">
        <v-col sm="10" md="6" class="home-access__contents-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683727!2d139.7432442152701!3d35.658580480199504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bbd9009ec09%3A0x481a93f0d2a409dd!2z5p2x5Lqs44K_44Ov44O8!5e0!3m2!1sja!2sjp!4v1590235570418!5m2!1sja!2sjp"
            width="auto"
            height="300"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          >
          </iframe>
        </v-col>
        <v-col sm="10" md="6" class="home-access__contents-table">
          <v-simple-table>
            <tbody>
              <tr>
                <td>住所</td>
                <td>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</td>
              </tr>
              <tr>
                <td>最寄り駅</td>
                <td>東京駅</td>
              </tr>
              <tr>
                <td>TEL</td>
                <td>XXX-XXXX-XXXX</td>
              </tr>
              <tr>
                <td>FAX</td>
                <td>XXX-XXXX-XXXX</td>
              </tr>
              <tr>
                <td>駐車場</td>
                <td>XXXXXXXXXXX</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
      </v-row>
      <AppButton :button-text="buttonText" :url="url"/>
    </v-container>
  </section>
</template>
<script>
import AppButton from './AppButton.vue'

export default {
  data () {
    return {
      buttonText: '詳しくみる',
      url: '/access'
    }
  },
  components: {
    AppButton
  }
}
</script>
<style lang="scss" scoped>
.home-access__contents {
  margin-top: 20px;
  align-items: center;
  justify-content: center;

  &-map {
    text-align: center;
  }
}
</style>
