(function(){
  // Tic-Tac-Toe 6x6 — professionalized
  const SIZE = 6;
  const WIN_LEN = 6; // require full row/col/diag of 6

  const boardContainer = document.getElementById('board');
  // gather cells (fall back to existing .game .btn list)
  const cells = Array.from(boardContainer.querySelectorAll('.btn'));
  // ensure data-index assigned
  cells.forEach((c,i)=> c.dataset.index = i);

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
  let mode = 'PvP';
  let score = { X:0, O:0 };

  function loadScores(){
    try{const s = JSON.parse(localStorage.getItem('ttt_scores_6'))||{X:0,O:0}; score=s;}catch(e){score={X:0,O:0}}
    scoreXEl.textContent = score.X; scoreOEl.textContent = score.O;
  }
  function saveScores(){ localStorage.setItem('ttt_scores_6', JSON.stringify(score)); }

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
      let x = index % size, y = Math.floor(index/size);
      for(let step=1;step<WIN_LEN;step++){
        const nx = x + dx*step, ny = y + dy*step;
        if(nx<0||nx>=size||ny<0||ny>=size) break;
        const ni = ny*size + nx;
        if(board[ni]===player) line.push(ni); else break;
      }
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
    const empties = board.map((v,i)=>v?null:i).filter(i=>i!==null);
    if(!empties.length) return null;
    // prefer center-ish positions
    const center = Math.floor(board.length/2);
    if(empties.includes(center)) return center;
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
      setTimeout(()=>{ const move = aiMove(); if(move!=null){ board[move]='O'; render(); const r = checkAll(); if(r) endGame(r); else { current='X'; statusEl.textContent=`Turn: ${current}`; } } }, 300);
    }
  }

  function newRound(){ board.fill(''); running=true; current='X'; statusEl.textContent='Turn: X'; render(); }
  function resetScores(){ score={X:0,O:0}; saveScores(); loadScores(); }
  function toggleMode(){ mode = (mode==='PvP')?'PvC':'PvP'; modeBtn.textContent = `Mode: ${mode}`; }

  cells.forEach(c=>c.addEventListener('click', handleClick));
  newBtn.addEventListener('click', newRound);
  resetBtn.addEventListener('click', ()=>{ resetScores(); newRound(); });
  modeBtn.addEventListener('click', toggleMode);

  loadScores(); newRound();
})();
