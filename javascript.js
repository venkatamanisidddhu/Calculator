string = ""
let result = document.getElementById("result")
string = result.value

function addOperation(str) {
    let laststr = result.value[result.value.length - 1]
    if (result.value == '' || result.value == 0) {
        result.value = ""
    }
    else {
        if (laststr == "+" || laststr == "-" || laststr == "*" || laststr == "/" || laststr == "%") {
            result.value = result.value.substring(0, result.value.length - 1)
            result.value += str
        }
        else {
            result.value += str
        }
    }
}
function DeleteN() {
    result.value = result.value.substring(0, result.value.length - 1)
}
function clearResult() {
    result.value = 0
}
function addNumber(N) {
    if (result.value == 0) {
        result.value = ''
        result.value += N
    }
    else {
        result.value += N
    }
}
function Calculate() {
    try {
        result.value = eval(result.value)
    }
    catch (error) {
        result.value = "Error"
    }
}



