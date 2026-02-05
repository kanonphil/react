import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './ReplyInfo.module.css'
import { createReply, deleteReply, fetchReplyList } from '../../api/ReplyApi'

const ReplyInfo = ({boardNum}) => {
  const [replyList, setReplyList] = useState([])
  const [reply, setReply] = useState({
    writer: '',
    content: '',
    boardNum: boardNum
  })

  useEffect(() => {
    const loadReplyList = async () => {
      try {
        const data = await fetchReplyList(boardNum)
        setReplyList(data)
      } catch (error) {
        console.error('댓글 목록을 불러올 수 없습니다.');
      }
    }

    loadReplyList()
  }, [boardNum])

  const handleReplyChange = (e) => {
    const {name, value} = e.target
    setReply({
      ...reply,
      [name]: value
    })
  }
  
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
      await createReply(reply)
      alert('댓글이 등록되었습니다.')
      setReply({
        writer: '',
        content: '',
        boardNum: boardNum
      })
      
      const data = await fetchReplyList(boardNum)
      setReplyList(data)
    } catch (error) {
      alert('댓글 등록에 실패했습니다.')
    }
  }

  const handleReplyDelete = async (replyNum) => {
    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      try {
        await deleteReply(replyNum)
        alert('댓글이 삭제되었습니다.')
        const data = await fetchReplyList(boardNum)
        setReplyList(data)
      } catch (error) {
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
              <div className={styles.profileImage}>
                <img src="/face-03.jpg" alt="프로필" />
              </div>
              
              <div className={styles.replyBody}>
                <div className={styles.replyTop}>
                  <div className={styles.replyInfo}>
                    <span className={styles.replyWriter}>{reply.writer}</span>
                    <span className={styles.replyDate}>
                      {new Date(reply.regDate).toLocaleString('ko-KR')}
                    </span>
                  </div>
                  <button
                    className={styles.replyDeleteBtn}
                    onClick={() => handleReplyDelete(reply.replyNum)}
                  >
                    삭제
                  </button>
                </div>
                <div className={styles.replyContent}>{reply.content}</div>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.noReply}>댓글이 없습니다.</div>
        )}
      </div>

      {/* 댓글 작성 폼 */}
      <div className={styles.replyForm}>
        <h4>댓글 작성</h4>
        <div className={styles.replyFormContent}>
          <div className={styles.profileImage}>
            <img src="/face-03.jpg" alt="프로필" />
          </div>
          
          <div className={styles.formInputs}>
            <input
              type="text"
              name="writer"
              value={reply.writer}
              onChange={handleReplyChange}
              placeholder="작성자"
              className={styles.writerInput}
            />
            <div className={styles.contentArea}>
              <textarea
                name="content"
                value={reply.content}
                onChange={handleReplyChange}
                placeholder="댓글 내용을 입력하세요"
                rows="3"
              />
              <button className={styles.replySubmitBtn} onClick={handleReplySubmit}>
                등록
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplyInfo