<template>
    <div id="login">
        <div class="container">
            <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card card-signin my-5">
                        <div class="card-body">
                            <h5 class="card-title">Log in</h5>
                            <form class="form-signin">
                                <div class="form-label-group">
                                    <input
                                            type="email"
                                            id="inputEmail"
                                            class="form-control"
                                            placeholder="Email address"
                                            v-model="email"
                                            autofocus>
                                    <label for="inputEmail">Email</label>
                                </div>

                                <div class="form-label-group">
                                    <input
                                            type="password"
                                            v-model="password"
                                            id="inputPassword"
                                            class="form-control"
                                            placeholder="Password"
                                    >
                                    <label for="inputPassword">Password</label>
                                </div>

                                <div class="custom-control custom-checkbox mb-3">
                                </div>
                                <button class="btn btn-lg btn-primary btn-block text-uppercase"
                                        style="background-color:#4a148c" @click.prevent="login">Log in
                                </button>
                                <hr class="my-4">
                                <div id="firebaseui-auth-container">
                                    <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit"
                                            @click.prevent="google">Log in with Google
                                    </button>
                                    <button class="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"
                                            @click.prevent="facebook">Log in with Facebook
                                    </button>
                                </div>
                                <br>
                                <p>
                                    Need an account?
                                    <router-link to="/register" class="sign">Sign Up</router-link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase'


    export default {
        name: "Login",
        data() {
            return {
                email: null,
                password: null
            }
        },
        methods: {
            login: function () {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user) => {
                    this.$router.push('/welcome')
                    console.log("you are logged in")
                }).catch(function (error) {
                    alert("Unable to login" + error.message)
                });
            },
            google: function () {
                const provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(provider).then((result)=> {
                    this.$router.push('/welcome')
                    const user = result.user;
                    console.log(user)
                }).catch(function (error) {
                    const errorMessage = error.message;
                    console.log(errorMessage)
                });
            },
            facebook: function () {
                const provider = new firebase.auth.FacebookAuthProvider();
                firebase.auth().signInWithPopup(provider).then((result)=> {
                    this.$router.push('/welcome')
                }).catch(function (error) {
                    const errorMessage = error.message;
                    console.log(errorMessage)
                });

            }
        },


    };


</script>

<style scoped>

</style>