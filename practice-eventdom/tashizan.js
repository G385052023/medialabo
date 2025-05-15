b = document.querySelector('button#calc');
b.addEventListener('click', calc);
function calc() {
    let left = document.querySelector('input[name="left"]');
    let leftV = Number(left.value);
    let right = document.querySelector('input[name="right"]');
    let rightV = Number(right.value);
    let result = leftV + rightV;
    let answer = document.querySelector('span#answer');
    answer.textContent = result;
}
