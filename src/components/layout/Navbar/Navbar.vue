<template>
    <v-app-bar app color="green" dense dark>
        
        <router-link to="/" tag="v-btn">
            <v-btn large text>Home</v-btn>
        </router-link>
        <router-link to="/formulario" tag="v-btn">
            <v-btn large text>Formulario</v-btn>
        </router-link>
        <router-link to="/about" tag="v-btn">
            <v-btn large text>About</v-btn>
        </router-link>
        
        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-menu left bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                    <v-list-item-title>Option {{ n }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>
