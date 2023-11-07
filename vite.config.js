import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import monkey, {cdn} from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        monkey({
            entry: 'src/main.jsx',
            userscript: {
                name: '宜搭+',
                icon: 'https://www.google.com/s2/favicons?sz=64&domain=aliwork.com',
                namespace: 'npm/vite-plugin-monkey',
                version: '2.2.3',
                match: ['https://*.aliwork.com/alibaba/web/*/design/*'],
                author: 'Navcoo.Li',
            },
            build: {
                externalGlobals: {
                    'react': cdn.jsdelivr('React', 'umd/react.production.min.js'),
                    'react-dom': cdn.jsdelivr('ReactDOM', 'umd/react-dom.production.min.js'),
                    'XLSX': ['XLSX','https://cdn.bootcdn.net/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'],
                },
            },
        }),
    ],
});
