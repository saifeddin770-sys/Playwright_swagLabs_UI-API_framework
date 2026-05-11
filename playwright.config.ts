import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

testDir: './tests',

reporter: [
['html', { outputFolder: 'reports' }]
],

use: {
headless: false,
viewport: null,

launchOptions: {
args: ['--start-maximized']
}
},

projects: [

{
name: 'Chrome',
use: {
...devices['Desktop Chrome']
}
},

{
name: 'Firefox',
use: {
...devices['Desktop Firefox']
}
}
],

globalSetup: require.resolve('./src/utils/logger.ts')
});