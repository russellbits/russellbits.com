<!-- contact/+page.svelte -->
<script>
	// export let data
	import { onMount } from 'svelte'
	import { supabase } from '$lib/supabaseClient'
	import Title from '$lib/components/Title.svelte'
	import Button from '$lib/components/Button.svelte'

	onMount(() => {
		const form = document.querySelector('#contact-form')
		form?.addEventListener('submit', async (event) => {
			event.preventDefault()
			const formInputs = form.querySelectorAll('input:not([type="submit"]), #message')
			let submission = {}

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

	<!-- <p>Reach out and say Hi.</p> -->

	<div class="contact-form">
		<form id="contact-form">
			<label for="email"
				><h2>Your Name</h2>
				<input
					type="text"
					id="name"
					name="sender_name"
					placeholder="Your name"
					class="textfield"
					required
				/>
			</label>
			<label for="name"
				><h2>Your email</h2>
				<input type="email" id="email" name="email" placeholder="Email address" />
			</label>
			<p>
				<small
					>I only need your email if you would like a response. I will never share your email and
					you are not signing up for anything.</small
				>
			</p>
			<label for="message"
				><h2>Your message</h2>
				<textarea id="message" name="message" placeholder="Enter your text here" required />
			</label>
			<input type="hidden" name="sent" value="2024-08-09T12:04:38Z" />

			<input type="submit" value="Submit" />
		</form>
	</div>
</section>

<style lang="scss">
	.title {
		margin: 7em auto 0 auto;
	}
	.header {
		margin: 0 0 2em 0;
	}
	section {
		width: 50vw;
		margin: 0 auto;
	}
	.contact-form {
		padding: 2em;
		background-color: rgba(255, 255, 255, 0.25);
		border: 1px solid white;
		border-radius: 20px;
	}
	form {
		color: white;
		display: flex;
		flex-direction: column;
		gap: 1em;
	}
	input[type='text'],
	input[type='email'] {
		font-family: 'Raleway', sans-serif;
		font-size: 2em;
		width: 100%;
		background-color: white;
		padding: 10px;
		outline: none;
		box-sizing: border-box;
		border: 1px solid #979797;
		border-radius: 8px;
	}
	textarea {
		font-family: 'Georgia', serif;
		font-size: 1em;
		width: 100%;
		height: 150px;
		padding: 10px;
		background-color: white;
		border: 1px solid #979797;
		border-radius: 8px;
		box-sizing: border-box;
		resize: none;
		overflow-y: auto;
	}
	input[type='submit'] {
		font-family: 'Raleway', sans-serif;
		font-weight: 700;
		display: block;
		position: relative;
		text-align: center;
		text-transform: uppercase;
		color: white;
		width: 140px;
		background-color: rgba(179, 57, 249, 1);
		padding: 0.5em;
		margin: 1em 0 1em 0;
		border: 1px solid rgba(255, 255, 255, 1);
		border-radius: 30px;
	}
</style>
