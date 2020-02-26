import loadWasm from './lib.rs'

loadWasm().then(result => {
    const fibonocci_number = result.instance.exports['fibonocci_number'];
    console.log('return value was', fibonocci_number(32));
});