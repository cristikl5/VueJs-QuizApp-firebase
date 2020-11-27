<template>
    <div id="register">
        <div class="container">
            <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card card-signin my-5">
                        <div class="card-body">
                            <h5 class="card-title">Sign up</h5>
                            <div class="form-label-group">
                                <input
                                        type="email"
                                        id="inputEmail"
                                        class="form-control"
                                        placeholder="Email address"
                                        v-model="email"
                                >
                                <label for="inputEmail">Email</label>
                            </div>

                            <div class="form-label-group">
                                <input type="password" id="inputPassword" class="form-control" placeholder="Password"
                                       v-model="password">
                                <label for="inputPassword">Password</label>
                            </div>
                            <div class="custom-control custom-checkbox mb-3">
                            </div>
                            <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit"
                                    style="background-color:#4a148c" @click="signUp">Sign up
                            </button>
                            <br>
                            <p>
                                Have an account?
                                <router-link to="/login" class="sign">Sign In</router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase';

    export default {
        name: "Register",
        data() {
            return {
                email: null,
                password: null
            }
        },
        methods: {
            signUp: function () {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function (error) {
                    alert("Unable to register user:" + error.message)
                });
            }
        },
    };


</script>

<style scoped>

</style>