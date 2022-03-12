let btn = document.querySelector('#search_btn');
let filter1 = document.querySelector('#filter1');
let list = document.getElementById('book-list');
let row = document.createElement('tr');


loadEventListeners();





function loadEventListeners() {


    filter1.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            filterTasks();
        }
    });

    btn.addEventListener('click', filterTasks);


}

function filterTasks() {



    let text = filter1.value.replace(/^\s+|\s+$/g, '');


    let mp3linksarray = text.split("https://");

    console.log(mp3linksarray);

    let purelinks = mp3linksarray.map(str => str.length < 61 ? str.substring(str.length - 11, str.length) : str.substring(24, 35)

    )

    purelinks.shift();
    console.log(purelinks);




    list.innerHTML = "";



    purelinks.forEach(element => {


        fetch(`https://youtube-mp3-download1.p.rapidapi.com/dl?id=${element}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "youtube-mp3-download1.p.rapidapi.com",
                "x-rapidapi-key": "4770b12c5amsh9b06efcd3d10c58p122a93jsna056f7f60658"
            }
        })
        .then(response => {
            response.json().then(response => {

                console.log(response)

                let row = document.createElement('tr');

                row.innerHTML = `

                	<td class="text-center">${response.title}</td>
                	<td class="text-center">${response.status}</td>
                	<td class="text-center">${response.progress}</td>
                	<td class="text-center"><a href="${response.link}" target="_blank" class="button">link</a></td>
                    <td>${response.duration}</td>
                    <td class="text-center">${response.msg}</td>
                    
            
    
                `;


                list.appendChild(row);



            })
        })



        .catch(err => {
            console.error(err);
        });





         fetch(`https://youtube-mp36.p.rapidapi.com/dl?id=${element}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "youtube-mp36.p.rapidapi.com",
                "x-rapidapi-key": "4770b12c5amsh9b06efcd3d10c58p122a93jsna056f7f60658"
            }
        })
        .then(response => {
            response.json().then(response => {

                console.log(response)

                let row = document.createElement('tr');

                row.innerHTML = `

                    <td class="text-center">${response.title}</td>
                    <td class="text-center">${response.status}</td>
                    <td class="text-center">${response.progress}</td>
                    <td class="text-center"><a href="${response.link}" target="_blank" class="button">link</a></td>
                    <td>${response.duration}</td>
                    <td class="text-center">${response.msg}</td>
                    <td class="text-center">AD</td>
                    
            
    
                `;


                list.appendChild(row);



            })
        })



        .catch(err => {
            console.error(err);
        });



}
    );





}
