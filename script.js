const randInp=document.getElementById('randContainer');
const button=document.querySelectorAll('button');
const nmCotainer=document.getElementById('nmCotainer');
const tryCountShow=document.getElementById('tryCountShow');
let   tryCount=0;
let   matchedCount=0;

function randIdGenerate(){
    const rand=Math.floor(Math.random(9) * 100000);
    randInp.value=rand;
    console.log(rand)
}

// button.forEach((btnSts)=>{
//     btnSts.addEventListener("click",(e)=>{
//         if (e.target.value === 'C') {
//             nmCotainer.innerText='';
//         }else if(e.target.value === '<'){
//             const string=nmCotainer.innerText;
//             const backspace=string.substring(0,nmCotainer.innerText.length - 1);
//             backspace ? nmCotainer.innerText=backspace:nmCotainer.innerText='' ;
//         }else if(e.target.value === 'check'){
//             if (randInp.value !== '' && nmCotainer.innerText !== '' && randInp.value === nmCotainer.innerText) {
//                 nmCotainer.innerText='Pin Matched';
//                 randInp.value='';
//             }else{
//                 nmCotainer.innerText=`Pin don't Matched`;
//             }

//             setTimeout(() => {
                
//                 nmCotainer.innerText='';
//             }, 2000);
//         }else{
//             nmCotainer.innerText+=e.target.value;
//         }
//     })
   
// })









button.forEach((btnSts)=>{
    btnSts.addEventListener("click",(e)=>{
        if (e.target.value === 'C') {
            nmCotainer.innerText='';
        }else if(e.target.value === '<'){
            const string=nmCotainer.innerText;
            const backspace=string.substring(0,nmCotainer.innerText.length - 1);
            backspace ? nmCotainer.innerText=backspace:nmCotainer.innerText='' ;
        }else if(tryCount <= 3 && e.target.value === 'check'){
            tryCount++;
            tryCountShow.innerText=`${3 - tryCount}/3`;
            if (randInp.value !== '' && nmCotainer.innerText !== '' && randInp.value === nmCotainer.innerText) {
                matchedCount++;
            }
            if (tryCount >= 3) {
                randInp.value='';
                e.target.disabled=true;
                e.target.style.background='rgb(3 105 161)';
                tryCount=0;
                tryCountShow.innerText=`0/3`;
                nmCotainer.innerText=`Pin matched ${matchedCount} times.`
            }
            setTimeout(() => {
                nmCotainer.innerText='';
            }, 1000);
        }else{
            nmCotainer.innerText+=e.target.value;
        }
    })
   
})