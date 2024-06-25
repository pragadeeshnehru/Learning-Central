//js exectues before html loaded into dom causing null type error
window.onload = function() {
    const calculator = document.querySelector('.calculator');
    const keys = document.querySelector('.calculator_keys');
    keys.addEventListener('click', e => {
        if(e.target.matches('button')){
            const key = e.target;
            const action = key.dataset.action;
            if(!action) {
                console.log("number key");
            }
            if( action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide'){
                console.log('operator key');
            }
            if(action === 'decimal'){
                console.log('decimal key');
            }
            if(action === 'clear'){
                console.log('clear key');
            }
            if(action === 'compute'){
                console.log('equals key');
            }
        }
    })
}