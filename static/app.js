const gossipInput = document.getElementById("gossipInput");
const btnSubmit = document.getElementById("btnSubmit");
const ouptut = document.getElementById("output");

btnSubmit.addEventListener('click', () => {
    
    let gossipData = {
        "gossipText" : `${gossipInput.value}`
    }

    axios.post('/submit', gossipData)
    .then(res => {
        ouptut.innerText = res.data.output;
    })
    .catch(err => {console.log(err)})

})