<template>
    <div>
        <img src="../assets/covid-19.jpg" id="covid-img">
        <div class="container2">
            <div>
                Ultimo reporte de COVID-19 en Argentina
            </div>
            <div>
                Casos: {{ covid_cases }}
            </div>
            <div>
                Muertes: {{ deaths }}
            </div>
        </div>
    </div>
</template>

<script>
    import covidService from '../services/covidService';
    
    export default {
        name: 'CovidInfo',

        data: () => ({
            covid_cases: null,
            deaths: null,
        }),

        mounted() {
             this.getCovidInfo();   
        },

        methods: {
            getCovidInfo() {
                covidService.getCovidInfo().then((response) => {
                    this.covid_cases = response.cases.new.substr(1);
                    this.deaths = response.deaths.new.substr(1);
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    };
</script>

<style>

    #covid-img {
        width: 36%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 20px;
        margin-top: 30px;
    }

    .container2 {
        text-align: center;
        margin-top: 30px;
        font-family: "Roboto", sans-serif;
        font-size: 30px;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        border-top: 5px solid #329972;
        border-bottom: 5px solid #329972;
    }
</style>
