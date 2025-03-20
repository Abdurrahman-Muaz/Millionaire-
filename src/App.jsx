import { useMemo, useState, useEffect } from "react";
import "./app.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("₺ 0");
  const [stop, setStop] = useState(false);

  const moneyPyramid = useMemo(
    () => [
      { id: 15, amount: "₺ 1.000.000" },
      { id: 14, amount: "₺ 500.000" },
      { id: 13, amount: "₺ 250.000" },
      { id: 12, amount: "₺ 125.000" },
      { id: 11, amount: "₺ 64.000" },
      { id: 10, amount: "₺ 32.000" },
      { id: 9, amount: "₺ 16.000" },
      { id: 8, amount: "₺ 8.000" },
      { id: 7, amount: "₺ 4.000" },
      { id: 6, amount: "₺ 2.000" },
      { id: 5, amount: "₺ 1.000" },
      { id: 4, amount: "₺ 500" },
      { id: 3, amount: "₺ 300" },
      { id: 2, amount: "₺ 200" },
      { id: 1, amount: "₺ 100" },
    ],
    []
  );

  const data = [
    {
      id: 1,
      question: "İstanbul'un fethi hangi yılda gerçekleşmiştir?",
      answers: [
        { text: "1453", correct: true },
        { text: "1454", correct: false },
        { text: "1452", correct: false },
        { text: "1455", correct: false },
      ],
    },
    {
      id: 2,
      question: "Hangi gezegen Güneş Sistemi'nde en büyüktür?",
      answers: [
        { text: "Mars", correct: false },
        { text: "Dünya", correct: false },
        { text: "Jüpiter", correct: true },
        { text: "Satürn", correct: false },
      ],
    },
    {
      id: 3,
      question: "DNA'daki bilgiler hangi yapılarla kodlanır?",
      answers: [
        { text: "Enzimler", correct: false },
        { text: "Proteinler", correct: false },
        { text: "Baz çiftleri", correct: true },
        { text: "Yağ asitleri", correct: false },
      ],
    },
    {
      id: 4,
      question: "Hangi element periyodik tabloda 'Fe' sembolü ile gösterilir?",
      answers: [
        { text: "Demir", correct: true },
        { text: "Flor", correct: false },
        { text: "Fosfor", correct: false },
        { text: "Fermiyum", correct: false },
      ],
    },
    {
      id: 5,
      question: "Türkiye Büyük Millet Meclisi hangi tarihte açılmıştır?",
      answers: [
        { text: "29 Ekim 1923", correct: false },
        { text: "23 Nisan 1920", correct: true },
        { text: "30 Ağustos 1922", correct: false },
        { text: "19 Mayıs 1919", correct: false },
      ],
    },
    {
      id: 6,
      question:
        "Aşağıdakilerden hangisi Nobel Ödülü kategorilerinden biri değildir?",
      answers: [
        { text: "Fizik", correct: false },
        { text: "Tıp", correct: false },
        { text: "Matematik", correct: true },
        { text: "Edebiyat", correct: false },
      ],
    },
    {
      id: 7,
      question: "'Guernica' hangi ünlü ressamın eseridir?",
      answers: [
        { text: "Vincent van Gogh", correct: false },
        { text: "Pablo Picasso", correct: true },
        { text: "Salvador Dali", correct: false },
        { text: "Claude Monet", correct: false },
      ],
    },
    {
      id: 8,
      question: "Bir byte kaç bit içerir?",
      answers: [
        { text: "4", correct: false },
        { text: "8", correct: true },
        { text: "16", correct: false },
        { text: "32", correct: false },
      ],
    },
    {
      id: 9,
      question: "Osmanlı İmparatorluğu'nun son padişahı kimdir?",
      answers: [
        { text: "II. Abdülhamid", correct: false },
        { text: "V. Mehmed", correct: false },
        { text: "VI. Mehmed Vahideddin", correct: true },
        { text: "II. Mahmud", correct: false },
      ],
    },
    {
      id: 10,
      question:
        "Hangi ülke, hem Asya hem de Avrupa kıtalarında topraklara sahiptir?",
      answers: [
        { text: "Rusya", correct: true },
        { text: "Mısır", correct: false },
        { text: "Japonya", correct: false },
        { text: "Brezilya", correct: false },
      ],
    },
    {
      id: 11,
      question: "Hangisi insanoğlunun Ay'a ilk ayak basan astronotudur?",
      answers: [
        { text: "Yuri Gagarin", correct: false },
        { text: "Neil Armstrong", correct: true },
        { text: "Buzz Aldrin", correct: false },
        { text: "Alan Shepard", correct: false },
      ],
    },
    {
      id: 12,
      question: "'Hamlet' hangi ünlü yazarın eseridir?",
      answers: [
        { text: "Charles Dickens", correct: false },
        { text: "William Shakespeare", correct: true },
        { text: "Jane Austen", correct: false },
        { text: "Victor Hugo", correct: false },
      ],
    },
    {
      id: 13,
      question: "Hangisi bir doğal sayıdır?",
      answers: [
        { text: "0", correct: true },
        { text: "-1", correct: false },
        { text: "1/2", correct: false },
        { text: "√2", correct: false },
      ],
    },
    {
      id: 14,
      question: "Aşağıdakilerden hangisi bir programlama dili değildir?",
      answers: [
        { text: "HTML", correct: true },
        { text: "Python", correct: false },
        { text: "JavaScript", correct: false },
        { text: "Java", correct: false },
      ],
    },
    {
      id: 15,
      question: "Cumhuriyet'in ilanı hangi tarihte olmuştur?",
      answers: [
        { text: "23 Nisan 1920", correct: false },
        { text: "29 Ekim 1923", correct: true },
        { text: "30 Ağustos 1922", correct: false },
        { text: "10 Kasım 1938", correct: false },
      ],
    },
  ];

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  const resetGame = () => {
    setQuestionNumber(1);
    setEarned("₺ 0");
    setStop(false);
  };

  return (
    <div className="app">
      <div className="main">
        {stop ? (
          <div>
            <h1 className="endText"> {earned} : Kazandınız </h1>
            <button className="restartButton" onClick={resetGame}>
              Yeniden Başlat
            </button>
          </div>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer setStop={setStop} questionNumber={questionNumber} />
              </div>
            </div>
            <div className="bottom">
              <Trivia
                data={data}
                setStop={setStop}
                setQuestionNumber={setQuestionNumber}
                questionNumber={questionNumber}
              />
            </div>
          </>
        )}
      </div>
      <div className="moneyList">
        {moneyPyramid.map((m) => (
          <li
            key={m.id}
            className={
              questionNumber === m.id ? "moneyListItem active" : "moneyListItem"
            }
          >
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
