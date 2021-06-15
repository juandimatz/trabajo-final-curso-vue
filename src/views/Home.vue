<template>
    <div class="home-page">
        <div id="titulo">Bienvenidos al trabajo final del curso de Vue</div>
        <img alt="Vue logo" src="../assets/logo.png" />
    </div>
</template>

<script>
    export default {
        name: "Home",
        components: {},
    };
</script>

<style>
    .home-page {
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

    #titulo {
        font-size: 40px;
        margin-top: 40px;
        margin-bottom: 40px;
        font-weight: bold;
        color: #329972;
        -webkit-text-stroke: 1px #2c3b6b;
    }

    .home-page img {
        width: 25%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
</style>
