<template>
    <div class="row">
        <div class="col text-center">
            <h2>Visory Engineering Challenge</h2>
        </div>
    </div>
    
    <EventFilter :activity="activity" @search="searchEvents" />

    <hr/>

    <EventsViewer :events="events" />
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';

import { EventSearch } from './models/eventSearch';

import EventFilter from './components/EventFilter.vue';
import EventsViewer from './components/EventsViewer.vue';

export default defineComponent({
    name: 'App',
    components: {
        EventFilter,
        EventsViewer,
    },
    data() {
        return {
            activity: false,
            events: [] as any[], // TODO: Type this correctly once I know what data I want to show
        };
    },
    methods: {
        async searchEvents(payload: EventSearch) {
            try {
                this.activity = true;
                const response = (await axios.get('http://localhost:3000/api/v1/events', { params: payload })).data;
                console.log('response:', response);
            } catch (error) {
                console.error(error);
                // TODO: Toast popup?
            } finally {
                this.activity = false;
            }
        }
    }
});
</script>./models/eventSearch