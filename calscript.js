console.log('Declare all the constants and functions related to Interaction page!')


function Sumof1toN(x){
    return (x*(x+1))/2;
   }

   document.getElementById('sumOfN').addEventListener('click', () =>
   {
    const origCount = parseInt(localStorage.getItem('countOfClicks')) || 0   
    const num1 = document.getElementById('num').value
       inumber = parseInt(num1)
       const ct = origCount + 1

       const result= 'The Sum of N natural numbers till ' + inumber + ' is : ' + Sumof1toN(inumber) + '. This has been run ' + ct + ' times.'
       document.getElementById('sum1').innerHTML=result
       localStorage.setItem('countOfClicks', ct)
       localStorage.setItem('input number', inumber)


   }
   
   )


   document.getElementById('clear').addEventListener('click', () => {
    console.log('  Starting clear storage click handler')
    localStorage.removeItem('countOfClicks')
    localStorage.removeItem('inumber')
    console.log('  Finished wiper click handler - localStorage entries removed')
})


