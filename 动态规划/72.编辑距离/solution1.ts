function minDistance(word1: string, word2: string): number {
  const length1: number = word1.length + 1;
  const length2: number = word2.length + 1;
  const dp: number[][] = [];
  for(let i=0; i<length1; i++){
    const arr = new Array(length2);
    arr[0] = i;
    dp.push(arr);
  }
  for(let i=1; i<length2; i++) {
    dp[0][i] = i;
  }
  for(let i=1; i<length1; i++) {
    for(let j=1; j<length2; j++) {
      if(word1[i-1] === word2[j-1]){
        dp[i][j] = Math.min(dp[i-1][j-1], dp[i][j-1]+1, dp[i-1][j]+1);
      } else {
        dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
      }
    }
  }
  return dp[length1-1][length2-1];
};

const distance = minDistance("horse", "ros");
console.log(distance);