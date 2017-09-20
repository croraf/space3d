const loop = (i) => {

    console.log('rafa', i);

    if (i === 0) {
        postMessage('gotov sam');
        return;
    }
    else setTimeout(()=>{loop(i-1);}, 500);
};

loop(10);

onmessage = (event) => {
    console.log(event.data);
};

/* export default loop; */
