const infoInput = document.getElementById("infoInput");
const btnSubmit = document.getElementById("btnSubmit");
const ouptut = document.getElementById("output");

btnSubmit.addEventListener('click', () => {
    
    let infoData = {
        "infoText" : `${infoInput.value}`
    }

    axios.post('/submit', infoData)
    .then(res => {
        ouptut.innerText = res.data.output;
    })
    .catch(err => {console.log(err)})

})