<template>
	<div>
		<h1>Select problem</h1>
		<p>Problem: Select does not show selected item. "All" (first item) should be selected after page load with the
			":selected" property, instead the third/last item ("Completed") is selected.</p>
		<ui5-select @change="updateStateFilter($event)">
			<ui5-option v-for="stateFilter in stateFilters" :key="stateFilter.id" :data-value="stateFilter.id"
				:selected="currentStateFilter.toLowerCase() === stateFilter.id.toLowerCase()">
				{{ stateFilter.displayName }} (selected: {{ currentStateFilter.toLowerCase() ===
					stateFilter.id.toLowerCase() }})
			</ui5-option>
		</ui5-select>
		<p>Current state filter: {{ currentStateFilter }}</p>
		<p>Possible filters:</p>
		<ul>
			<li v-for="filter in stateFilters" :key="filter.id">
				id: {{ filter.id }} - displayName: {{ filter.displayName }}
			</li>
		</ul>
	</div>
</template>

<script>
import '@ui5/webcomponents/dist/Select.js';
import '@ui5/webcomponents/dist/Option.js';

export default {
	components: {
	},
	data() {
		return {
			currentStateFilter: 'all',
			stateFilters: [
				{ id: 'all', displayName: 'All' },
				{ id: 'active', displayName: 'Active' },
				{ id: 'completed', displayName: 'Completed' }
			],
		}
	},
	methods: {
		updateStateFilter(event) {
			const targetValue = event.detail.selectedOption.dataset.value
			console.log('updating state: ', targetValue);
			this.currentStateFilter =
				this.stateFilters.find(filter => filter.displayName.toLowerCase() === targetValue.toLowerCase())?.id || 'all';
		},
		onReturnPressed() {
			console.log('return pressed');
			alert('return pressed');
		}

	}
};
</script>

<style></style>
