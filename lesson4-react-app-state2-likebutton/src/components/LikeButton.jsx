import { useState } from "react";
import "./LikeButton.css";

function LikeButton() {
    // 좋아요 state hook : 상태 관리
    const [isLiked, setIsLiked] = useState(false);  // 좋아요 상태 확인
    const[likeCount, setLikeCount] = useState(0);   // 좋아요 수

    // 좋아요 버튼 클릭 이벤트 핸들러 (담당자) : 좋아요 클릭하면 실행될 함수 객체
    const handleLikeClick = () => {
        setIsLiked(!isLiked);   // 좋아요 상태 토글 true -> false, false -> true
        if (isLiked) {
            setLikeCount(likeCount - 1);    // 좋아요 취소
        } else {
            setLikeCount(likeCount + 1);    // 좋아요 시 +1
        }
    };

    // 리셋 버튼 클릭 이벤트 핸들러 : 리셋 버튼 클릭되면 실행될 함수를 정의해서 const에 등록
    const handleReset = () => {
        setIsLiked(false);
        setLikeCount(0);
    };


    return (
        <div className="like-button">
        <h2>좋아요 버튼</h2>

        {/* 좋아요 버튼 - 상태에 따라 스타일 변경 */}
        <button onClick={handleLikeClick} className={`like-btn ${isLiked ? 'liked' : ''}`}>
            {isLiked ? '🩷' : '🤍'}
        </button>

        {/* 좋아요 개수 표시 */}
        <p className="like-count">좋아요 {likeCount}개</p>
        {/* 리셋 버튼 */}
        <button className="reset-btn" onClick={handleReset}>리셋</button>
        </div>
    );
}

export default LikeButton;
