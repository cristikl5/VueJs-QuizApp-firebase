<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="score-title">
                    Your scores
                </div>
                <table class="table">
                    <thead>
                    <tr>
                        <th >Round</th>
                        <th>Question</th>
                        <th>Question 2</th>
                        <th>Question 3</th>
                        <th>Question 4</th>
                        <th>Question 5</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr  v-if="getAnswers.length > 0">
                        <th scope="row">1</th>
                        <template v-for="answer in getAnswers.filter(
                            answer => answer.round === 1
                        )">
                                <td :key="answer.id">{{answer.correct}}</td>
                        </template>
                    <tr v-else>
                        <th scope="row">1</th>

                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <template v-for="answer in getAnswers.filter(
                            answer => answer.round === 2
                        )">
                            <td :key="answer.id">{{answer.correct}}</td>
                        </template>

                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <template v-for="answer in getAnswers.filter(
                            answer => answer.round === 3
                        )">
                            <td :key="answer.id">{{answer.correct}}</td>
                        </template>


                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <template v-for="answer in getAnswers.filter(
                            answer => answer.round === 4
                        )">
                            <td :key="answer.id">{{answer.correct}}</td>
                        </template>

                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <template v-for="answer in getAnswers.filter(
                            answer => answer.round === 5
                        )">
                            <td :key="answer.id">{{answer.correct}}</td>
                        </template>
                    </tr>
                    </tbody>
                </table>
                <div>
                    <button type="button" class="btn btn-outline-secondary play" @click="restart">PLAY AGAIN</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex'

    export default {
        name: "Scoreboard",
        computed: {
            ...mapGetters([
                'getAnswers',
            ])
        },
        mounted() {
            console.log(this.getAnswers, 'getAnswers');
        },
        methods: {
            restart() {
                this.$router.push({path: '/game', params: {restart: true}})
            },
        }
    }
</script>

<style scoped>

</style>