import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const API_URL = `${env.VITE_API_URL}/api`;
  const isDev = mode === 'development'
  
  return {
    server: {
      proxy: {
        '^/proxy/capitolai/api/v(\\d+)': {
          target: API_URL,
          changeOrigin: isDev,
          secure: !isDev,
          rewrite: (path) => path.replace(/^\/proxy\/capitolai\/api\/v(\d+)/, '/v$1'),
        },
      },
    },
    plugins: [react()],
  }}
)
