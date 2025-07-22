function appendValue(val){
    document.getElementById('display').value += val;
}
function calculate(){
    let input=document.getElementById('display').value;
    let result = 0;
    if (input.includes('+')){
        let[a,b] = input.split('+'); 
        result = +a + +b;
    }
    else if (input.includes('-')){
        let [a,b] = input.split('-');
        result = +a - +b;   
    }
    else if (input.includes('*')){
        let [a,b] = input.split('*');
        result = +a * +b;   
    }
    else if (input.includes('/')){
        let [a,b] = input.split('/');
        result = +b === 0 ? 'infinity' :+a/+b  ;   
    }
    else if (input.includes('%')){
        let [a,b] = input.split('%');
        result = +a % +b;   
    }
    else{
        result = 'invalid';
    }
    document.getElementById('display').value = result;
}
function clearDisplay(){
    document.getElementById('display').value = '';
}
function deleteLast(){
    let current = document.getElementById('display').value;
    document.getElementById('display').value = current.slice(0,-1);
}

