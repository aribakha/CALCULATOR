var input = document.getElementById("input");
function addvalue(val){
    input.value += val
}
function clearAll(){
    input.value = '';
}
function addAll(){
    var chartATT = input.value.charAt(input.value.length - 1)
    if (chartATT == '+' || chartATT == '-' || chartATT == '*' || chartATT == '/'){
        alert("incorrect")
        return
    }
    input.value = eval(input.value)
}
function deletelastvalue(){
    if (input == "C"){
        input.value = '';
    } else {
        input.value = input.value.slice(0,-1);
    };
};


