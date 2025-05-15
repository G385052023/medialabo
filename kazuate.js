// 答え
let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

let flag = false;

b = document.querySelector('button#ans');
b.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {

    kaisu += 1;
    let spanKaisu = document.querySelector('span#kaisu');
    spanKaisu.textContent = kaisu;

    let yoso = document.querySelector('input[name="num"]');
    yoso = Number(yoso.value);
    let spanAns = document.querySelector('span#answer');
    spanAns.textContent = yoso;

    let res;
    if (kaisu >= 4 || flag) {
        res = '答えは ' + kotae + ' でした．すでにゲームは終わっています';
    } else if (yoso === kotae) {
        res = '正解です．おめでとう!';
        flag = true;
    } else if (kaisu === 3) {
        res = 'まちがい．残念でした答えは ' + kotae + ' です．';
    } else if (yoso < kotae) {
        res = 'まちがい．答えはもっと大きいですよ';
    } else if (yoso > kotae) {
        res = 'まちがい．答えはもっと小さいですよ';
    }

    let result = document.querySelector('p#result');
    result.textContent = res;

}
