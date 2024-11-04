#!/bin/bash

set -euo pipefail

# Environment setup
export NEXTAUTH_URL="http://localhost:3000"
export API_URL="https://your-api-url.com"
export SUPABASE_URL="https://your-supabase-url.co"
export SUPABASE_KEY="your-supabase-key"

# Development mode
npm run dev

# Database startup (if needed)
# pg_ctl -D /path/to/postgres/data start

# Additional services (if needed)
# node ./server.js