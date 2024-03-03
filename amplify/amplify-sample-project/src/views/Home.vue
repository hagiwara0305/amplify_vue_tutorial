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
    </div>
</template>

<script>
    export default {
        name: 'home',
        components: {
        }
    }
</script>

<style>
    .home {
        padding-top: 100px;
    }
</style>
