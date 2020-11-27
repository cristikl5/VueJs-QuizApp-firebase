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
                        <th scope="col">Round</th>
                        <th scope="col">Question</th>
                        <th scope="col">Question 2</th>
                        <th scope="col">Question 3</th>
                        <th scope="col">Question 4</th>
                        <th scope="col">Question 5</th>
                        <th scope="col">Archive</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{{score}}</td>
                        <td>{{score}}</td>
                        <td>{{score}}</td>
                        <td>{{score}}</td>
                        <td>{{score}}</td>
                        <td><input class="form-check-input checkboxstyle" type="checkbox" id="inlineCheckbox1"
                                   value="option1">
                            <label class="form-check-label" for="inlineCheckbox1"></label></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td><input class="form-check-input checkboxstyle" type="checkbox" id="inlineCheckbox2"
                                   value="option1">
                            <label class="form-check-label" for="inlineCheckbox1"></label></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td><input class="form-check-input checkboxstyle" type="checkbox" id="inlineCheckbox3"
                                   value="option1">
                            <label class="form-check-label" for="inlineCheckbox1"></label></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td><input class="form-check-input checkboxstyle" type="checkbox" id="inlineCheckbox4"
                                   value="option1">
                            <label class="form-check-label" for="inlineCheckbox1"></label></td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td><input class="form-check-input checkboxstyle" type="checkbox" id="inlineCheckbox5"
                                   value="option1">
                            <label class="form-check-label " for="inlineCheckbox1"></label></td>
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
    import Game from "./Game";

    export default {
        name: "Scoreboard",
        data() {
            return {
                score:true

            }
        },
        methods: {
            restart() {
                this.$router.push({path: '/game', params: { restart: true }})
            },
            score() {
                this.userResponses.filter((val)=>{
                    return val
                }).length
            }

        },
        created() {
            fetch('http://localhost:3000/questions')
                .then(response => response.json())
                .then((data) => this.answers= data);
        }
    }
</script>

<style scoped>

</style>