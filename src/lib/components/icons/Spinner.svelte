<svg
	width={40}
	height={40}
	stroke="currentColor"
	viewBox="0 0 24 24"
	xmlns="http://www.w3.org/2000/svg">
	<g class="spinner origin-center">
		<circle cx={12} cy={12} r="9.5" fill="none" stroke-width={2} />
	</g>
</svg>

<style lang="postcss">
.spinner {
	animation: spinicon 2s linear infinite;
	transform-origin: center;
}

.spinner circle {
	stroke-linecap: round;
	animation: spiniconoff 1.5s ease-in-out infinite;
}

@keyframes spinicon {
	100% {
		transform: rotate(360deg);
	}
}
@keyframes spiniconoff {
	0% {
		stroke-dasharray: 0 150;
		stroke-dashoffset: 0;
	}
	47.5% {
		stroke-dasharray: 42 150;
		stroke-dashoffset: -16;
	}
	95%,
	100% {
		stroke-dasharray: 42 150;
		stroke-dashoffset: -59;
	}
}
</style>
