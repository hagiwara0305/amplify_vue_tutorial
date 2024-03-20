<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col>
          <h1>ログイン済</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <!--ログアウトコンポーネント-->
          <amplify-sign-out></amplify-sign-out>
        </v-col>
      </v-row>
    </v-container>

    <div class="response-api message">
        <p>API返却地: {{ requestApiResponse }}</p>
    </div>
    <button class="button" v-on:click="requestAPI">requestAPI</button>
  </div>
</template>

<script>
import { WebAPI } from "../store/request-api";

export default {
  name: "home",
  data() {
    return {
        requestApiResponse: "初期値",
    };
  },
  methods: {
    async requestAPI() {
      let webApi = new WebAPI();
      this.requestApiResponse = await webApi.getAPIRsequest("/rest-api");
    },
  },
};
</script>

<style>
.home {
  padding-top: 100px;
}
</style>
