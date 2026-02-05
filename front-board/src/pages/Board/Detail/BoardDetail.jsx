import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReplyInfo from '../../../components/Reply/ReplyInfo';
import styles from './BoardDetail.module.css';
import { deleteBoard, fetchBoardDetail } from '../../../api/BoardApi';

const BoardDetail = () => {
  const { boardNum } = useParams();
  const navigate = useNavigate();
  const [board, setBoard] = useState(null);

  useEffect(() => {
    const loadBoardDetail = async () => {
      try {
        const data = await fetchBoardDetail(boardNum)
        setBoard(data);
      } catch (error) {
        alert('게시글을 불러올 수 없습니다.');
      }
    };

    loadBoardDetail();
  }, [boardNum]);



  const handleDelete = async () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      try {
        await deleteBoard(boardNum)
        alert('삭제되었습니다.');
        navigate('/');
      } catch (error) {
        alert('삭제에 실패했습니다.');
      }
    }
  };

  const handleUpdate = () => {
    navigate(`/update/${boardNum}`);
  };

  if (!board) {
    return <div className={styles.loading}>로딩 중...</div>;
  }

  return (
    <div className={styles.boardDetailContainer}>
      <h2>게시글 상세</h2>

      <div className={styles.boardInfo}>
        <div className={styles.infoRow}>
          <span className={styles.label}>제목</span>
          <span className={styles.value}>{board.title}</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.label}>작성자</span>
          <span className={styles.value}>{board.writer}</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.label}>작성일</span>
          <span className={styles.value}>
            {new Date(board.regDate).toLocaleString('ko-KR')}
          </span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.label}>조회수</span>
          <span className={styles.value}>{board.readCnt}</span>
        </div>
      </div>

      <div className={styles.boardContent}>{board.content}</div>

      <div className={styles.buttonGroup}>
        <button className={styles.listBtn} onClick={() => navigate('/')}>
          목록
        </button>
        <button className={styles.updateBtn} onClick={handleUpdate}>
          수정
        </button>
        <button className={styles.deleteBtn} onClick={handleDelete}>
          삭제
        </button>
      </div>

      <ReplyInfo boardNum={boardNum} />
    </div>
  );
};

export default BoardDetail;