import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './BoardList.css'

const BoardList = () => {
  const [boardList, setBoardList] = useState([])
  const [searchType, setSearchType] = useState('title')
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    fetchBoardList()
  }, [])

  const fetchBoardList = async () => {
    try {
      const response = await axios.get('http://localhost:8080/board')
      setBoardList(response.data)
    } catch (error) {
      console.log('게시글 목록 조회 실패:', error)
    }
  }

  const handleSearch = async () => {
    if (!keyword.trim()) {
      alert('검색어를 입력하세요.')
      return
    }
    try {
      const response = await axios.get(`http://localhost:8080/board/search?searchType=${searchType}&keyword=${keyword}`)
      setBoardList(response.data)
    } catch (error) {
      console.log('검색 실패:', error)
    }
  }

  const handleTitleClick = (boardNum) => {
    navigate(`/detail/${boardNum}`);
  };

  const handleWriteClick = () => {
      navigate('/reg');
  };

  return (
    <div>
      <div className='search-box'>
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="search-select">
          <option value="title">제목</option>
          <option value="writer">작성자</option>
        </select>
        <input 
          type="text" 
          placeholder="검색어를 입력하세요"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' && handleSearch()}/>
        <button 
          type="button"
          onClick={handleSearch}>검색</button>
      </div>
      <table className='board-table'>
        <thead>
          <tr>
            <th>No</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {boardList.length > 0 ? (boardList.map((board, index) => (
            <tr key={board.boardNum}>
              <td>{boardList.length - index}</td>
              <td
                className='title-cell'
                onClick={() => handleTitleClick}
              >
                {board.title}
              </td>
              <td>{board.writer}</td>
              <td>{new Date(board.regDate).toLocaleString('ko-KR')}</td>
              <td>{board.readCnt}</td>
            </tr>
          ))) : (
            <tr>
              <td colSpan='5'>게시글이 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
      <button type="button" className='write-btn' onClick={handleWriteClick}>글쓰기</button>
    </div>
  )
}

export default BoardList