<script lang="ts">
	import { onMount } from 'svelte';
	import supabase from '$lib/db';
	import ChatMessage from '$lib/components/ChatMessage.svelte'
	import type { ChatCompletionRequestMessage } from 'openai'
	import { SSE } from 'sse.js'
  	import { page } from '$app/stores';

	let query: string = ''
	let answer: string = ''
	let loading: boolean = false
	let chatMessages: ChatCompletionRequestMessage[] = JSON.parse(localStorage.getItem('chatMessages')) || []
	let scrollToDiv: HTMLDivElement

	function scrollToBottom() {
		setTimeout(function () {
			scrollToDiv.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
		}, 100)
	}

	const handleSubmit = async () => {
		loading = true
		chatMessages = [...chatMessages, { role: 'user', content: query }]


		const eventSource = new SSE('/api/chat', {
			headers: {
				'Content-Type': 'application/json'
			},
			payload: JSON.stringify({ messages: chatMessages })
		})

		query = ''

		eventSource.addEventListener('error', handleError)

		eventSource.addEventListener('message', (e) => {
			scrollToBottom()
			try {
				loading = false
				if (e.data === '[DONE]') {
					chatMessages = [...chatMessages, { role: 'assistant', content: answer }]
					answer = ''

					// Store the chat messages and last AI message in local storage
						localStorage.setItem('chatMessages', JSON.stringify(chatMessages))
						localStorage.setItem('lastAIMessage', JSON.stringify(chatMessages[chatMessages.length - 1]))
					return
				}

				const completionResponse = JSON.parse(e.data)
				const [{ delta }] = completionResponse.choices

				if (delta.content) {
					answer = (answer ?? '') + delta.content
				}
			} catch (err) {
				handleError(err)
			}
		})
		eventSource.stream()
		scrollToBottom()
	}

	function handleError<T>(err: T) {
		loading = false
		query = ''
		answer = ''
		console.error(err)
	}

	  export let recentInsert;
  
		let mess ="";
		
		if (recentInsert) {
			mess = `Hello ${recentInsert}, what would you like to talk about?`;
		} else {
			mess = "Hello! I am Ali. May I please know your name?";
		}


	  window.onbeforeunload = () => {
		localStorage.removeItem('chatMessages')
		localStorage.removeItem('lastMessage')
	}





</script>

<div class="flex flex-col pt-20 w-full px-8 items-center gap-2">
	<div class="h-[500px] w-full bg-gray-900 rounded-md p-4 overflow-y-auto flex flex-col gap-4">
		<div class="flex flex-col gap-2">
			<ChatMessage type="assistant" message={mess} />
			{#each chatMessages as message}
				<ChatMessage type={message.role} message={message.content} />
			{/each}
			{#if answer}
				<ChatMessage type="assistant" message={answer} />
			{/if}
			{#if loading}
				<ChatMessage type="assistant" message="Typing..." />
			{/if}
		</div>
		<div class="" bind:this={scrollToDiv} />
	</div>
	<form
		class="flex w-full rounded-md gap-4 bg-gray-900 p-4"
		on:submit|preventDefault={() => handleSubmit()}
	>
		<input type="text" class="input input-bordered w-full" bind:value={query} />
		<button type="submit" class="btn btn-accent"> Send </button>
	</form>
</div>
