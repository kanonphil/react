import axios from "axios"

const BASE_URL = 'http://localhost:8080'

// 댓글 목록 조회
export const fetchReplyList = async (boardNum) => {
  if (!boardNum || boardNum === 'null' || boardNum === 'undefined') {
    throw new Error('유효하지 않은 게시글 번호입니다.')
  }

  try {
    const response = await axios.get(`${BASE_URL}/replies/board/${boardNum}`)
    return response.data
  } catch (error) {
    console.error('댓글 조회 실패:', error)
    throw error
  }
}

// 댓글 등록
export const createReply = async (replyData) => {
  try {
    const response = await axios.post(`${BASE_URL}/replies`, replyData)
    return response.data
  } catch (error) {
    console.error('댓글 등록 실패:', error)
    throw error
  }
}

// 댓글 삭제
export const deleteReply = async (replyNum) => {
  try {
    await axios.delete(`${BASE_URL}/replies/${replyNum}`)
  } catch (error) {
    console.error('댓글 삭제 실패:', error)
    throw error
  }
}