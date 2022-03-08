<script setup lang="ts">
//we need the Login function to allow the protected page to be pushed
import { Login } from '../models/session';

    function badLogin()
    {
        Login('noOnesName', 'noOnesPassword')
    }
    function login()
    {
        Login('exampleperson', 'password')
    }
</script>

<template>
    <div class="section">
        <h1 class="title">Login Page</h1>

        <!--Button to display a login that works-->
        <button class="button is-primary" @click="login">
            <span class="icon">
                <i class="fa fa-sign-in"></i>
            </span>
            <span>Login</span>
        </button>
        &nbsp;

        <!--Button to display a login that doesn't work-->
        <button class="button is-warning" @click="badLogin">
            <span class="icon">
                <i class="fa fa-sign-in"></i>
            </span>
            <span>Bad Login</span>
        </button>
    </div>
</template>


<style scoped>
</style>