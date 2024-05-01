import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from "@vitejs/plugin-react-refresh";
import million from 'million/compiler'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh(), million.vite({
    auto: {
      threshold: 0.05,
      skip: ["useBadHook", /badVariable/g],
    },
  }),],
})