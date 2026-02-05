import axios from "axios";

const BASE_URL = 'http://localhost:8080'

/**
 * 게시글 목록 조회 (전체 or 검색)
 * @param {string} [searchType]
 * @param {string} [keyword] 
 * @returns {Promise<Array<Object>>}
 * @throws {Error}
 * @example
 * // 전체 목록
 * const boards = await fetchBoardList()
 * 
 * // 제목 검색
 * const boards = await fetchBoardList('title', 'React')
 */
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

/**
 * 게시글 상세 조회
 * @param {number} boardNum 
 * @returns {Promise<Object>}
 * @throws {Error}
 * @example
 * const board = await fetchBoardDetail(123)
 * console.log(board.title, board.writer)
 */
export const fetchBoardDetail = async (boardNum) => {
  try {
    const response = await axios.get(`${BASE_URL}/boards/${boardNum}`);
    return response.data
  } catch (error) {
    console.error('게시글 조회 실패:', error);
    throw error;
  }
};

/**
 * 게시글 수정용 조회
 * @param {number} boardNum 
 * @returns {Promise<Object>}
 * @throws {Error}
 * @example
 * const board = await fetchBoardDetail(123)
 * console.log(board.title, board.writer)
 */
export const fetchBoardForEdit = async (boardNum) => {
  try {
    const response = await axios.get(`${BASE_URL}/boards/${boardNum}/edit`)
    return response.data
  } catch (error) {
    console.error('게시글 수정용 조회 실패:', error)
    throw error
  }
}

/**
 * 새 게시글 등록
 * @param {Object} boardData 
 * @param {string} boardData.title
 * @param {string} boardData.writer
 * @param {string} boardData.content
 * @returns {Promise<Object>}
 * @throws {Error}
 * @example
 * const newBoard = await createBoard({
 *   title: 'React 학습',
 *   writer: '홍길동',
 *   content: 'React는 재미있습니다'
 * })
 */
export const createBoard = async (boardData) => {
  try {
    const response = await axios.post(`${BASE_URL}/boards`, boardData)
    return response.data
  } catch (error) {
    console.error('게시글 등록 실패:', error)
    throw error
  }
}

/**
 * 게시글 수정
 * @param {number} boardNum 
 * @param {Object} boardData
 * @param {string} boardData.title
 * @param {string} boardData.content
 * @returns {Promise<Object>}
 * @throws {Error}
 * @example
 * const updated = await updateBoard(123, {
 *   title: '수정된 제목',
 *   content: '수정된 내용'
 * })
 */
export const updateBoard = async (boardNum, boardData) => {
  try {
    const response = await axios.put(`${BASE_URL}/boards/${boardNum}`, boardData)
    return response.data
  } catch (error) {
    console.error('게시글 수정 실패:', error)
    throw error
  }
}

/**
 * 게시글 삭제
 * @param {number} boardNum 
 * @returns {Promise<void>}
 * @throws {Error}
 * @example
 * await deleteBoard(123)
 * console.log('삭제 완료')
 */
export const deleteBoard = async (boardNum) => {
  try {
    await axios.delete(`${BASE_URL}/boards/${boardNum}`)
  } catch (error) {
    console.error('게시글 삭제 실패:', error)
    throw error
  }
}