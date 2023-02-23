export default{
    template: `
    <button 
    :class="{
        'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
        'bg-blue-600 hover:bg-blue-800 ': type === 'primary',
        'bg-purple-600 hover:bg-purple-800 ': type === 'secondary',
        'bg-gray-600 hover:bg-gray-800 ': type === 'muted',
        'is-loading':processing,
    }" 
    :disabled="processing"
    >
        <slot></slot>
    </button>
    `,
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false
        }
    },
}