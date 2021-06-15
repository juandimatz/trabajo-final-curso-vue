<template>
    <v-form v-model="valid">
        <v-container>  
            <v-col>
                <div class="titulo">Registrarte: </div>
                <v-col cols="12" md="4" class="form-input">
                    <v-text-field
                        v-model="firstname"
                        :rules="nameRules"
                        label="Nombre"
                        required
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" class="form-input">
                    <v-text-field
                        v-model="lastname"
                        :rules="nameRules"
                        label="Apellido"
                        required
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" class="form-input">
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                    ></v-text-field>
                </v-col>
                
                <v-col
                    cols="12"
                    md="4"
                    class="form-input"
                >
                    <v-menu
                    ref="menu1"
                    v-model="menu1"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                        id="date-text-field"
                        v-model="dateFormatted"
                        label="Fecha de nacimiento"
                        hint="MM/DD/YYYY format"
                        persistent-hint
                        v-bind="attrs"
                        @blur="date = parseDate(dateFormatted)"
                        v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="date"
                        no-title
                        @input="menu1 = false"
                    ></v-date-picker>
                    </v-menu>
                </v-col>  
                <v-btn
                    class="mr-4"
                    @click="register"
                    id="register-btn"
                >
                    Registrarte
                </v-btn>    
            </v-col>
        </v-container>
    </v-form>
</template>

<script>
    export default {
        data: (vm) => ({
            valid: false,
            firstname: "",
            lastname: "",
            nameRules: [
                (v) => !!v || "El nombre es obligatorio",
            ],
            email: "",
            emailRules: [
                (v) => !!v || "El e-mail es obligatorio",
                (v) => /.+@.+/.test(v) || "El e-mail debe ser valido",
            ],
            date: new Date().toISOString().substr(0, 10),
            dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
            menu1: false,
            menu2: false,
        }),

        computed: {
            computedDateFormatted () {
                return this.formatDate(this.date)
            },
        },
        
        watch: {
            date () {
                this.dateFormatted = this.formatDate(this.date)
            },
        },
        
        methods: {
            formatDate (date) {
                if (!date) return null
                const [year, month, day] = date.split('-')
                return `${month}/${day}/${year}`
            },
            parseDate (date) {
                if (!date) return null
                const [month, day, year] = date.split('/')
                return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
            },
            register () {
                localStorage.setItem("nombre", this.firstname);
                localStorage.setItem("apellido", this.lastname);
                localStorage.setItem("email", this.email);
                localStorage.setItem("fecha_nac", this.date);
            },
        },
    };
</script>

<style>
    
    .titulo {
        padding: 0 12px;
        font-size: 30px;
        margin-bottom: 10px;
        font-family: "Roboto", sans-serif;
        color: rgba(0, 0, 0, 0.75);
    }

    .form-input {
        padding-bottom: 12px;
    }

    #register-btn {
        margin-left: 12px;
        margin-top: 20px;
        background-color: #329972;
        color: white;
    }
</style>
