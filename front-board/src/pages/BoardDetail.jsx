import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BoardDetail.css';

const BoardDetail = () => {
  const { boardNum } = useParams();
  const navigate = useNavigate();
  
  const [board, setBoard] = useState(null);
  const [replyList, setReplyList] = useState([]);
  const [reply, setReply] = useState({
    writer: '',
    content: '',
    boardNum: boardNum
  });

  useEffect(() => {
    fetchBoardDetail();
    fetchReplyList();
  }, []);

  // 게시글 상세 조회
  const fetchBoardDetail = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/boards/detail/${boardNum}`);
      setBoard(response.data);
    } catch (error) {
      console.error('게시글 조회 실패:', error);
      alert('게시글을 불러올 수 없습니다.');
    }
  };

  // 댓글 목록 조회
  const fetchReplyList = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/boards/reply/list/${boardNum}`);
      setReplyList(response.data);
    } catch (error) {
      console.error('댓글 조회 실패:', error);
    }
  };

  // 게시글 삭제
  const handleDelete = async () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      try {
        await axios.delete(`http://localhost:8080/boards/delete/${boardNum}`);
        alert('삭제되었습니다.');
        navigate('/');
      } catch (error) {
        console.error('삭제 실패:', error);
        alert('삭제에 실패했습니다.');
      }
    }
  };

  // 수정 페이지로 이동
  const handleUpdate = () => {
    navigate(`/update/${boardNum}`);
  };

  // 댓글 입력 처리
  const handleReplyChange = (e) => {
    const { name, value } = e.target;
    setReply({
      ...reply,
      [name]: value
    });
  };

  // 댓글 등록
  const handleReplySubmit = async () => {
    if (!reply.writer.trim()) {
      alert('작성자를 입력하세요.');
      return;
    }
    if (!reply.content.trim()) {
      alert('댓글 내용을 입력하세요.');
      return;
    }

    try {
      await axios.post('http://localhost:8080/boards/reply/reg', reply);
      alert('댓글이 등록되었습니다.');
      setReply({ writer: '', content: '', boardNum: boardNum });
      fetchReplyList();
    } catch (error) {
      console.error('댓글 등록 실패:', error);
      alert('댓글 등록에 실패했습니다.');
    }
  };

  // 댓글 삭제
  const handleReplyDelete = async (replyNum) => {
    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      try {
        await axios.delete(`http://localhost:8080/boards/reply/delete/${replyNum}`);
        alert('댓글이 삭제되었습니다.');
        fetchReplyList();
      } catch (error) {
        console.error('댓글 삭제 실패:', error);
        alert('댓글 삭제에 실패했습니다.');
      }
    }
  };

  if (!board) {
    return <div className="loading">로딩 중...</div>;
  }

  return (
      <div className="board-detail-container">
        <h2>게시글 상세</h2>

        {/* 게시글 정보 */}
        <div className="board-info">
          <div className="info-row">
            <span className="label">제목</span>
            <span className="value">{board.title}</span>
          </div>
          <div className="info-row">
            <span className="label">작성자</span>
            <span className="value">{board.writer}</span>
          </div>
          <div className="info-row">
            <span className="label">작성일</span>
            <span className="value">
              {new Date(board.regDate).toLocaleString('ko-KR')}
            </span>
          </div>
          <div className="info-row">
            <span className="label">조회수</span>
            <span className="value">{board.readCnt}</span>
          </div>
        </div>

        {/* 게시글 내용 */}
        <div className="board-content">
          {board.content}
        </div>

        {/* 버튼 그룹 */}
        <div className="button-group">
          <button className="list-btn" onClick={() => navigate('/')}>
            목록
          </button>
          <button className="update-btn" onClick={handleUpdate}>
            수정
          </button>
          <button className="delete-btn" onClick={handleDelete}>
            삭제
          </button>
        </div>

        {/* 댓글 섹션 */}
        <div className="reply-section">
          <h3>댓글 ({replyList.length})</h3>

          {/* 댓글 목록 */}
          <div className="reply-list">
            {replyList.length > 0 ? (
              replyList.map((reply, index) => (
                <div key={`reply-${reply.replyNum || index}`} className="reply-item">
                  <div className="reply-header">
                    <span className="reply-writer">{reply.writer}</span>
                    <span className="reply-date">
                      {new Date(reply.regDate).toLocaleString('ko-KR')}
                    </span>
                  </div>
                  <div className="reply-content">{reply.content}</div>
                  <button 
                  className="reply-delete-btn"
                  onClick={() => handleReplyDelete(reply.replyNum)}
                  >
                    삭제
                  </button>
                </div>
              ))
            ) : (
              <div className="no-reply">댓글이 없습니다.</div>
            )}
          </div>

          {/* 댓글 작성 폼 */}
          <div className="reply-form">
            <h4>댓글 작성</h4>
            <div className="form-group">
              <input
                type="text"
                name="writer"
                value={reply.writer}
                onChange={handleReplyChange}
                placeholder="작성자"
              />
            </div>
            <div className="form-group">
              <textarea
                name="content"
                value={reply.content}
                onChange={handleReplyChange}
                placeholder="댓글 내용을 입력하세요"
                rows="3"
              />
            </div>
          <button className="reply-submit-btn" onClick={handleReplySubmit}>
            댓글 등록
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;