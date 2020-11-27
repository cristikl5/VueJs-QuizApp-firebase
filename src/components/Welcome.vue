<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card card-signin my-5">
                    <div class="card-body">
                        <div class="card-title">
                            Welcome to ngQuiz!
                        </div>
                        <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit"
                                style="background-color:#4a148c" @click="getQuestions">Start game
                        </button>
                        <hr class="my-4">
                        <button class="btn btn-lg btn-secondary btn-block text-uppercase" type="button">Configure
                            profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Welcome",
        methods: {
            getQuestions() {
                this.$router.push('/game')
            }
        }
    }
</script>

<style scoped>

</style>F