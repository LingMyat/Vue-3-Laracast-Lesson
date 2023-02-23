export default {
    template: `
    <button class="bg-gray-200 hover:bg-gray-400 hover:text-white border rounded px-5 py-2 disabled:cursor-not-allowed" :disabled="processing">
        <slot></slot>
    </button>
    `,

    data() {
        return {
            processing: true,
        };
    }
}