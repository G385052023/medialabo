
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log(data.name);
  console.log(data.weather[0].description);
  console.log(data.main.temp_max);
  console.log(data.main.temp_min);
  console.log(data.main.humidity);
}

//コンソールに表示用
let b = document.querySelector('button#search');
b.addEventListener('click', showSelectResult);

function showSelectResult() {
  let s = document.querySelector('select#city');
  let idx = s.selectedIndex;
  let os = s.querySelectorAll('option');
  let id = os.item(idx);
  
  console.log('選択された ' + idx + ' 番目の option の情報:');
  console.log('value=' + id.getAttribute('value'));
  console.log('textContent='+id.textContent);
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  if(document.querySelector('div') != null){
    let rmv = document.querySelector('div');
    rmv.remove();
  }

  let body = document.querySelector('body');
  let result = document.createElement('div');
  body.insertAdjacentElement('beforeend',result);

  let h2 = document.createElement('h2');
  result.insertAdjacentElement('beforeend',h2);
  h2.textContent = '結果';

  let table = document.createElement('table'); 
  result.insertAdjacentElement('beforeend',table);

  let tr = document.createElement('tr');
  table.insertAdjacentElement('beforeend',tr);
  let th = document.createElement('th');
  tr.insertAdjacentElement('beforeend',th);
  th.textContent = '項目';
  th = document.createElement('th');
  tr.insertAdjacentElement('beforeend',th);
  th.textContent = '結果';

  createTr(table,'都市名',data.name);
  createTr(table,'天気',data.weather[0].description);
  createTr(table,'最高気温',data.main.temp_max);
  createTr(table,'最低気温',data.main.temp_min);
  createTr(table,'湿度',data.main.humidity);
}

//表の行の追加の定義
function createTr(table,thName, dataName) {
  let tr = document.createElement('tr');
  table.insertAdjacentElement('beforeend',tr);
  let th = document.createElement('th');
  tr.insertAdjacentElement('beforeend',th);
  th.textContent = thName;
  let td = document.createElement('td');
  tr.insertAdjacentElement('beforeend',td);
  td.textContent = dataName;
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
b.addEventListener('click', sendRequest);

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let s = document.querySelector('select#city');
  let idx = s.selectedIndex;
  let os = s.querySelectorAll('option');
  let id = os.item(idx);
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+id.getAttribute('value')+'.json';

  axios.get(url).then(showResult).catch(showError).then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

	if (typeof data === 'string') {
		data = JSON.parse(data);
	}

  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}
