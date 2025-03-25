// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// 用你的Supabase專案URL和API金鑰
const supabaseUrl = 'https://ldukrmltmhdbcegvihmp.supabase.co'; // 替換為你的Supabase專案URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkdWtybWx0bWhkYmNlZ3ZpaG1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5MDA4ODksImV4cCI6MjA1ODQ3Njg4OX0.AJMk8Ol3EfYEuHQKCDxFub9Xzfj1RgXXWWjSmi1ZQCo'; // 替換為你的匿名API金鑰

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
