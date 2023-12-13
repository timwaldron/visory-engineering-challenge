<template>
    <div class="row d-flex justify-content-center">
        <div class="col-lg-6">

            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">COL 1</th>
                        <th scope="col">COL 2</th>
                        <th scope="col">COL 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>ROW 1</td>
                        <td>ROW 1</td>
                        <td>ROW 1</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>ROW 2</td>
                        <td>ROW 2</td>
                        <td>ROW 2</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>ROW 3</td>
                        <td>ROW 3</td>
                        <td>ROW 3</td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'EventsViewer',
    props: {
        events: { type: Array as PropType<any[]> }, // TODO: Type this when I know whay data I want to send back
    },
    data() {
        return {
        };
    },
    methods: {
    }
});
</script>