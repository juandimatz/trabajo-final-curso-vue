<template>
    <v-app>
        <NavigationDrawer />

        <Navbar />

        <!-- Sizes your content based upon application components -->
        <v-main>

            <!-- Provides the application the proper gutter -->
            <v-container fluid>

                <!-- If using vue-router -->
                <router-view></router-view>

            </v-container>
        </v-main>

        <v-footer app>
            <!-- -->
        </v-footer>
    </v-app>
</template>

<script>

    import Navbar from './Navbar/Navbar';
    import NavigationDrawer from './NavigationDrawer/NavigationDrawer';

    export default {
        name: 'Base',
        components: {
            Navbar,
            NavigationDrawer,
        }
    }

</script>