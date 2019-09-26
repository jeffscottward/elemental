function solution(A, K) {
    var n = A.length;
    for (var i = 0; i < n - 1; i++) {
        if (A[i] + 1 < A[i + 1])
            return false;
    }
    if (A[0] != 1 && A[n - 1] != K)
        return false;
    else
        return true;
}



function solution(A, K) {
  var n = A.length;
  for (var i = 0; i < n; i++) {
    if (A[i] === K) {
      return true;
    }
  }
  return false;
}


function solution(A, K) {
  var n = A.length;
  for (var i = 0; i < n; i++) {
    if (A[i] + 1 < A[i + 1] || A[i + 1] > 1000000000) return false;
  }
  if (A[0] != 1 && A[n - 1] != K) return false;
  else return true;
}
