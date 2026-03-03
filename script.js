// HTMLが全部読み込まれてからJSを動かすおまじない
document.addEventListener('DOMContentLoaded', () => {
    
    // idが「hello-btn」のボタンを探してくる
    const btn = document.getElementById('hello-btn');

    // ボタンがクリックされた時の処理
    btn.addEventListener('click', () => {
        alert('JavaScriptが動いたよ!開発スタート！🔥');
    });

});