function calculateNumber(type, a, b) {
  const aRound = Math.round(a);
  const bRound = Math.round(b);
  
  if (type === 'SUM') {
    return Math.aRound + Math.bRound;
  }
  if (type === 'SUBTRACT') {
    return Math.aRound - Math.bRound;
  }
  if (type === 'DIVIDE') {
    if (Math.bRound === 0) {
      return 'Error';
    }
    return Math.aRound / Math.bRound;
  }
}

module.exports = calculateNumber;
