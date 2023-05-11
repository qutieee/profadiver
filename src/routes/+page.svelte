<script>
	import supabase from '$lib/db'

let name = '';

async function saveName() {
	// Create a new chat room
	const newName = await supabase.from('userNames').insert({ name })

	// Open the modal
	const modal = document.getElementById('my-modal-6')
	modal.checked = true
}

	
</script>

<div class="bg-base-100">
	<div class="relative isolate px-6 pt-1 lg:px-8">
	  <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
			<div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
			</div>
	  </div>
	  
		<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
			<div class="text-center">
				<h1 class="text-4xl font-bold tracking-tight text-white-100 sm:text-6xl">Welcome to</h1>
				<div class="mx-auto max-w-lg">
					<img src="profadiver-logo.png" alt="logo"/>
				</div>	
				<p class="mt-6 leading-8">Experience the wisdom of top professionals, distilled into actionable advice just for you.</p>
				<div class="mt-3 flex items-center justify-center gap-x-6">
					<div>
						<input
							bind:value={name}
							type="text"
							id="name-input"
							placeholder="Enter your name"
							class="input input-bordered lg:input-lg md:input-md w-full max-w-xs"
							required
						/>

						<button
							on:click={saveName}
							class="btn btn-md mt-3 lg:btn-lg text-white ${'modal-action'}">Get Started</button
						>
					</div>
				</div>
			</div>
		</div>


	  <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
		<div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
	  </div>

	</div>
	
	<div class=" min-h-screen text-center">
		<div class="hero-content flex-col lg:flex-row-reverse">
			<img src="features1.png" class="max-w-sm rounded-lg " alt="f1"/>
			<div>
			<h1 class="text-2xl font-semi md:m-20">Profadiver is a friend you can lean on, providing you with comfort if you have problems.</h1>
			<p class="py-6"></p>
			</div>
		</div>

		<div class="hero-content flex-col lg:flex-row lg:ml-20">
			<img src="features2.png" class="max-w-sm rounded-lg " alt="f2" />
			<div>
			<h1 class="text-2xl font-boldtext-2xl font-semi md:m-20">Profadiver will serve as a safe community for everyone, and it will be a compassionate ear to serve by the people, for the people.</h1>
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
		<p class="font-semibold text-red-600">If you go back or navigate to another page, all of the conversation will be refreshed and deleted.</p>
		<div class="modal-action">
			<div class="${'modal-action'}"><a href="/Profadiver" class="${'btn'}">I agree!</a></div>
		</div>
	</div>
</div>
