<template>
    <div class="row">
        <div class="col text-center">
            <h2>Visory Engineering Challenge</h2>
        </div>
    </div>
    
    <EventFilter @search="searchEvents" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

import EventFilter from './components/EventFilter.vue';
import { EventSearch } from './models/events';

export default defineComponent({
    name: 'App',
    components: {
        EventFilter,
    },
    methods: {
        async searchEvents(payload: EventSearch) {
            const response = (await axios.get('http://localhost:3000/api/v1/events', { params: payload }));
            console.log('response:', response);
        }
    }
});
</script>