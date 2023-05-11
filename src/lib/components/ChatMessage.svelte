<script lang="ts">
	import type { ChatCompletionRequestMessageRoleEnum } from 'openai'
	import { onMount } from 'svelte';
	export let type: ChatCompletionRequestMessageRoleEnum
	export let message: string

	const chatColors = [
	"chat-bubble-primary",
	"chat-bubble-secondary",
	"chat-bubble-accent",
	"chat-bubble-info",
	"chat-bubble-success",
	"chat-bubble-warning",
	"chat-bubble-error",
];	

let activeColor = '';
	onMount(() => {
		activeColor = chatColors[Math.floor(Math.random() * chatColors.length)];
	});
</script>

<div class="chat {type === 'user' ? 'chat-end' : 'chat-start'} justify-end" >
	<div class="chat-image avatar">
		<div class="w-10 rounded-full">
			<img
				src="https://ui-avatars.com/api/?name={type === 'user' ? 'Me' : 'A'}"
				alt="{type} avatar"
			/>
		</div>
	</div>
	<div class="chat-header">
		{type === 'user' ? 'Me' : 'Ali'}
	</div>
	<div class="chat-bubble {type === 'user' ? ''+ activeColor +'' : 'chat-bubble'}">
		{message}
	</div>
</div>
