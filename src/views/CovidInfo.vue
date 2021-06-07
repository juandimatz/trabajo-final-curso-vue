<template>
    <div>
        <h1>
            Ultimo reporte de COVID-19 en Argentina
        </h1>
        <h2>
            Casos: {{ covid_cases }}
        </h2>
        <h2>
            Muertes: {{ deaths }}
        </h2>
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
                    this.covid_cases = response.cases.new;
                    this.deaths = response.deaths.new;
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    };
</script>
