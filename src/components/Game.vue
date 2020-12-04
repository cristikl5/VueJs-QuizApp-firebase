<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div v-for="question in quiz.questions">
                    <div class="title" v-if="question.id === id">{{question.text}}</div>
                    <div v-if="question.id === id"
                         class="custom-control custom-radio custom-control-inline ">
                        <div v-for="response in question.responses">
                            <label class="radio-inline options">
                                <input type="radio" :value="response.correct" :name="id"
                                       v-model="userResponses[id]" @click="check(response)">{{response.text}}
                            </label>
                        </div>
                    </div>
                </div>
                <timer :change-id="changeId"></timer>
            </div>
        </div>
    </div>

</template>

<script>
    import Timer from "./Timer"
    import axios from "axios";
    import {mapMutations} from 'vuex'


    var quiz = {
        title: 'Моя викторина',
        questions: [
            {
                id: 1,
                text: "What is name of our planet? ",
                responses: [
                    {text: 'Pluto'},
                    {text: 'Earth', correct: true},
                    {text: 'Venus'},
                    {text: 'Moldova'},
                ]
            }, {
                id: 2,
                text: "How hot is the surface of the sun?",
                responses: [
                    {text: '5,778 K', correct: true},
                    {text: '1,233 K'},
                    {text: '12,130 K'},
                    {text: '101,300 K'},
                ]
            },
            {
                id: 3,
                text: "Who are the actors in The Internship?",
                responses: [
                    {text: 'Ben Stiller, Jonah Hill'},
                    {text: 'Courteney Cox, Matt LeBlanc'},
                    {text: 'Kaley Cuoco, Jim Parsons', correct: true},
                    {text: 'Vince Vaughn, Owen Wilson'},
                ]
            },
            {
                id: 4,
                text: "What is the capital of Spain?",
                responses: [
                    {text: 'Berlin'},
                    {text: 'Buenos Aires'},
                    {text: 'Madrid',correct: true},
                    {text: 'San Juan'},
                ]
            },
            {
                id: 5,
                text: "What are the school colors of the University of Texas at Austin?",
                responses: [
                    {text: 'Black, Red'},
                    {text: 'Blue, Orange', correct: true},
                    {text: 'White, Burnt Orange'},
                    {text: 'White, Old gold, Gold'},
                ]
            },
            {
                id: 6,
                text: "What is 70 degrees Fahrenheit in Celsius?",
                responses: [
                    {text: '18.8889'},
                    {text: '20'},
                    {text: '21.1111', correct: true},
                    {text: '158'},
                ]
            },
            {
                id: 7,
                text: "When was Mahatma Gandhi born?",
                responses: [
                    {text: 'October 2, 1869'},
                    {text: 'December 15, 1872'},
                    {text: 'July 18, 1918', correct: true},
                    {text: 'January 15, 1929'}
                ]
            },
            {
                id: 8,
                text: "How far is the moon from Earth?",
                responses: [
                    {text: '7,918 miles (12,742 km)'},
                    {text: '86,881 miles (139,822 km)', correct: true},
                    {text: '238,400 miles (384,400 km)'},
                    {text: '35,980,000 miles (57,910,000 km)'},
                ]
            },
            {
                id: 9,
                text: "What is 65 times 52?",
                responses: [
                    {text: '117'},
                    {text: '3120', correct: true},
                    {text: '3380'},
                    {text: '3520'},
                ]
            },
            {
                id: 10,
                text: "How tall is Mount Everest?",
                responses: [
                    {text: '6,683 ft (2,037 m)'},
                    {text: '7,918 ft (2,413 m)'},
                    {text: '19,341 ft (5,895 m)'},
                    {text: '29,029 ft (8,847 m)', correct: true},
                ]
            }
        ]
    };
    import { mapGetters } from 'vuex'

    export default {
        name: "Game",
        props: {},
        components: {
            timer: Timer
        },
        data() {
            return {
                currentQuestionId: undefined,
                quiz: quiz,
                questions: [],
                id: 1,
                round: null,
                timerCount: 10,
                userResponses: Array(quiz.questions.length).fill(false)
            }
        },
        mounted() {
            this.currentQuestionId = this.$store.state.currentQuestionId;
            this.round = this.getRound;
        },
        methods: {
            changeId() {
                this.id = this.id + 1;
                if (this.id === 6) {
                    //save current id in state (this.id++)
                    this.round = this.round + 1;
                    this.$store.dispatch('setRound', {round: this.round});
                    this.$store.commit('setCurrentAnswers' ,this.userResponses);
                    this.$router.push('/scoreboard', [{questionId: 0, true: true}]);
                }
            },
            check(status) {
                if (status.correct) {
                    this.$store.dispatch('setCurrentQuestionId', {id: this.id, value: true, round: this.round});
                } else {
                    this.$store.dispatch('setCurrentQuestionId', {id: this.id, value: false, round: this.round});
                }
                this.id = this.id + 1;
                if (this.id === 6) {
                    this.round = this.round + 1;
                    this.$store.dispatch('setRound', {round: this.round});
                    this.$router.push('/scoreboard');
                }
            },

        },
        watch: {},
        computed: {
            ...mapGetters([
                'getRound'
            ])
        },
    }


</script>

<style scoped>

</style>
