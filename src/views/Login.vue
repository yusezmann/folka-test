<template>
    <div class="container card">
        <div class="login__title">
            <h1 class="text__title text-primary">Masuk</h1>
            <!-- <form @submit.prevent="login"> -->
            <div class="mt-9 flex flex-col">
                <input
                    type="text"
                    v-model="email"
                    :error-messages="emailErrors"
                    required
                    placeholder="Email"
                    class="input__title"
                />
            </div>
            <div class="mt-6 flex flex-col relative">
                <input
                    :type="[show === true ? 'password' : 'text']"
                    placeholder="Password"
                    :error-messages="passwordErrors"
                    required
                    v-model="password"
                    class="input__title"
                />
                <i @click="showPassword" class="show__pass"> show </i>
                <span class="text-base text-primary mb-8 text-right">
                    <router-link to="">lupa password?</router-link></span
                >
            </div>
            <button @click="login" class="btn mb-9">Masuk</button>
            <!-- </form> -->
            <div class="border-t pt-9 text-center mx-9">
                <span
                    >Belum punya akun?
                    <router-link class="text-primary font-bold" to="/register"
                        >Daftar Sekarang</router-link
                    >
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import useValidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
export default {
    data() {
        return {
            v$: useValidate(),
            show: true,
            email: '',
            password: '',
        }
    },
    validations() {
        return {
            email: { required, email },
            password: { required },
        }
    },
    computed: {
        ...mapGetters('auth', {
            getterLoginStatus: 'getLoginStatus',
            getterAuthData: 'getAuthData',
        }),
        emailErrors() {
            const errors = []
            if (!this.v$.email.$dirty) return errors
            !this.v$.email.required && errors.push('E-mail is required')
            return errors
        },
        passwordErrors() {
            const errors = []
            if (!this.v$.password.$dirty) return errors
            !this.v$.password.required && errors.push('E-mail is required')
            return errors
        },
    },
    methods: {
        showPassword() {
            this.show = !this.show
        },
        login() {
            const data = {
                email: this.email,
                password: this.password,
            }
            this.$store.dispatch('auth/login', data)
            if (this.getterLoginStatus === 'Success.') {
                // alert('login berhasil')
                this.$router.push('/')
            }
        },
    },
}
</script>

<style></style>
