async function globalSetup() {

console.log('========== TEST EXECUTION STARTED ==========');

process.on('exit', () => {

console.log('========== TEST EXECUTION FINISHED ==========');
});
}

export default globalSetup;         