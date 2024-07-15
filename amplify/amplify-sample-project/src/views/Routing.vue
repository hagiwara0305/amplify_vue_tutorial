<template>
    <div class="home">
        <div class="mx-5">
            <b-table striped hover :items="api_response_table" :fields="fields"></b-table>
            <b-button variant="outline-primary" v-on:click="requestAPI">一般公開用API</b-button>
            <b-button variant="outline-primary" v-on:click="loginRequestAPI">ログイン必須API</b-button>
        </div>
    </div>
</template>

<script>
import { WebAPI } from "../store/request-api";

export default {
    name: "roting",
    data() {
        return {
            fields: [
                {
                    key: "required",
                    label: "ログイン必須"
                }, {
                    key: "return_value",
                    label: "API返却値"
                }
            ],
            api_response_table: [
                { required: "*", return_value: "ログイン必須API" },
                { required: null, return_value: "一般公開用API" }
            ]
        }
    },
    methods: {
        // 一般公開用APIリクエスト
        async requestAPI() {
            let webApi = new WebAPI();
            this.api_response_table[1]["return_value"] = await webApi.getAPIRsequest("/public/rest-api");
        },
        // ログイン必須APIリクエスト
        async loginRequestAPI() {
            let webApi = new WebAPI();
            let webAPIRespons = await webApi.getAPIRsequest("/private/rest-api");
            this.api_response_table[0]["return_value"] = webAPIRespons;
        }
    },
};
</script>

<style>
.home {
    padding-top: 100px;
}
</style>