import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BoardList.css';

const BoardList = () => {
  const [boardList, setBoardList] = useState([]);
  const [searchType, setSearchType] = useState('title');
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchBoardList();
  }, []);

  // 게시글 목록 조회
  const fetchBoardList = async () => {
    try {
      const response = await axios.get('http://localhost:8080/boards/list');
      console.log('boardList:', response.data);
      setBoardList(response.data);
      setKeyword('')
    } catch (error) {
      console.error('게시글 목록 조회 실패:', error);
    }
  };

  // 검색 실행 (검색 버튼 클릭 또는 Enter 키)
  const handleSearch = async () => {
    // 검색어가 비어있으면 전체 목록 조회
    if (!keyword.trim()) {
      fetchBoardList();
      return;
    }
    
    try {
      const response = await axios.get(
        `http://localhost:8080/boards/search?searchType=${searchType}&keyword=${keyword}`
      );
      setBoardList(response.data);
    } catch (error) {
      console.error('검색 실패:', error);
      alert('검색에 실패했습니다.');
    }
  };

  // 제목 클릭
  const handleTitleClick = (boardNum) => {
    console.log('클릭됨! boardNum:', boardNum);
    navigate(`/detail/${boardNum}`);
  };

  // 글쓰기 버튼
  const handleWriteClick = () => {
    navigate('/reg');
  };

  return (
    <div className="board-list-container">
      <div className="search-box">
          <select 
              value={searchType} 
              onChange={(e) => setSearchType(e.target.value)}
              className="search-select"
          >
              <option value="title">제목</option>
              <option value="writer">작성자</option>
          </select>
          <input
              type="text"
              placeholder="검색어를 입력하세요"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                      handleSearch();
                  }
              }}
          />
          <button onClick={handleSearch}>검색</button>

      </div>

      <table className="board-table">
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
            {boardList.length > 0 ? (
              boardList.map((board, index) => (
                <tr key={board.boardNum}>
                  <td>{boardList.length - index}</td>
                  <td 
                    className="title-cell" 
                    onClick={() => handleTitleClick(board.boardNum)}
                  >
                    {board.title}
                  </td>
                  <td>{board.writer}</td>
                  <td>
                    {board.regDate ? new Date(board.regDate).toLocaleString('ko-KR') : ''}
                  </td>
                  <td>{board.readCnt}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">게시글이 없습니다.</td>
              </tr>
            )}
          </tbody>
      </table>

      <div className='button-group'>
        <button 
          className='list-btn'
          onClick={fetchBoardList}
        >
          전체목록
        </button>
        <button className="write-btn" onClick={handleWriteClick}>
          글쓰기
        </button>
      </div>
    </div>
  );
};

export default BoardList;