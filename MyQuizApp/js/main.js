'use strict'

{
    //それぞれの要素を取得
    const question = document.getElementById('question');
    const choices = document.getElementById('choices');
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');
    const scoreLabel = document.querySelector('#result > p');

    //クイズのデータを配列で用意
    const quizSet = shuffle([
        {q: '世界で一番大きな湖は？', c: ['カスピ海', 'カリブ海', '琵琶湖']},
        {q: '2の8乗は?', c: ['256', '64', '1024']},
        {q: '次のうち、最初にリリースされた言語は?', c: ['Python', 'Javiscript', 'HTML']},
    ]);

    //今何問目のクイズを解いているか
    let currentNum = 0;
    //一度しか答えられないように回答状況を定義
    let isAnswered;
    //正答数を管理　(最後にscoreを表示させるため)
    let score = 0;




    //シャッフルのための関数
    function shuffle(arr) {
        //iは最後の要素を示す　iが0より大きいところまでシャッフルする
        for (let i = arr.length - 1; i > 0; i--) {
            //完全なシャッフルのものを取り出す
            const j = Math.floor(Math.random() * (i + 1));
            //最後の要素とシャッフル要素を入れ替える
            [arr[j], arr[i]] = [arr[i], arr[j]]
        }
        return arr;
    }

    function checkAnswer(li) {
        //回答をする場面なのでisAnsweredをtrue またif文において===trueは省略できる
        // if (isAnswered === true) {
        if (isAnswered) {
            return;
        } 
        isAnswered = true;
        if (li.textContent === quizSet[currentNum].c[0]) {
            li.classList.add('correct');
            score++;
        } else {
            li.classList.add('wrong');
        }

        btn.classList.remove('disabled');
    }

    function setQuiz() {
        //はじめの段階ではisansweresはfalse
        isAnswered = false;
        //questionのテキストを入力
        question.textContent = quizSet[currentNum].q;
        //前の問題が残らないための処理　choisesのはじめの子要素がある限り消す
        while (choices.firstChild) {
            choices.removeChild(choices.firstChild);
        }

        //シャッフルするための関数を使用、引数には大元の選択肢の「コピー」　コピーにする理由は配列やオブジェクトを引数にしていすると値ではなく参照が渡されるので大元の配列も書き換えられてしまうから。コピーの仕方はスプレッド構文(...)を使用し配列の要素を展開し、それを[]で囲むことで新たな配列を作成している。
        const shuffledChoices = shuffle([...quizSet[currentNum].c]);

        //問題文のテキストを入力するためliを作成し、そこへひとつずつ代入
        shuffledChoices.forEach(choice => {
            const li = document.createElement('li');
            li.textContent = choice;
            li.addEventListener('click', () => {
                checkAnswer(li);
            });
            choices.appendChild(li);
        });

        if (currentNum === quizSet.length - 1) {
            btn.textContent = 'Show Score';
        }
    }

    setQuiz();

    btn.addEventListener('click', () => {
        if (btn.classList.contains('disabled')) {
            return;
        }
        btn.classList.add('disabled');
        //最後の問題であればscore表示、それ以外であれば次の問題(setQuiz())の条件分岐
        if (currentNum === quizSet.length - 1){
            scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`
            result.classList.remove('hidden');
        } else{
            currentNum++;
            setQuiz();
        }
    });


}