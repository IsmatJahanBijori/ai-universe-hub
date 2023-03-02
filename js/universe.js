const loadDataDetails = () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url).then(res => res.json()).then(data => displayDataDetails(data.data))
}

const displayDataDetails = (tools) => {
    // console.log((tools.tools))

    const cardContainer = document.getElementById('card-container')
    tools.tools.forEach(tool=>{
        console.log(tool)
        const cardDiv = document.createElement('div')
    cardDiv.classList.add('col')
    cardDiv.innerHTML = `
            <div class="card mb-5" style="height: 30rem">
                <img src="${tool.image}" class="card-img-top p-2" style="height: 15rem" alt="...">
                <div class="card-body">
                    <h4 class="card-title">Features: </h4>
                    <ol>
                    <li>${tool.features[0]}</li>
                    <li>${tool.features[1]}</li>
                    <li>${tool.features[2]}</li>
                    </ol>
                    <hr>
                    <h4>${tool.name}</h4>
                    <p class="card-text"><i class="fas fa-calendar-days" style="height: 30px; width: 30px"></i>${tool.published_in}</p>
                </div>
            </div>`
    cardContainer.appendChild(cardDiv)
    })
}
loadDataDetails()
// {/* <ol><li>${tools.tools[0].features}</li></ol>
// {/* <li>${tools.features[1]}</li> */}
                    // <li>${tools.features[2]}</li> }