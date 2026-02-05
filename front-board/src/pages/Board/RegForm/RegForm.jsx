import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RegForm.module.css';
import { createBoard } from '../../../api/BoardApi';

const RegForm = () => {
  const [board, setBoard] = useState({
    title: '',
    writer: '',
    content: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoard({
      ...board,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    // 유효성 검사
    if (!board.title.trim()) {
      alert('제목을 입력하세요.');
      return;
    }
    if (!board.writer.trim()) {
      alert('작성자를 입력하세요.');
      return;
    }
    if (!board.content.trim()) {
      alert('내용을 입력하세요.');
      return;
    }

    try {
      await createBoard(board);
      alert('게시글이 등록되었습니다.');
      navigate('/');
    } catch (error) {
      alert('게시글 등록에 실패했습니다.');
    }
  };

  return (
    <div className={styles.regFormContainer}>
      <h2>게시글 작성 페이지</h2>
      
      <div className={styles.formGroup}>
        <label>제목</label>
        <input
          type="text"
          name="title"
          value={board.title}
          onChange={handleChange}
          placeholder="제목을 입력하세요"
        />
      </div>

      <div className={styles.formGroup}>
        <label>작성자</label>
        <input
          type="text"
          name="writer"
          value={board.writer}
          onChange={handleChange}
          placeholder="작성자를 입력하세요"
        />
      </div>

      <div className={styles.formGroup}>
        <label>내용</label>
        <textarea
          name="content"
          value={board.content}
          onChange={handleChange}
          placeholder="내용을 입력하세요"
          rows="10"
        />
      </div>

      <div className={styles.buttonGroup}>
        <button className={styles.submitBtn} onClick={handleSubmit}>
          글등록
        </button>
        <button className={styles.cancelBtn} onClick={() => navigate('/')}>
          취소
        </button>
      </div>
    </div>
  );
};

export default RegForm;