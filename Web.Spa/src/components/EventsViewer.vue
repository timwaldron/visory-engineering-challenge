<template>
    <div class="row d-flex justify-content-center">
        <div class="col-lg-10">

            <div v-if="!data" class="text-center">
                <span>Make a search to show results!</span>
            </div>
            <template v-else>
                <!-- Table data -->
                <table v-if="!activity" class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">Start Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item of data?.results">
                            <td><a :href="item.url" target="_blank">{{ item.name }}</a></td>
                            <td>{{ item.dates.start.localDate }}</td>
                            <td>{{ item.dates.start.localTime }}</td>
                        </tr>
                    </tbody>
                </table>
                <div v-else class="text-center">
                    <i class="fas fas-xl fa-sync fa-spin"></i>
                </div>

                <!-- Pagination -->
                <div class="row">
                    <div class="col-6 d-flex align-items-center">
                        <span>Showing {{ data.pagination?.size }} results of {{ data.pagination?.totalElements.toLocaleString() }} from page {{ (page + 1) }}</span>
                    </div>
                    <div class="col-6 d-flex justify-content-end">
                        <button type="button" class="btn btn-secondary ms-auto" @click="navigatePrevious" :disabled="activity">Previous</button>
                        <button type="button" class="btn btn-secondary ms-2" @click="navigateNext" :disabled="activity">Next</button>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { defineComponent } from 'vue';

import { EventResponse } from '../models/eventResponse';

export default defineComponent({
    name: 'EventsViewer',
    emits: ['navigate'],
    props: {
        activity: { type: Boolean },
        page: { type: Number, required: true },
        data: { type: Object as PropType<Partial<EventResponse>> },
    },
    methods: {
        navigatePrevious(): void {
            this.$emit('navigate', this.page - 1);
        },
        navigateNext(): void {
            this.$emit('navigate', this.page + 1);
        },
    }
});
</script>