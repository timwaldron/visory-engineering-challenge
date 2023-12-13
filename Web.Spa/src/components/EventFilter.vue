<template>
    <form @submit.prevent="search">
        <div class="row d-flex align-items-center justify-content-center">
            <div class="col-3">
                <div class="input-group input-group">
                    <span class="input-group-text" id="city">City</span>
                    <input type="text" class="form-control" v-model="city" aria-describedby="city">
                </div>
            </div>

            <div class="col-3">
                <div class="input-group input-group">
                    <span class="input-group-text" id="start-date-time">Start Date Time</span>
                    <input type="datetime-local" class="form-control" v-model="startDateTime" aria-describedby="start-date-time">
                </div>
            </div>
            
            <div class="col-3">
                <div class="input-group input-group">
                    <span class="input-group-text" id="end-date-time">End Date Time</span>
                    <input type="datetime-local" class="form-control" v-model="endDateTime" aria-describedby="end-date-time">
                </div>
            </div>
            
            <div class="col-auto">
                <button class="btn btn-secondary" type="button" @click="search" :disabled="activity">
                    <i v-if="activity" class="fas fa-spin fa-sync"></i>
                    <span v-else>Search!</span>
                </button>
            </div>

            <div class="col-auto">
                <button class="btn btn-secondary" type="button" @click="clear" :disabled="activity">
                    Clear
                </button>
            </div>
        </div>
    </form>

    <div class="row" v-if="hasSearched">
        <div class="col">
            <!-- TODO: display: Showing results that [are in {city}(if set)], [start on {startDateTime}(if set)], [end on {endDateTime}(if set)]-->
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
            city: '',
            startDateTime: '',
            endDateTime: '',
            hasSearched: false,
        };
    },
    methods: {
        clear(): void {
            this.city = '';
            this.startDateTime = '';
            this.endDateTime = '';
        },
        async search(): Promise<void> {
            const payload = {
                city: this.city,
                startDateTime: this.startDateTime,
                endDateTime: this.endDateTime,
            };

            this.$emit('search', payload);
        }
    }
});
</script>