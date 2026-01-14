import React, { useState } from 'react'

const UseState3 = () => {
  const [showAd, setShowAd] = useState(true);

  const toggleAd = () => {
    setShowAd(!showAd);
  };

  return (
    <div>
      <button onClick={toggleAd} style={{
        marginTop: '10px',
      }}>
        {showAd ? '광고닫기' : '광고보기'}
      </button>

      <div style={{ marginTop: '10px' }}>
        {/* 광고 닫기 상태일 때가 true!! 광고 보기 되면 false로 바뀌어 div 숨기기 */}
        {showAd && (
          <div style={{
            backgroundColor: 'red',
            color: 'white',
            padding: '15px 20px',
            fontWeight: 'bold',
            display: 'inline-block'
          }}>
            오늘 구매하시면 30% SALE!!!
          </div>
        )}
      </div>
    </div>
  )
}

export default UseState3