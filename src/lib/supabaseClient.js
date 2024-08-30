import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
	'https://jiqafqtkoqjgopigprub.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppcWFmcXRrb3FqZ29waWdwcnViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ5NjY4NDEsImV4cCI6MjA0MDU0Mjg0MX0.lNOQ-2NcNSz_2yI-drC6x5OrNsjl1MDZ7blT4Fm2UBY'
)
