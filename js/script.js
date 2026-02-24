/* // call me or 3 button
const allBtn = document.getElementById('allBtn')
const interviewBtn = document.getElementById('interviewBtn')
const rejectedBtn = document.getElementById('rejectedBtn')

// handle active button styling
function toggleStyle (id) {
  let buttons = [allBtn, interviewBtn, rejectedBtn]

  buttons.forEach(btn => {
    btn.classList.remove('bg-green-500', 'text-white')
    btn.classList.add('bg-gray-300', 'text-black')
  })
  const selected = document.getElementById(id)

  selected.classList.remove('bg-gray-300')
  selected.classList.add('bg-green-500', 'text-white')
}

// update total job count
let allCardsTitle = document.querySelectorAll('.card-title')
let totalCard = allCardsTitle.length

let totalCount = document.getElementById('total-count')
totalCount.innerText = totalCard

// main card total 8 ta
const allCards = document.querySelectorAll('.card-title')

// get the call me or 5 btn
const interviewCount = document.getElementById('interview-count')
const rejectedCount = document.getElementById('rejected-count')

const notAppliedBtn = document.querySelector('.not-applied-btn')

const interviewButton = document.querySelector('.interview-btn')
const rejectedButton = document.querySelector('.rejected-btn')

// ---------copy part 2  -------------

let countI = 0
interviewButton.addEventListener('click', function () {
  notAppliedBtn.innerHTML = 'INTERVIEW'
  notAppliedBtn.style.color = 'cyan'
  notAppliedBtn.style.backgroundColor = "white"
  notAppliedBtn.style.border = "1px solid cyan";
  //interview borad count hosca

  countInterview = countI + 1
  interviewCount.innerText = countInterview
  //count 1 bar ar basi hobe na
})

let countR = 0
//reject button ar jonno
rejectedButton.addEventListener('click', function () {
  notAppliedBtn.innerText = 'REJECTED'
  notAppliedBtn.style.color = 'red';
  notAppliedBtn.style.backgroundColor = "white"
  notAppliedBtn.style.border = "1px solid red";

  countRijected = countR - 1
  rejectedCount.innerText = countRijected
})
 */

//get the call me or 3 main card------------------part--------------01-----------------
const allCardsTitle = document.querySelectorAll('.card-title');

const displayInterviewCount = document.getElementById('interview-count');
const displayRejectedCount = document.getElementById('rejected-count');

//-----------------part--------------02-----------------

allCardsTitle.forEach(card => {
  //looping for every button
  const notAppliedBtn = card.querySelector('.not-applied-btn');
  const interviewBtn = card.querySelector('.interview-btn');
  const rejectedBtn = card.querySelector('.rejected-btn');
  const removeBtn = card.querySelector('.remove-btn');
  //interview button
  interviewBtn.addEventListener('click', function () {
    if (notAppliedBtn.innerText !== 'INTERVIEW') {
      notAppliedBtn.innerText = 'INTERVIEW';
      notAppliedBtn.style.backgroundColor = 'white';
      notAppliedBtn.style.color = 'cyan';
      notAppliedBtn.style.border = '1px solid cyan';
      updateCounts();
    }
  });

  rejectedBtn.addEventListener('click', function () {
    if (notAppliedBtn.innerText !== 'REJECTED') {
      notAppliedBtn.innerText = 'REJECTED';
      notAppliedBtn.style.backgroundColor = 'white';
      notAppliedBtn.style.color = 'red';
      notAppliedBtn.style.border = '1px solid red';
      updateCounts();
    }
  });

   removeBtn.style.cursor = "pointer";
  removeBtn.addEventListener('click', function(){
    card.remove();
    updateCounts();
  }); 



});

//-----------------03--------------------
 function updateCounts(){

  let countInterview = 0;
  let countRejected = 0;

  document.querySelectorAll('.card-title').forEach(count => {
    const text = count.querySelector('.not-applied-btn').innerText;
    if (text === 'INTERVIEW'){
      countInterview++;
    }
    if (text === 'REJECTED'){
      countRejected++;
    }
  })

  displayInterviewCount.innerText = countInterview;
  displayRejectedCount.innerText = countRejected;
  document.getElementById('total-count').innerText = document.querySelectorAll('.card-title').length;
}
updateCounts() ;
/* function updateCounts() {
    let iCount = 0;
    let rCount = 0;
    
    document.querySelectorAll('.card-title').forEach(c => {
        const text = c.querySelector('.not-applied-btn').innerText;
        if (text === 'INTERVIEW') iCount++;
        if (text === 'REJECTED') rCount++;
    });

    displayInterviewCount.innerText = iCount;
    displayRejectedCount.innerText = rCount;
    document.getElementById('total-count').innerText = document.querySelectorAll('.card-title').length;
} 

updateCounts();  */


/* 


 // ২. প্রতিটি কার্ডের জন্য আলাদা লুপ চালানো
allCards.forEach(card => {
   /const interviewBtn = card.querySelector('.interview-btn');
    const rejectedBtn = card.querySelector('.rejected-btn');
    const statusLabel = card.querySelector('.not-applied-btn');
    const deleteBtn = card.querySelector('.fa-trash-can'); 

    // ইন্টারভিউ বাটনের কাজ
    interviewBtn.addEventListener('click', function() {
        if (statusLabel.innerText !== 'INTERVIEW') {
            statusLabel.innerText = 'INTERVIEW';
            statusLabel.style.color = 'cyan';
            statusLabel.style.border = "1px solid cyan";
            statusLabel.style.backgroundColor = "white";
            updateCounts(); // কাউন্ট আপডেট করার ফাংশন
        }
    });

    // রিজেক্টেড বাটনের কাজ
    rejectedBtn.addEventListener('click', function() {
        if (statusLabel.innerText !== 'REJECTED') {
            statusLabel.innerText = 'REJECTED';
            statusLabel.style.color = 'red';
            statusLabel.style.border = "1px solid red";
            statusLabel.style.backgroundColor = "white";
            updateCounts();
        }
    });

    
});
 */
// ৩. ড্যাশবোর্ড কাউন্ট আপডেট করার সহজ ফাংশন
