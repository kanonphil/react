import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UpdateForm.css';

const UpdateForm = () => {
  const { boardNum } = useParams();
  const navigate = useNavigate();
  
  // 원본 데이터 (서버에서 받아온 그대로)
  const [originalBoard, setOriginalBoard] = useState({
    boardNum: '',
    title: '',
    writer: '',
    content: '',
    regDate: '',
    readCnt: 0
  });
  
  // 수정할 데이터 (변경사항만 담김)
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  useEffect(() => {
    // 기존 게시글 데이터 불러오기
    const fetchBoardDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/boards/update/${boardNum}`);
        setOriginalBoard(response.data);
        // formData에도 초기값 설정
        setFormData({
          title: response.data.title,
          content: response.data.content
        });
      } catch (error) {
        console.error('게시글 조회 실패:', error);
        alert('게시글을 불러올 수 없습니다.');
        navigate('/');
      }
    };

    fetchBoardDetail();
  }, [boardNum, navigate]);

  // 입력 값 변경 처리 (formData만 업데이트)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // 게시글 수정
  const handleSubmit = async () => {
    if (!formData.title.trim()) {
      alert('제목을 입력하세요.');
      return;
    }
    if (!formData.content.trim()) {
      alert('내용을 입력하세요.');
      return;
    }

    try {
      // 수정할 데이터만 전송
      await axios.put(`http://localhost:8080/boards/update/${boardNum}`, formData);
      alert('수정되었습니다.');
      navigate(`/detail/${boardNum}`);
    } catch (error) {
      console.error('게시글 수정 실패:', error);
      alert('게시글 수정에 실패했습니다.');
    }
  };

  const handleCancel = () => {
    if (window.confirm('수정을 취소하시겠습니까?')) {
      navigate(`/detail/${boardNum}`);
    }
  };

  return (
    <div className="update-form-container">
      <h2>글수정</h2>
      
      {/* 작성자 (원본 데이터 표시) */}
      <div className="form-group">
        <label>작성자</label>
        <input
          type="text"
          value={originalBoard.writer}
          disabled
          className="disabled-input"
        />
      </div>

      {/* 제목 (formData 사용) */}
      <div className="form-group">
        <label>제목</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="제목을 입력하세요"
        />
      </div>

      {/* 내용 (formData 사용) */}
      <div className="form-group">
        <label>내용</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="내용을 입력하세요"
          rows="10"
        />
      </div>

      {/* 작성일 (원본 데이터 표시) */}
      <div className="form-group">
        <label>작성일</label>
        <input
          type="text"
          value={originalBoard.regDate ? new Date(originalBoard.regDate).toLocaleString('ko-KR') : ''}
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