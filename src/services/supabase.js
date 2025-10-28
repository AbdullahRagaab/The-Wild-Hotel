import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://jzkmkmsoabqdftucxqxb.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6a21rbXNvYWJxZGZ0dWN4cXhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA4OTUzNjIsImV4cCI6MjA3NjQ3MTM2Mn0.4os84XhBr6kVV_468waczIgXjlImpZpFZTttIv9_lfw"
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;