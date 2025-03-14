<!-- contact/+page.svelte -->
<script>
	// @ts-nocheck
	// Import dependencies
	import { onMount } from 'svelte'
	import { supabase } from '$lib/supabaseClient'
	import Title from '$lib/components/Title.svelte'
	import Button from '$lib/components/Button.svelte'

	// Reactive variable for success message
	let successMessage = ''

	onMount(() => {
		const form = document.querySelector('#contact-form')
		form?.addEventListener('submit', async (event) => {
			event.preventDefault()

			// Collect form inputs
			const formInputs = form.querySelectorAll('input:not([type="submit"]), textarea')
			let submission = {}

			formInputs.forEach((element) => {
				const { value, name } = element
				if (value) {
					submission[name] = value
				}
			})

			// Add timestamp dynamically
			submission.sent = new Date().toISOString()

			// Split the name into first and last
			const nameParts = submission.sender_name?.split(' ') || []
			submission.first_name = nameParts[0] || null
			submission.last_name = nameParts.slice(1).join(' ') || null
			delete submission.sender_name // Remove the original name field

			console.log(submission)

			// Lookup user_id based on the email and if it doesn't exist, insert the new email
			let userData

			// Try to find existing user
			const { data: existingUser, error: findUserError } = await supabase
				.from('users')
				.select('id')
				.eq('email', submission.email)
				.maybeSingle()

			if (!existingUser) {
				// Create new user if they don't exist
				const { data: newUser, error: createUserError } = await supabase
					.from('users')
					.insert([
						{
							email: submission.email,
							first_name: submission.first_name,
							last_name: submission.last_name
						}
					])
					.select('id')
					.maybeSingle()

				if (createUserError) {
					console.error('Error creating user:', createUserError)
					successMessage = 'Something went wrong. Please try again.'
					window.scrollTo({ top: 0, behavior: 'smooth' })
					return
				}
				userData = newUser
			} else {
				userData = existingUser
			}

			// Lookup site_id based on the site domain (russellbits.com from hidden field) and if it doesn't exist, default to `russellbits.com`
			const { data: siteData, error: siteError } = await supabase
				.from('sites')
				.select('id')
				.eq('domain', submission.site)
				.maybeSingle()

			if (siteError || !siteData) {
				console.error('Site not found:', siteError)
				successMessage = 'Configuration error: Site not found. Please contact the administrator.'
				window.scrollTo({ top: 0, behavior: 'smooth' })
				return
			}

			// Lookup category_id based on the message_category (general from hidden field) and if it doesn't exist, default to `general`
			const { data: categoryData, error: categoryError } = await supabase
				.from('message_categories')
				.select('id')
				.eq('name', submission.message_category)
				.maybeSingle()

			if (categoryError || !categoryData) {
				console.error('Category not found:', categoryError)
				successMessage =
					'Configuration error: Message category not found. Please contact the administrator.'
				window.scrollTo({ top: 0, behavior: 'smooth' })
				return
			}

			// Insert the message into the messages table
			const { error, data } = await supabase
				.from('messages')
				.insert([
					{
						user_id: userData.id,
						site_id: siteData.id,
						category_id: categoryData.id,
						message_text: submission.message,
						sent_at: new Date().toISOString() // Timestamp for when the message was sent
					}
				])
				.select()

			if (error) {
				console.error('Error saving message:', error)
				successMessage = 'Unable to save your message. Please try again later.'
				window.scrollTo({ top: 0, behavior: 'smooth' })
			} else {
				// Show success message
				successMessage = `Thanks, ${submission.first_name}! Your message was submitted to Russellbits.com`
				// Clear form fields
				form.reset()
				window.scrollTo({ top: 0, behavior: 'smooth' })
			}
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

	<!-- Success message display -->
	{#if successMessage}
		<p class="message">{successMessage}</p>
	{/if}

	<div class="contact-form">
		<form id="contact-form">
			<label for="name">
				<h2>Your Name</h2>
				<input
					type="text"
					id="name"
					name="sender_name"
					placeholder="Your name"
					class="textfield"
					required
				/>
			</label>
			<label for="email">
				<h2>Your email</h2>
				<input type="email" id="email" name="email" placeholder="email@address.tld" required />
			</label>
			<p>
				<small>
					I only need your email if you would like a response. I will never share your email and you
					are not signing up for anything.
				</small>
			</p>
			<label for="message">
				<h2>Your message</h2>
				<textarea id="message" name="message" placeholder="Enter your text here" required
				></textarea>
			</label>

			<input type="hidden" name="message_category" value="general" />
			<input type="hidden" name="site" value="russellbits.com" />

			<input type="submit" value="Submit" />
		</form>
	</div>
</section>

<style lang="scss">
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
	.message {
		// color: rgb(121, 255, 121);
		color: white;
		font-family: 'Raleway', sans-serif;
		font-size: 1.2em;
		font-weight: bold;
		margin-bottom: 15px;
		padding: 8px;
	}
</style>
