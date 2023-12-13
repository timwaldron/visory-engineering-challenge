<template>
    <div class="row d-flex align-items-center justify-content-center">
        <div class="col-3">
            <div class="input-group input-group">
                <span class="input-group-text" id="location">Location</span>
                <input type="text" class="form-control" v-model="location" aria-describedby="location">
            </div>
        </div>

        <div class="col-3">
            <div class="input-group input-group">
                <span class="input-group-text" id="start-date">Start Date</span>
                <input type="date" class="form-control" v-model="startDate" aria-describedby="start-date">
            </div>
        </div>
        
        <div class="col-3">
            <div class="input-group input-group">
                <span class="input-group-text" id="start-date">End Date</span>
                <input type="date" class="form-control" v-model="endDate" aria-describedby="start-date">
            </div>
        </div>
        
        <div class="col-auto">
            <button class="btn btn-secondary" type="button" @click="search" :disabled="activity">Search!</button>
        </div>

        <div class="col-auto">
            <button class="btn btn-secondary" type="button" @click="clear" :disabled="activity">Clear</button>
        </div>
    </div>

    <div class="row" v-if="hasSearched">
        <div class="col">
            <!-- TODO: display: Showing results that [are in {location}(if set)], [start on {startDate}(if set)], [end on {endDate}(if set)]-->
            <!-- Can build this string in a computed method as an array and .join(',') it -->
        </div>
    </div>

    
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'EventFilter',
    emits: ['search'],
    props: {
        activity: { type: Boolean },
    },
    data() {
        return {
            location: '',
            startDate: '',
            endDate: '',
            hasSearched: false,
        };
    },
    methods: {
        clear(): void {
            this.location = '';
            this.startDate = '';
            this.endDate = '';
        },
        async search(): Promise<void> {
            const payload = {
                location: this.location,
                startDate: this.startDate,
                endDate: this.endDate,
            };

            this.$emit('search', payload);
        }
    }
});
</script>