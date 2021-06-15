<template>
        <div v-if="this.nombre == null" class="informacion">
            <div id="subtitulo">Usted no esta registrado</div>
            <router-link to="/formulario" tag="v-btn">
                <v-btn id="register-btn" large text>REGISTRATE</v-btn>
            </router-link>
        </div>
        <div v-else class="informacion">
            <div id="titulo">Bienvenido, {{nombre}}</div>
            <div id="datos">
                <div id="contacto">Info de contacto</div>
                <div>Nombre completo: {{nombre}} {{apellido}}</div>
                <div>Email: {{email}}</div>
                <div>Fecha de nacimiento: {{fecha_nac}}</div>
            </div>
        </div>   
</template>

<script>
    export default {
        name: 'About',

        data: () => ({
            nombre: null,
            apellido: null,
            email: null,
            fecha_nac: null
        }),

        mounted() {
            this.nombre = localStorage.getItem("nombre");
            this.apellido = localStorage.getItem("apellido");
            this.email = localStorage.getItem("email");
            this.fecha_nac = localStorage.getItem("fecha_nac");
        },
    }
</script>

<style>

    .informacion {
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        margin-top: 30px;
    }

    #subtitulo {
        font-size: 30px;
        font-weight: bold;
        margin-top: 50px;
        margin-bottom: 10px;
    }

    #datos {
        font-size: 24px;
        border-top: 5px solid #329972;
        border-bottom: 5px solid #329972;
        width: 40%;
        margin-left: auto;
        margin-right: auto;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    #contacto {
        font-size: 30px;
        font-weight: bold;
        color: #329972;
    }
</style>