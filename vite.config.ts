import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.tsx'],
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: '127.0.0.1',
        port: 5173,
        strictPort: true, // ポートが使用中ならエラーを出す
        hmr: {
            protocol: 'ws', // WebSocket を使用
            host: '127.0.0.1',
            port: 5173, // クライアント側の HMR ポート
            clientPort: 5173, // HMR の WebSocket 用ポート
        },
    },
});
