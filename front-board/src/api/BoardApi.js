import axios from "axios";

const BASE_URL = 'http://localhost:8080'

// 게시글 목록 조회 (전체 or 검색)
export const fetchBoardList = async (searchType, keyword) => {
  try {
    const params = {}
    if (keyword && keyword.trim()) {
      params.searchType = searchType
      params.keyword = keyword.trim()
    }

    const response = await axios.get(`${BASE_URL}/boards`, {params});
    return response.data;

  } catch (error) {
    console.error('게시글 목록 조회 실패:', error);
    console.log(error.response)
    console.dir(error)
    throw error
  }
};

// 게시글 상세 조회
export const fetchBoardDetail = async (boardNum) => {
  try {
    const response = await axios.get(`${BASE_URL}/boards/${boardNum}`);
    return response.data
  } catch (error) {
    console.error('게시글 조회 실패:', error);
    throw error;
  }
};

// 게시글 수정용 조회
export const fetchBoardForEdit = async (boardNum) => {
  try {
    const response = await axios.get(`${BASE_URL}/boards/${boardNum}/edit`)
    return response.data
  } catch (error) {
    console.error('게시글 수정용 조회 실패:', error)
    throw error
  }
}

// 게시글 등록
export const createBoard = async (boardData) => {
  try {
    const response = await axios.post(`${BASE_URL}/boards`, boardData)
    return response.data
  } catch (error) {
    console.error('게시글 등록 실패:', error)
    throw error
  }
}

// 게시글 수정
export const updateBoard = async (boardNum, boardData) => {
  try {
    const response = await axios.put(`${BASE_URL}/boards/${boardNum}`, boardData)
    return response.data
  } catch (error) {
    console.error('게시글 수정 실패:', error)
    throw error
  }
}

// 게시글 삭제
export const deleteBoard = async (boardNum) => {
  try {
    await axios.delete(`${BASE_URL}/boards/${boardNum}`)
  } catch (error) {
    console.error('게시글 삭제 실패:', error)
    throw error
  }
}