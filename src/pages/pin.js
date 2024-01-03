import React, { useState, useEffect  } from 'react';
import './pin.css';

const initialPieces = [  
  { id: 1, image: '1.png', position: null, fixed: false ,correctPosition: 0},  
  { id: 2, image: '2.png', position: null, fixed: false ,correctPosition: 3},  
  { id: 3, image: '3.png', position: null, fixed: false ,correctPosition: 6},  
  { id: 4, image: '4.png', position: null, fixed: false ,correctPosition: 1},  
  { id: 5, image: '5.png', position: null, fixed: false ,correctPosition: 4},  
  { id: 6, image: '6.png', position: null, fixed: false ,correctPosition: 7},  
  { id: 7, image: '7.png', position: null, fixed: false ,correctPosition: 2},  
  { id: 8, image: '8.png', position: null, fixed: false ,correctPosition: 5},  
  { id: 9, image: '9.png', position: null, fixed: false ,correctPosition: 8},  
];  

function Pin() {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
     // 随机排序函数，仅打乱拼图片段的显示顺序，不改变它们的 `correctPosition`
     const shuffledPieces = initialPieces
     .map(piece => ({ ...piece, position: null, fixed: false })) // 重置位置和固定状态
     .sort(() => Math.random() - 0.5); // 随机排序
   setPieces(shuffledPieces);
 }, []);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDrop = (e, position) => {

    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const newPieces = pieces.map((piece) => {
      if (piece.id === parseInt(id)) {
        const isCorrectPosition = piece.correctPosition === position; // 判断位置是否正确
        console.log(`Piece ${id} dropped at position ${position}, correct position: ${piece.correctPosition}, is correct: ${isCorrectPosition}`);
        return { ...piece, position, fixed: isCorrectPosition };
      } else {
        return piece;
      }
    });
    setPieces(newPieces);



    

    const isPuzzleComplete = newPieces.every((piece) => piece.fixed);
    if (isPuzzleComplete) {
      alert('恭喜你完成了拼图！');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="puzzle-game">
      <div className="grid-container">
        {[0, 1, 2].map((row) => (
          <div key={row} className="grid-row">
            {[0, 1, 2].map((col) => {
              const position = row * 3 + col;
              const piece = pieces.find((p) => p.position === position);
              return (
                <div
                  key={position}
                  className="grid-item"
                  onDrop={(e) => handleDrop(e, position)}
                  onDragOver={handleDragOver}
                >
                  {piece && (
                    <img  
                    key={piece.id}  
                    className={`image ${piece.fixed ? 'fixed' : ''}`}  
                    draggable={!piece.fixed}  
                    onDragStart={(e) => handleDragStart(e, piece.id)}  
                    src={`./${piece.image}`} // 更新这里的图片URL  
                  />  
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="bottom-row">
        {pieces.map((piece) => (
          <img
            key={piece.id}
            className={`image ${piece.fixed ? 'fixed' : ''}`}
            draggable={!piece.fixed}
            onDragStart={(e) => handleDragStart(e, piece.id)}
            src={`./${piece.image}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Pin;
