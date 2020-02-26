const js =
    import ("./node_modules/@lokeshrongali/fibonocci");

function fibonocci_number_in_js(number) {
    if (number < 2) {
        return number;
    }
    return fibonocci_number_in_js(number - 1) + fibonocci_number_in_js(number - 2)
}

js.then(js => {
    console.log("Starting Fibonocci execution in rust");
    let t0 = performance.now();
    const result = js.fibonocci_number(30);
    let t1 = performance.now();
    console.log("Call to rust fibonocci took " + (t1 - t0) + " milliseconds.");
    console.log(result)

    t0 = performance.now();
    const result2 = fibonocci_number_in_js(30);
    t1 = performance.now();
    console.log("Call to js fibonocci took " + (t1 - t0) + " milliseconds.");
    console.log(result2)
});