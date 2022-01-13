<template>
    <div v-if="next === true">
        <div class="container cards">
            <div class="login__title">
                <span class="text__title text-primary" @click="nextShow"
                    ><i class="fas fa-arrow-left"></i> kembali</span
                >
                <div class="mt-9 flex flex-col">
                    <input
                        type="text"
                        v-model="phone"
                        placeholder="Nomor Telepon"
                        class="input__title"
                    />
                </div>
                <div class="mt-6 flex flex-col relative">
                    <input
                        :type="[show === true ? 'password' : 'text']"
                        placeholder="Password"
                        v-model="password"
                        class="input__title"
                    />
                    <i @click="showPassword" class="show__pass -mb-5"> show </i>
                </div>
                <div class="mt-6 flex flex-col relative">
                    <input
                        :type="[showConfirm === true ? 'password' : 'text']"
                        placeholder="Konfirmasi Password"
                        v-model="confirm"
                        class="input__title"
                    />
                    <i @click="showConfirmPass" class="show__pass"> show </i>
                </div>
                <button @click="register" class="btn mb-9">Selanjutnya</button>
                <div class="border-t pt-9 text-center mx-9">
                    <span
                        >Sudah punya akun?
                        <router-link class="text-primary font-bold" to="/login"
                            >Masuk</router-link
                        >
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="container cards">
            <div class="login__title">
                <h1 class="text__title text-primary">Daftar Sekarang</h1>
                <div class="mt-9 flex flex-col">
                    <input
                        type="text"
                        v-model="name"
                        placeholder="Nama Depan"
                        class="input__title"
                    />
                </div>
                <div class="mt-6 flex flex-col">
                    <input
                        type="text"
                        v-model="lastName"
                        placeholder="Nama Belakang"
                        class="input__title"
                    />
                </div>
                <div class="mt-6 mb-11 flex flex-col">
                    <input
                        type="text"
                        v-model="email"
                        placeholder="Email"
                        class="input__title"
                    />
                </div>
                <button @click="nextShow" class="btn mb-9">Selanjutnya</button>
                <div class="border-t pt-9 text-center mx-9">
                    <span
                        >Sudah punya akun?
                        <router-link class="text-primary font-bold" to="/login"
                            >Masuk</router-link
                        >
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import useValidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'
export default {
    data() {
        return {
            v$: useValidate(),
            show: true,
            showConfirm: true,
            next: false,
            name: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            confirm: '',
        }
    },
    validations() {
        return {
            name: { required },
            lastName: { required },
            email: { required, email },
            phone: { required, minLength: minLength(10) },
            password: { required, minLength: minLength(8) },
            password: { required, sameAs: sameAs('password') },
        }
    },
    computed: {
        nameErrors() {
            const errors = []
            if (!this.v$.name.$dirty) return errors
            !this.v$.name.required && errors.push('First Name is required')
            return errors
        },
        lastNameErrors() {
            const errors = []
            if (!this.v$.lastName.$dirty) return errors
            !this.v$.lastName.required && errors.push('Last Name is required')
            return errors
        },
        phoneErrors() {
            const errors = []
            if (!this.v$.phone.$dirty) return errors
            !this.v$.password.minLength &&
                errors.push('Phone must be at least 10 characters ')
            !this.v$.phone.required && errors.push('Phone is required')
            return errors
        },
        emailErrors() {
            const errors = []
            if (!this.v$.email.$dirty) return errors
            !this.v$.email.required && errors.push('E-mail is required')
            return errors
        },
        passwordErrors() {
            const errors = []
            if (!this.v$.password.$dirty) return errors
            !this.v$.password.minLength &&
                errors.push('Password must be at least 8 characters ')
            !this.v$.password.required && errors.push('E-mail is required')
            return errors
        },

        confirmErrors() {
            const errors = []
            if (!this.v$.confirmPassword.$dirty) return errors
            !this.v$.confirmPassword.sameAsPassword &&
                errors.push('Password must be matching.')
            return errors
        },
    },
    methods: {
        nextShow() {
            this.next = !this.next
        },
        showPassword() {
            this.show = !this.show
        },
        showConfirmPass() {
            this.showConfirm = !this.showConfirm
        },
        async register() {
            const data = {
                name: this.name,
                lastName: this.lastName,
                email: this.email,
                phone: this.phone,
                password: this.password,
            }
            this.$store.dispatch('auth/register', data)
            this.$router.push('/login')
        },
    },
}
</script>

<style></style>
