



function fibonachi(num) {
    let n = 0, n2 = 1, z = 1;
    for (let i = 1; i <= num; i++) {
        z = n + n2;
        n = n2;
        n2 = z;
    }
    return z;

}
document.querySelector('button').onclick = ()=>{
  let s = +prompt('Введите число')
  alert(fibonachi(s));
}