function minDistance(word1: string, word2: string): number {
  const length1: number = word1.length;
  const length2: number = word2.length;
  const dp: number[][] = [];
  for(let i=0; i<length1; i++){
    dp.push(new Array<number>(length2));
  }

  // ...

  return dp[length1-1][length2-1];
};

const distance = minDistance("hourse", "ros");
console.log(distance);