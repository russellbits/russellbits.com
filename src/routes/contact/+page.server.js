// @ts-ignore
import { supabase } from '$lib/supabaseClient'

export async function load() {
	// const { error, data } = await supabase.from('russellbits_messages').select('*').eq('id', 1)
	const { error, data } = await supabase
		.from('russellbits_messages')
		.select('*')
		.order('id', { ascending: false })
		.limit(1)
	console.log('Attempting to receive data...')
	console.log(error)
	console.log(data)
	return {
		russellbits_messages: data ?? []
	}
}
