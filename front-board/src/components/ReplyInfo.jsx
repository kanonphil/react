import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './ReplyInfo.module.css'

const ReplyInfo = ({boardNum}) => {
  const [replyList, setReplyList] = useState([])
  const [reply, setReply] = useState({
    writer: '',
    content: '',
    boardNum: boardNum
  })

  useEffect(() => {
    fetchReplyList()
  }, [boardNum])

  // 댓글 목록 조회
  const fetchReplyList = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/boards/reply/list/${boardNum}`
      )
      setReplyList(response.data)
    } catch (error) {
      console.error('댓글 조회 실패:', error);
    }
  }

  // 댓글 입력 처리
  const handleReplyChange = (e) => {
    const {name, value} = e.target
    setReply({
      ...reply,
      [name]: value
    })
  }
  
  // 댓글 등록
  const handleReplySubmit = async () => {
    if (!reply.writer.trim()) {
      alert('작성자를 입력하세요.')
      return
    }
    if (!reply.content.trim()) {
      alert('댓글 내용을 입력하세요.')
      return
    }

    try {
      await axios.post('http://localhost:8080/boards/reply/reg', reply)
      alert('댓글이 등록되었습니다.')
      setReply({
        writer: '',
        content: '',
        boardNum: boardNum
      })
      fetchReplyList()
    } catch (error) {
      console.error('댓글 등록 실패:', error);
      alert('댓글 등록에 실패했습니다.')
    }
  }

  // 댓글 삭제
  const handleReplyDelete = async (replyNum) => {
    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      try {
        await axios.delete(
          `http://localhost:8080/boards/reply/delete/${replyNum}`
        )
        alert('댓글이 삭제되었습니다.')
        fetchReplyList()
      } catch (error) {
        console.error('댓글 삭제 실패:', error);
        alert('댓글 삭제에 실패했습니다.')        
      }
    }
  }

  return (
    <div className={styles.replySection}>
      <h3>댓글 ({replyList.length})</h3>

      {/* 댓글 목록 */}
      <div className={styles.replyList}>
        {replyList.length > 0 ? (
          replyList.map((reply, index) => (
            <div key={`reply-${reply.replyNum || index}`} className={styles.replyItem}>
              <div className={styles.replyHeader}>
                <span className={styles.replyWriter}>{reply.writer}</span>
                <span className={styles.replyDate}>
                  {new Date(reply.regDate).toLocaleString('ko-KR')}
                </span>
              </div>
              <div className={styles.replyContent}>{reply.content}</div>
              <button
                className={styles.replyDeleteBtn}
                onClick={() => handleReplyDelete(reply.replyNum)}
              >
                삭제
              </button>
            </div>
          ))
        ) : (
          <div className={styles.noReply}>댓글이 없습니다.</div>
        )}
      </div>

      {/* 댓글 작성 폼 */}
      <div className={styles.replyForm}>
        <h4>댓글 작성</h4>
        <div className={styles.formGroup}>
          <input
            type="text"
            name="writer"
            value={reply.writer}
            onChange={handleReplyChange}
            placeholder="작성자"
          />
        </div>
        <div className={styles.formGroup}>
          <textarea
            name="content"
            value={reply.content}
            onChange={handleReplyChange}
            placeholder="댓글 내용을 입력하세요"
            rows="3"
          />
        </div>
        <button className={styles.replySubmitBtn} onClick={handleReplySubmit}>
          댓글 등록
        </button>
      </div>
    </div>
  );
};

export default ReplyInfo