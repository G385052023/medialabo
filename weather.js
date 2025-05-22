
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log(data.name);
  console.log(data.weather[0].description);
  console.log(data.main.temp_max);
  console.log(data.main.temp_min);
  console.log(data.main.humidity);
}

let b = document.querySelector('button#search');
b.addEventListener('click', showSelectResult);

function showSelectResult() {
  let s = document.querySelector('select#city');
  let idx = s.selectedIndex;

  let os = s.querySelectorAll('option');
  let o = os.item(idx);

  console.log('選択された ' + idx + ' 番目の option の情報:');
  console.log('  value=' + o.getAttribute('value'));
  console.log('  textContent='+o.textContent);
}


// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let body = document.querySelector('body');
  let result = document.createElement('div');
  body.insertAdjacentElement('beforeend',result);

  let h2 = document.createElement('h2');
  result.insertAdjacentElement('beforeend',h2);
  h2.textContent = '結果'

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

// 課題5-1 のイベントハンドラの定義
function show() {

}

// 課題5-1, 6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

