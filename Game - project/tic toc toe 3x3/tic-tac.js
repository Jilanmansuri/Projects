(function(){
  // Professional Tic-Tac-Toe (3x3) — PvP and PvC (simple AI)
  const SIZE = 3;
  const WIN_LEN = 3;

  const boardEl = document.getElementById('board');
  const cells = Array.from(boardEl.querySelectorAll('.btn'));
  const turnEl = document.getElementById('turn');
  const statusEl = document.getElementById('status');
  const modeBtn = document.getElementById('modeBtn');
  const newBtn = document.getElementById('newBtn');
  const resetBtn = document.getElementById('resetBtn');
  const scoreXEl = document.getElementById('scoreX');
  const scoreOEl = document.getElementById('scoreO');

  let board = Array(SIZE*SIZE).fill('');
  let current = 'X';
  let running = true;
  let mode = 'PvP'; // or 'PvC'
  let score = { X: 0, O: 0 };

  // initialize data-index attributes (in case not present)
  cells.forEach((cell, i)=> cell.dataset.index = i);

  function loadScores(){
    try{const s = JSON.parse(localStorage.getItem('ttt_scores_3'))||{X:0,O:0}; score=s;}catch(e){score={X:0,O:0}}
    scoreXEl.textContent = score.X;
    scoreOEl.textContent = score.O;
  }

  function saveScores(){ localStorage.setItem('ttt_scores_3', JSON.stringify(score)); }

  function render(){
    cells.forEach((cell,i)=>{
      cell.textContent = board[i] || '';
      cell.classList.toggle('disabled', !!board[i] || !running);
      cell.classList.remove('win');
    });
    turnEl.textContent = current;
  }

  function checkWinAt(index){
    const player = board[index]; if(!player) return null;
    const dirs = [ [1,0],[0,1],[1,1],[1,-1] ];
    const size = SIZE;
    for(const [dx,dy] of dirs){
      const line=[index];
      // step forward
      let x = index % size, y = Math.floor(index/size);
      for(let step=1;step<WIN_LEN;step++){
        const nx = x + dx*step, ny = y + dy*step;
        if(nx<0||nx>=size||ny<0||ny>=size) break;
        const ni = ny*size + nx;
        if(board[ni]===player) line.push(ni); else break;
      }
      // step backward
      for(let step=1;step<WIN_LEN;step++){
        const nx = x - dx*step, ny = y - dy*step;
        if(nx<0||nx>=size||ny<0||ny>=size) break;
        const ni = ny*size + nx;
        if(board[ni]===player) line.unshift(ni); else break;
      }
      if(line.length>=WIN_LEN) return {player, line};
    }
    return null;
  }

  function checkAll(){
    for(let i=0;i<board.length;i++){
      if(!board[i]) continue;
      const res = checkWinAt(i);
      if(res) return res;
    }
    if(board.every(Boolean)) return {draw:true};
    return null;
  }

  function endGame(result){
    running=false;
    if(result && result.player){
      result.line.forEach(i=>cells[i].classList.add('win'));
      statusEl.textContent = `Winner: ${result.player}`;
      score[result.player]++;
      scoreXEl.textContent = score.X; scoreOEl.textContent = score.O; saveScores();
    } else {
      statusEl.textContent = 'Draw';
    }
    render();
  }

  function aiMove(){
    // simple AI: pick random empty, prefer center then corners
    const empties = board.map((v,i)=>v?null:i).filter(i=>i!==null);
    if(!empties.length) return null;
    const center = Math.floor(board.length/2);
    if(empties.includes(center)) return center;
    const corners = [0,2,6,8].filter(i=>empties.includes(i));
    if(corners.length) return corners[Math.floor(Math.random()*corners.length)];
    return empties[Math.floor(Math.random()*empties.length)];
  }

  function handleClick(e){
    if(!running) return;
    const idx = Number(e.currentTarget.dataset.index);
    if(board[idx]) return;
    board[idx]=current; render();
    const res = checkAll();
    if(res) return endGame(res);
    current = current==='X'?'O':'X';
    statusEl.textContent = `Turn: ${current}`;
    if(mode==='PvC' && current==='O'){
      // AI acts after short delay
      setTimeout(()=>{
        const move = aiMove();
        if(move!=null){ board[move]='O'; render(); const r = checkAll(); if(r) endGame(r); else { current='X'; statusEl.textContent=`Turn: ${current}`; } }
      }, 350);
    }
  }

  function newRound(){ board.fill(''); running=true; current='X'; statusEl.textContent='Turn: X'; render(); }
  function resetScores(){ score={X:0,O:0}; saveScores(); loadScores(); }
  function toggleMode(){ mode = (mode==='PvP')?'PvC':'PvP'; modeBtn.textContent = `Mode: ${mode}`; }

  // attach
  cells.forEach(c=>c.addEventListener('click', handleClick));
  newBtn.addEventListener('click', newRound);
  resetBtn.addEventListener('click', ()=>{ resetScores(); newRound(); });
  modeBtn.addEventListener('click', toggleMode);

  // init
  loadScores(); newRound();
})();
