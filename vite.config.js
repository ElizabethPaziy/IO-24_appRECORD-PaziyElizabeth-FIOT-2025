import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: "/IO-24_appRECORD-PaziyElizabeth-FIOT-2025"
})
