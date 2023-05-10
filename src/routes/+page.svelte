<script>
	import supabase from '$lib/db'

	let name = ''

	async function saveName() {
		// Create a new chat room
		const newName = await supabase.from('userNames').insert({ name })

		// Open the modal
		const modal = document.getElementById('my-modal-6')
		modal.checked = true
	}

	// Function to fetch the most recent user name from the database
	export async function load() {
		const { data: userNames, error } = await supabase
			.from('userNames')
			.select('name')
			.order('id', { ascending: false })
			.limit(1)

		if (error) throw error

		return {
			page: { recentInsert: userNames[0].name }
		}
	}
</script>

<div class="isolate bg-base-100 px-6 py-24 sm:py-32 lg:px-8">
	<div
		class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
		aria-hidden="true"
	>
		<div
			class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		/>
	</div>
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">Welcome to Profadiver</h1>
			<p class="py-6">
				Experience the wisdom of top professionals, distilled into actionable advice just for you
			</p>
			<div>
				<input
					bind:value={name}
					type="text"
					id="name-input"
					placeholder="Enter your name"
					class="input input-bordered lg:input-lg md:input-md w-full max-w-xs"
				/>

				<button
					on:click={saveName}
					class="btn btn-xs lg:btn-lg sm:mt-3 text-white ${'modal-action'}">Get Started</button
				>
			</div>
		</div>
	</div>
</div>
<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
	<div class="modal-box ">
		<h3 class="font-bold text-lg">Before you start!</h3>
		<p class="py-4">
			We would like to inform you that our website strictly adheres to a no-data-collection policy.
			This means that we do not collect any personal information or data from our users, except for
			their username. The username serves as their identity and helps us count the number of users
			who use our website. We believe that user privacy is of utmost importance, and we are
			committed to providing a safe and secure browsing experience. Rest assured that your visit to
			our website is completely confidential and anonymous.
		</p>
		<div class="modal-action">
			<div class="${'modal-action'}"><a href="/Profadiver" class="${'btn'}">I agree!</a></div>
		</div>
	</div>
</div>
