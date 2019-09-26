<div id="brinza-task-description">
<p>You would like to add the ability to render comments on a previously static website. The comments are submitted only via a mobile app, so the website itself just needs to display the latest comments. Comments should be fetched on the client (browser) side and then displayed inside all tags that have the class <tt style="white-space:pre-wrap">comment-list</tt> (there can be more than one such tag). All of these elements will have a <tt style="white-space:pre-wrap">data-count</tt> attribute determining the number of comments to fetch.</p>
<p>Here's an example of such a tag:</p>
<tt style="white-space:pre-wrap">&lt;div class="comment-list" data-count=10&gt;&lt;/div&gt;</tt>
<p>The comment data for this tag can be obtained by making an AJAX call to the following endpoint:</p>
<tt style="white-space:pre-wrap">https://www.example.com/comments?count=10</tt>
<p>In the example above we are asking for ten comments. The response format is as follows:</p>
<tt style="white-space:pre-wrap">[{
    "id": 123,
    "username": "User 1",
    "message": "Cool product!"
}, {
    "id": 456,
    "username": "User 2",
    "message": "Didn't like it that much"
},
   ...
]</tt>
<p>While the comments are being loaded, the <tt style="white-space:pre-wrap">comment-list</tt> elements should be filled with the text <tt style="white-space:pre-wrap">Loading...</tt>.</p>
<p>The DOM structure of each comment is expected to be:</p>
<tt style="white-space:pre-wrap">&lt;div class="comment-item"&gt;
  &lt;div class="comment-item__username"&gt;{username}&lt;/div&gt;
  &lt;div class="comment-item__message"&gt;{message}&lt;/div&gt;
&lt;/div&gt;</tt>
<p>The comments should appear one after the other, with the order preserved.</p>
<p>If any error occurs during the loading, the tag should be left empty.</p>
<p>Write a function:</p>
<tt style="white-space:pre-wrap">function solution();</tt>
<p>that, given a DOM tree representing an HTML document, renders comments as described above.</p>
<p>You can use either the <a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest" target="_blank" rel="noopener noreferrer nofollow">XMLHttpRequest</a> or the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch" target="_blank" rel="noopener noreferrer nofollow">fetch</a> API. Please remember that using <tt style="white-space:pre-wrap">xhr.async = false;</tt> will not work. You can also use <tt style="white-space:pre-wrap">jQuery.ajax</tt> and similar methods to access the API.</p>
<p>For example, given a document containing</p>
<tt style="white-space:pre-wrap">&lt;div class="comment-list" data-count=2&gt;&lt;/div&gt;</tt>
<p>and the response:</p>
<tt style="white-space:pre-wrap">[{
    "id": 123,
    "username": "User 1",
    "message": "Cool product!"
}, {
    "id": 456,
    "username": "User 2",
    "message": "Didn't like it that much"
}]</tt>
<p>then afterwards the document should contain:</p>
<tt style="white-space:pre-wrap">&lt;div class="comment-list" data-count=2&gt;
  &lt;div class="comment-item"&gt;
    &lt;div class="comment-item__username"&gt;User 1&lt;/div&gt;
    &lt;div class="comment-item__message"&gt;Cool product!&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="comment-item"&gt;
    &lt;div class="comment-item__username"&gt;User 2&lt;/div&gt;
    &lt;div class="comment-item__message"&gt;Didn't like it that much&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</tt>
<p>In another example, given a document containing</p>
<tt style="white-space:pre-wrap">&lt;div class="comment-list" data-count=2&gt;&lt;/div&gt;
&lt;div class="comment-list" data-count=2&gt;&lt;/div&gt;</tt>
<p>and the same response as in the previous example, then afterwards the document should contain:</p>
<tt style="white-space:pre-wrap">&lt;div class="comment-list" data-count=2&gt;
  &lt;div class="comment-item"&gt;
    &lt;div class="comment-item__username"&gt;User 1&lt;/div&gt;
    &lt;div class="comment-item__message"&gt;Cool product!&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="comment-item"&gt;
    &lt;div class="comment-item__username"&gt;User 2&lt;/div&gt;
    &lt;div class="comment-item__message"&gt;Didn't like it that much&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class="comment-list" data-count=2&gt;
  &lt;div class="comment-item"&gt;
    &lt;div class="comment-item__username"&gt;User 1&lt;/div&gt;
    &lt;div class="comment-item__message"&gt;Cool product!&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="comment-item"&gt;
    &lt;div class="comment-item__username"&gt;User 2&lt;/div&gt;
    &lt;div class="comment-item__message"&gt;Didn't like it that much&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</tt>
<p>In yet another example, you are given a document containing</p>
<tt style="white-space:pre-wrap">&lt;div class="comment-list" data-count=1&gt;&lt;/div&gt;</tt>
<p>but an error occurs while loading comments. In this case, the document should remain the same.</p>
<p>Assumptions:</p>
<blockquote><ul style="margin: 10px;padding: 0px;"><li>the DOM tree represents a valid HTML5 document;</li>
<li>jQuery 2.1.4 is supported;</li>
<li>the <tt style="white-space:pre-wrap">data-count</tt> parameter will be in the range 1 to 100;</li>
<li>the AJAX call response text will contain valid JSON with no more than the <tt style="white-space:pre-wrap">data-count</tt> number of comments;</li>
<li>the response data may or may not be sanitised;</li>
<li>the elements with the <tt style="white-space:pre-wrap">comment-list</tt> class cannot be inside other such elements.</li>
</ul>
</blockquote></div>