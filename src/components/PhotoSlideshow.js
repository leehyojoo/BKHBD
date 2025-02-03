import React from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 hook
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PhotoSlideshow.css";

function PhotoSlideshow() {
  const navigate = useNavigate(); // 페이지 이동 함수

  const settings = {
    dots: true, // 하단 네비게이션 점 표시
    infinite: true, // 무한 반복
    speed: 500, // 전환 속도
    slidesToShow: 3, // 한 화면에 표시할 이미지 수
    slidesToScroll: 1, // 스크롤할 때 이동할 이미지 수
    autoplay: true, // 자동 재생 활성화
    autoplaySpeed: 1500, // 자동 재생 간격 (1.5초)
    pauseOnHover: true, // 호버 시 재생 멈춤
    arrows: true, // 이전/다음 화살표 버튼
  };

  const photos = [
    { src: "/images/photo1.jpeg", alt: "추억 사진 1" },
    { src: "/images/photo2.jpeg", alt: "추억 사진 2" },
    { src: "/images/photo3.jpeg", alt: "추억 사진 3" },
    { src: "/images/photo4.jpeg", alt: "추억 사진 4" },
    { src: "/images/photo5.jpeg", alt: "추억 사진 5" },
    { src: "/images/photo6.jpeg", alt: "추억 사진 6" },
    { src: "/images/photo7.jpeg", alt: "추억 사진 7" },
    { src: "/images/photo8.jpeg", alt: "추억 사진 8" },
    { src: "/images/photo9.jpeg", alt: "추억 사진 9" },
    { src: "/images/photo10.jpeg", alt: "추억 사진 10" },
    { src: "/images/photo11.jpeg", alt: "추억 사진 11" },
    { src: "/images/photo12.jpeg", alt: "추억 사진 12" },
    { src: "/images/photo13.jpeg", alt: "추억 사진 13" },
    { src: "/images/photo14.jpeg", alt: "추억 사진 14" },
    { src: "/images/photo15.jpeg", alt: "추억 사진 15" },
    { src: "/images/photo16.jpeg", alt: "추억 사진 16" },
    { src: "/images/photo17.jpeg", alt: "추억 사진 17" },
    { src: "/images/photo18.jpeg", alt: "추억 사진 18" },
    { src: "/images/photo19.jpeg", alt: "추억 사진 19" },
    { src: "/images/photo20.jpeg", alt: "추억 사진 20" },
    { src: "/images/photo21.jpeg", alt: "추억 사진 21" },
    { src: "/images/photo22.jpeg", alt: "추억 사진 22" },
    { src: "/images/photo23.jpeg", alt: "추억 사진 23" },
  ];

  return (
    <div className="slideshow-container">
      <h2>📷 추억의 앨범</h2>
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index} className="slide">
            <img src={photo.src} alt={photo.alt} className="slide-image" />
          </div>
        ))}
      </Slider>
      {/* 홈으로 돌아가기 버튼 */}
      <button className="home-button" onClick={() => navigate("/")}>
        🏠 홈으로 돌아가기
      </button>
    </div>
  );
}

export default PhotoSlideshow;
