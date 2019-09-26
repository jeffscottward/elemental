'use strict';

/* global $, jQuery */

// Running out of time
// copied it into my local env

async function solution() {
  let data = {}
    
  let response = await window.fetch('https://www.example.com/comments?count=10');
  let json = await response.json();
  data = json
  console.log(data);
  
  const tagMaker = (tag, class) {
    let newTag = docuemnt.createElement(tag)
    newTag.classList.add(class)
    return newTag
  }
  
  const commentListTag = tagMaker('div','comment-list')
  const commentItemTag = tagMaker('div','comment-item')
  const commentItemUserNameTag = tagMaker('div','comment-item__username')
  const commentItemMesgTag = tagMaker('div','comment-item__mesg')
  
  let count = data.length
  
  
    
    // <div class="comment-list" data-count={count}>
    //     <div class="comment-item">
    //         <div class="comment-item__username">{username}</div>
    //         <div class="comment-item__mesg">{message}</div>
    //     </div>
    //     <div class="comment-item">
    //         <div class="comment-item__username">{username}</div>
    //         <div class="comment-item__mesg">{message}</div>
    //     </div>
    // </div>
    
    // <div class="comment-list" data-count={count}>
    //     <div class="comment-item">
    //         <div class="comment-item__username">{username}</div>
    //         <div class="comment-item__mesg">{message}</div>
    //     </div>
    //     <div class="comment-item">
    //         <div class="comment-item__username">{username}</div>
    //         <div class="comment-item__mesg">{message}</div>
    //     </div>
    // </div>
    
    // // error case
    // <div class="comment-list" data-count=1></div>
}
