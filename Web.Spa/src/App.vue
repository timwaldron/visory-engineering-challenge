<template>
    <div class="row">
        <div class="col text-center">
            <h2>Visory Engineering Challenge</h2>
        </div>
    </div>
    
    <EventFilter
        :activity="activity"
        @search="searchEvents"
    />

    <hr/>

    <EventsViewer
        :activity="activity"
        :page="page"
        :data="apiResponseData!"
        @navigate="navigateEvents"
    />
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';

import { EventSearch } from './models/eventSearch';
import { EventResponse } from './models/eventResponse';

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
            lastPayload: null as EventSearch | null,
            apiResponseData: null as EventResponse | null, // TODO: Type this correctly once I know what data I want to show
            page: 0,
        };
    },
    methods: {
        async searchEvents(payload: EventSearch) {
            try {
                this.activity = true;
                this.lastPayload = payload;
                this.page = 0;
                this.apiResponseData = (await axios.get<EventResponse>('http://localhost:3000/api/v1/events', { params: this.lastPayload })).data;
            } catch (error) {
                console.error(error);
                // TODO: Toast popup?
                this.apiResponseData = null;
                this.lastPayload = null;
            } finally {
                this.activity = false;
            }
        },
        async navigateEvents(page: number) {
            try {
                this.activity = true;

                this.page = page;
                if (this.page < 0) {
                    this.page = this.apiResponseData?.pagination?.totalPages! - 1;
                }
                
                // Retain the same search queries
                const payload = this.lastPayload;

                this.apiResponseData = (await axios.get<EventResponse>('http://localhost:3000/api/v1/events', { params: { page: this.page, ...payload} })).data;
            } catch (error) {
                console.error(error);
                // TODO: Toast popup?
                this.apiResponseData = null;
                this.lastPayload = null;
            } finally {
                this.activity = false;
            }
        },
    }
});
</script>