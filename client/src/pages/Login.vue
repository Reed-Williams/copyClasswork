<script setup lang="ts">
//we need the Login function to allow the protected page to be pushed
import { Login } from '../models/session';
    function login()
    {
        Login('username', '12345')
    }
</script>

<template>
    <div class="section">
        <h1 class="title">Login Page</h1>

        <!--call the login function when the login button is pushed-->
        <button class="button is-primary" @click="login">
            <span class="icon">
                <i class="fa fa-sign-in"></i>
            </span>
            <span>Login</span>
        </button>
    </div>
</template>


<style scoped>
</style>