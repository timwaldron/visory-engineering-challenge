<template>
    <div class="row">
        <div class="col text-center">
            <h2>Visory Engineering Challenge</h2>
        </div>
    </div>
    
    <p><button class="btn btn-primary" type="button" @click="testApi">Test API</button></p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
    name: 'App',
    components: {
    },
    methods: {
        async testApi() {
            const response = (await axios.get('http://localhost:3000/api/v1/tickets/events'));
            console.log('response:', response);
        }
    }
});
</script>