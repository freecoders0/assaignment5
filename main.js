let heartClick = document.getElementsByClassName('fa-heart')
let heartCount = document.getElementById('heart').innerText;
heartCountConverted = Number(heartCount)

let copyClick = document.getElementsByClassName('copy')
let copyCount = document.getElementById('copy').innerText
copyCountConverted = Number(copyCount)

let copyNumbers = document.getElementsByClassName('copy-number')











// heart button

for (let i = 0; i < heartClick.length; i++) {

    heartClick[i].addEventListener(
        'click', function () {
            heartCountConverted++


            document.getElementById('heart').innerText = heartCountConverted;
        })

}


// copy button 

for (let i = 0; i < copyClick.length; i++) {

    copyClick[i].addEventListener(
        'click', function () {
            copyCountConverted++
            console.log(copyCountConverted)

            document.getElementById('copy').innerText = copyCountConverted;



            let copyNumber = copyNumbers[i].innerText;

            navigator.clipboard.writeText(copyNumber).then(() => {
                alert("Number Copied: " + copyNumber);
            })

        }
    )
}



let coinAvailable = document.getElementById('coin').innerText
let coinAvailableNumber = Number(coinAvailable)
let callTitles = document.getElementsByClassName('title')

let phones = document.getElementsByClassName('phone')



for (let i = 0; i < phones.length; i++) {

    phones[i].addEventListener('click', function () {
        if (coinAvailableNumber < 20) {
            alert("you don't have sufficient coin")
        }

        if (coinAvailableNumber >= 20) {
            let calltitle = callTitles[i].innerText;
            let copyNumber = copyNumbers[i].innerText;
            alert('Calling ' + calltitle + " " + copyNumber);
            coinAvailableNumber -= 20;


            document.getElementById('coin').innerText = coinAvailableNumber





            let callDetailsTitle = document.createElement('h3');
            callDetailsTitle.innerText = calltitle;
            let history = document.getElementById('history').appendChild(callDetailsTitle).style.fontWeight = 'bold';

            let callDetailsNumber = document.createElement('p');
            callDetailsNumber.innerText = copyNumber;
            document.getElementById('history').appendChild(callDetailsNumber);
            let now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();

            let time = `${hours}:${minutes}:${seconds}`;
            let timeline = document.createElement('h3');
            timeline.innerText = time;
            document.getElementById('timeline').appendChild(timeline)
            document.getElementById('clear').addEventListener('click', function () {
    document.getElementById('history').removeChild(callDetailsNumber);
                document.getElementById('history').removeChild(callDetailsTitle)
                document.getElementById('timeline').removeChild(timeline)
    
})

        }
    })

}







