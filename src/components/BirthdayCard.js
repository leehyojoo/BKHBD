import React from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 hook
import "./BirthdayCard.css"; // BirthdayCard 전용 스타일

function BirthdayCard() {
  const navigate = useNavigate(); // 페이지 이동 함수

  return (
    <div className="card-container">
      <div className="card">
        <h2>🎁 Happy Birthday!</h2>
        <p>
          <strong>BK</strong>를 위한 특별한 생일을 위해 🎂
        </p>
        <p>
          개발자인 내가 선물을 준비했단다 ㅎㅎ 🥳 <br />
          3가지 선물 중 하나가 바로 이 웹 사이트 ㅎㅎ 💛 <br />
          곧 사라지는 사이트라는 점은 참고 바라며 ,,
        </p>
        <p>
          <strong>25살</strong>이 된 2025년도, <br />
          지금처럼 멋지고 행복한 일들로 가득 차길 기도하고, <br />
          행복한 미소로 가득 찬 하루가 되길 진심으로 기원하마
        </p>
        <p>생일 진심으로 축하한다! 🎉</p>
        {/* 사진 보기 버튼 */}
        <button
          className="go-slideshow-button"
          onClick={() => navigate("/slideshow")}
        >
          📷 사진 보기
        </button>
      </div>
    </div>
  );
}

export default BirthdayCard;
