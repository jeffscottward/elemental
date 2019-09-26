<div id="brinza-task-description">
<p>You are given an implementation of a function:</p>
<blockquote><p style="font-family: monospace; font-size: 9pt; display: block; white-space: pre-wrap"><tt>function solution(A, K);</tt></p></blockquote>
<p>This function, given a non-empty array A of N integers (sorted in non-decreasing order) and integer K, checks whether A contains numbers 1, 2, ..., K (every number from 1 to K at least once) and no other numbers.</p>
<p>For example, given the following array A, and K = 3:</p>
<tt style="white-space:pre-wrap">  A[0] = 1
  A[1] = 1
  A[2] = 2
  A[3] = 3
  A[4] = 3</tt>
<p>The function should return <tt style="white-space:pre-wrap">true</tt>.</p>
<p>For the following array A, and K = 2:</p>
<tt style="white-space:pre-wrap">  A[0] = 1
  A[1] = 1
  A[2] = 3</tt>
<p>the function should return <tt style="white-space:pre-wrap">false</tt>.</p>
<p>The attached code is still <b><b>incorrect</b></b> for some inputs. Despite the error(s), the code may produce a correct answer for the example test cases. The goal of the exercise is to find and fix the bug(s) in the implementation. You can modify at most <b><b>two</b></b> lines.</p>
<p>Assume that:</p>
<blockquote><ul style="margin: 10px;padding: 0px;"><li>N and K are integers within the range [<span class="number">1</span>..<span class="number">300,000</span>];</li>
<li>each element of array A is an integer within the range [<span class="number">0</span>..<span class="number">1,000,000,000</span>];</li>
<li>array A is sorted in non-decreasing order.</li>
</ul>
</blockquote><p>In your solution, focus on <b><b>correctness</b></b>. The performance of your solution will not be the focus of the assessment.</p>
</div>