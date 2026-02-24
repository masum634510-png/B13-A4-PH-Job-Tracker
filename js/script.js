 
  

// call me or 3 button 
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
totalCount.innerText = totalCard ;

// main card total 8 ta
  const allCards = document.querySelectorAll('.card-title');

// get the call me or 5 btn
 const interviewCount = document.getElementById('interview-count')
 const rejectedCount = document.getElementById('rejected-count')

const notAppliedBtn = document.querySelector('.not-applied-btn')

const interviewButton = document.querySelector('.interview-btn')
const rejectedButton = document.querySelector('.rejected-btn')





// ---------copy part 2  -------------

let countI = 0;
interviewButton.addEventListener('click', function () {
  
  notAppliedBtn.innerHTML = 'INTERVIEW'
  notAppliedBtn.style.backgroundColor = 'cyan'
  //interview borad count hosca
  
  countInterview = countI + 1
  interviewCount.innerText = countInterview;
  //count 1 bar ar basi hobe na
  
  
})

   let countR = 0; 
//reject button ar jonno
rejectedButton.addEventListener('click', function(){

  notAppliedBtn.innerText = "REJECTED";
  notAppliedBtn.style.backgroundColor = "red";

  countRijected = countR - 1;
  rejectedCount.innerText = countRijected; 

  
}) 





 
