import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './BoardList.module.css';  // 변경

const BoardList = () => {
  const [boardList, setBoardList] = useState([]);
  const [searchType, setSearchType] = useState('title');
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchBoardList();
  }, []);

  const fetchBoardList = async (clearKeyword = true) => {
    try {
      const response = await axios.get('http://localhost:8080/boards9');
      setBoardList(response.data);
      if (clearKeyword) {
        setKeyword('');
      }
    } catch (error) {
      console.error('게시글 목록 조회 실패:', error);
      console.log(error.response)
      console.dir(error)
    }
  };

  const handleSearch = async () => {
    if (!keyword.trim()) {
      fetchBoardList(true);
      return;
    }
    
    try {
      const response = await axios.get('http://localhost:8080/boards', { 
        params: { searchType, keyword: keyword.trim() } 
      });
      setBoardList(response.data);
    } catch (error) {
      console.error('검색 실패:', error);
      alert('검색에 실패했습니다.');
    }
  };

  const handleTitleClick = (boardNum) => {
    navigate(`/detail/${boardNum}`);
  };

  const handleWriteClick = () => {
    navigate('/reg');
  };

  return (
    <div className={styles.boardListContainer}>
      <div className={styles.searchBox}>
        <select 
          value={searchType} 
          onChange={(e) => setSearchType(e.target.value)}
          className={styles.searchSelect}
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

      <table className={styles.boardTable}>
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
                  className={styles.titleCell} 
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

      <div className={styles.buttonGroup}>
        <button 
          className={styles.listBtn}
          onClick={fetchBoardList}
        >
          전체목록
        </button>
        <button className={styles.writeBtn} onClick={handleWriteClick}>
          글쓰기
        </button>
      </div>
    </div>
  );
};

export default BoardList;