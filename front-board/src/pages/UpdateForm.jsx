import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UpdateForm.css';

const UpdateForm = () => {
  const { boardNum } = useParams();  // URL에서 boardNum 추출
  const navigate = useNavigate();
  
  const [board, setBoard] = useState({
    boardNum: boardNum,
    title: '',
    writer: '',
    content: '',
    regDate: '',
    readCnt: 0
  });

  useEffect(() => {
    fetchBoardDetail();
  }, []);

  // 기존 게시글 데이터 불러오기
  const fetchBoardDetail = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/boards/update/${boardNum}`);
      setBoard(response.data);
    } catch (error) {
      console.error('게시글 조회 실패:', error);
      alert('게시글을 불러올 수 없습니다.');
      navigate('/');
    }
  };

  // 입력 값 변경 처리
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoard({
      ...board,
      [name]: value
    });
  };

  // 게시글 수정
  const handleSubmit = async () => {
    // 유효성 검사
    if (!board.title.trim()) {
      alert('제목을 입력하세요.');
      return;
    }
    if (!board.content.trim()) {
      alert('내용을 입력하세요.');
      return;
    }

    try {
      await axios.put(`http://localhost:8080/boards/update/${boardNum}`, {
        title: board.title,
        content: board.content
      });
      alert('수정되었습니다.');
      navigate(`/detail/${boardNum}`);  // 상세 페이지로 이동
    } catch (error) {
      console.error('게시글 수정 실패:', error);
      alert('게시글 수정에 실패했습니다.');
    }
  };

  // 취소
  const handleCancel = () => {
    if (window.confirm('수정을 취소하시겠습니까?')) {
      navigate(`/detail/${boardNum}`);
    }
  };

  return (
    <div className="update-form-container">
      <h2>글수정</h2>
      
      {/* 작성자 (수정 불가) */}
      <div className="form-group">
        <label>작성자</label>
        <input
          type="text"
          value={board.writer}
          disabled
          className="disabled-input"
        />
      </div>

      {/* 제목 (수정 가능) */}
      <div className="form-group">
        <label>제목</label>
        <input
          type="text"
          name="title"
          value={board.title}
          onChange={handleChange}
          placeholder="제목을 입력하세요"
        />
      </div>

      {/* 내용 (수정 가능) */}
      <div className="form-group">
        <label>내용</label>
        <textarea
          name="content"
          value={board.content}
          onChange={handleChange}
          placeholder="내용을 입력하세요"
          rows="10"
        />
      </div>

      {/* 작성일 (수정 불가) */}
      <div className="form-group">
        <label>작성일</label>
        <input
          type="text"
          value={board.regDate ? new Date(board.regDate).toLocaleString('ko-KR') : ''}
          disabled
          className="disabled-input"
        />
      </div>

      {/* 조회수 (수정 불가) */}
      <div className="form-group">
        <label>조회수</label>
        <input
          type="text"
          value={board.readCnt}
          disabled
          className="disabled-input"
        />
      </div>

      {/* 버튼 그룹 */}
      <div className="button-group">
        <button className="submit-btn" onClick={handleSubmit}>
          수정
        </button>
        <button className="cancel-btn" onClick={handleCancel}>
          취소
        </button>
      </div>
    </div>
  );
};

export default UpdateForm;