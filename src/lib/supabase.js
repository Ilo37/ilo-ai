import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://loctqmqtfnvxliucyqsw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvY3RxbXF0Zm52eGxpdWN5cXN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzNTg5NDIsImV4cCI6MjA3NzkzNDk0Mn0.jPT1p7R5C1RvTU64p1MUT4c-IQFAynKIklS64BpgKFs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
