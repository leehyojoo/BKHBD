import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Confetti from "react-confetti";
import Typed from "typed.js";
import BirthdayCard from "./components/BirthdayCard";
import PhotoSlideshow from "./components/PhotoSlideshow";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const typedElement = useRef(null);
  const audioRef = useRef(null);
  const [isCardVisible, setIsCardVisible] = useState(false);

  useEffect(() => {
    // Typed.js 초기화
    const typed = new Typed(typedElement.current, {
      strings: [
        "Happy Birthday! 🎉",
        "생일 축하해! 🥳",
        "Feliz Cumpleaños! 🎁",
        "お誕生日おめでとう! 🎉",
        "Joyeux Anniversaire! 🎈",
        "生日快乐! 🎊",
        "Herzlichen Glückwunsch zum Geburtstag! 🎉",
        "Buon Compleanno! 🎂",
      ],
      typeSpeed: 75,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const openCard = () => {
    setIsCardVisible(true);
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch(console.error);
    }
  };

  return (
    <Router>
      <Menu />
      <div className="container">
        <Confetti width={window.innerWidth} height={window.innerHeight} />
        <h1 className="title">🎉 Happy Birthday BK YOON! 🎂</h1>
        <div className="typed-text" ref={typedElement}></div>

        <Routes>
          {/* 기본 경로에서 편지 카드 표시 */}
          <Route
            path="/"
            element={
              !isCardVisible ? (
                <button className="open-card-button" onClick={openCard}>
                  🎁 편지 열기
                </button>
              ) : (
                <BirthdayCard />
              )
            }
          />
          {/* 사진 슬라이드 페이지 */}
          <Route path="/slideshow" element={<PhotoSlideshow />} />
        </Routes>

        {/* 오디오 태그 */}
        <audio ref={audioRef} src="/music.mp3" loop />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
