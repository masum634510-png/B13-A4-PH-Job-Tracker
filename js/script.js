 //Filters button selectors
const allBtn = document.getElementById('allBtn')
const interviewBtn = document.getElementById('interviewBtn')
const rejectedBtn = document.getElementById('rejectedBtn')

// Highlight the active button and reset others
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
 //---------------part--01--end---------------


//-------------step----------01--------------

const allCardsTitle = document.querySelectorAll('.card-title');

const displayInterviewCount = document.getElementById('interview-count');
const displayRejectedCount = document.getElementById('rejected-count');

//--------------step----------02-------------

allCardsTitle.forEach(card => {

  // Select all control buttons for the current card
  const notAppliedBtn = card.querySelector('.not-applied-btn');
  const interviewBtn = card.querySelector('.interview-btn');
  const rejectedBtn = card.querySelector('.rejected-btn');
  const removeBtn = card.querySelector('.remove-btn');

  // Update status to INTERVIEW and refresh all counts
  interviewBtn.addEventListener('click', function () {
    if (notAppliedBtn.innerText !== 'INTERVIEW') {
      notAppliedBtn.innerText = 'INTERVIEW';
      notAppliedBtn.style.backgroundColor = 'white';
      notAppliedBtn.style.color = 'green';
      notAppliedBtn.style.border = '1px solid green';
      updateCounts();
    }
  });
  
  // Update status to REJECTED and refresh all counts
  rejectedBtn.addEventListener('click', function () {
    if (notAppliedBtn.innerText !== 'REJECTED') {
      notAppliedBtn.innerText = 'REJECTED';
      notAppliedBtn.style.backgroundColor = 'white';
      notAppliedBtn.style.color = 'red';
      notAppliedBtn.style.border = '1px solid red';
      updateCounts(); //count update function
    }
  });

   removeBtn.style.cursor = "pointer";
  removeBtn.addEventListener('click', function(){
    card.remove();
    updateCounts(); //count update function
  }); 



});

//-------step-------03-------count--update--------
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

 //----------part--02--end-------------
