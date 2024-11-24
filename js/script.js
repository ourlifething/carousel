window.onload = function () {
  // 画面幅を取得
  const screenWidth = window.innerWidth;

  // ラジオボタンを操作
  if (screenWidth >= 767) {
    document.getElementById('page5').checked = true;
  } else {
    document.getElementById('page6').checked = true;
  }
};

// 画面リサイズ時にもチェックを更新（必要に応じて追加）
window.onresize = function () {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 767) {
    document.getElementById('page5').checked = true;
  } else {
    document.getElementById('page6').checked = true;
  }
};