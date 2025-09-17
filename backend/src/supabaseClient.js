const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = `https://eyjtoogczwmuwqjmdayj.supabase.co`;
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5anRvb2djendtdXdxam1kYXlqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODA0ODc5MywiZXhwIjoyMDczNjI0NzkzfQ.HusJRtjeImAbvDJLaA6LDRTvorHo0Znbh-Ur7q3DQhQ`;

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase ;
