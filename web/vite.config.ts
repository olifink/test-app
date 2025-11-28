// @ts-ignore
import dns from 'dns'

import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'

// @ts-ignore
import { cedar } from "@cedarjs/vite";

// So that Vite will load on localhost instead of `127.0.0.1`.
// See: https://vitejs.dev/config/server-options.html#server-host.
dns.setDefaultResultOrder('verbatim')

const viteConfig: UserConfig = {
  plugins: [cedar()],
}

export default defineConfig(viteConfig)
