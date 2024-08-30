<!-- contact/+page.svelte -->
<script>
	export let data
	import { onMount } from 'svelte'
	// import { createClient } from '@supabase/supabase-js'
	import { supabase } from '$lib/supabaseClient'
	import Title from '$lib/components/Title.svelte'

	// console.log(data)

	onMount(() => {
		const form = document.querySelector('#contact-form')
		form?.addEventListener('submit', async (event) => {
			event.preventDefault()
			const formInputs = form.querySelectorAll('input, textarea')
			let submission = {}
			// 	email: 'rewarner@russellbits.com',
			// 	sender_name: 'Russell',
			// 	message: 'Hello there.',
			// 	sent: '2024-08-09T12:04:38Z'
			// }
			formInputs.forEach((element) => {
				// @ts-ignore
				const { value, name } = element
				if (value) {
					// @ts-ignore
					submission[name] = value
				}
			})
			console.log(submission)
			const { error, data } = await supabase
				.from('russellbits_messages')
				.insert(submission)
				.select()

			// .insert(submission)

			console.log({ error, data })
		})
	})
</script>

<svelte:head>
	<title>Russellbits - Contact</title>
	<meta property="og:title" content="Contact" />
</svelte:head>

<section>
	<div class="header">
		<Title title="Contact" color="blue" align="right" />
	</div>

	<p>Countries</p>
	<ul>
		{#each data.russellbits_messages as message}
			<li>{message.sender_name}</li>
			<li>{message.email}</li>
			<li>{message.message}</li>
			<li>{message.sent}</li>
		{/each}
	</ul>

	<p>Reach out and say Hi.</p>

	<form id="contact-form">
		<label for="email"
			>Email address:
			<input type="email" id="email" name="email" placeholder="Email address" required />
		</label>
		<label for="name"
			>Name:
			<input
				type="text"
				id="name"
				name="sender_name"
				placeholder="Your name"
				class="textfield"
				required
			/>
		</label>

		<p>
			<small
				>I'll never share your email with anyone else and you're not signing up for anything.</small
			>
		</p>
		<label for="message"
			>Your message:
			<input type="textarea" id="message" name="message" placeholder="Your message" required />
		</label>
		<input type="hidden" name="sent" value="2024-08-09T12:04:38Z" />
		<!-- Button -->
		<button type="submit">Submit</button>
	</form>
</section>

<style lang="scss">
	section {
		width: 50vw;
		margin: 0 auto;
		border: 1px solid aqua;
	}
	form {
		color: white;
		display: flex;
		flex-direction: column;
		gap: 1em;
	}
</style>
