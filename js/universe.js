const loadDataDetails = () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url).then(res => res.json()).then(data => displayDataDetails(data.data))
}

const displayDataDetails = (tools) => {
    // console.log((tools.tools))

    const cardContainer = document.getElementById('card-container')
    cardContainer.textContent = ''
    tools.tools.slice(0, 6).forEach(tool => {
        // console.log(tool)
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
                    <div class="d-flex justify-content-between">
                    <div><p class="card-text"><i class="fas fa-calendar-days" style="height: 30px; width: 30px"></i>${tool.published_in}</p>
                    <i class="fas fa-arrow-right" onclick="fetchDetailsInfo('${tool.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    </div>
                    </div>
                    
                </div>
            </div>`
        cardContainer.appendChild(cardDiv)
    })
}
// https://openapi.programming-hero.com/api/ai/tool/${id}
//  onclick="detailsInfo('${id}')

const fetchDetailsInfo = (id) => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url).then(res => res.json()).then(data => showDetailsInfo(data.data))
}
const showDetailsInfo = (data)=>{
    console.log(data.pricing[0].price)
    console.log(data.pricing[1].price)
    console.log(data.pricing[2].price)
// title
document.getElementById('exampleModalLabel').innerText=data.description
// document.getElementById('modalBody').innerText=data.pricing[0].price
// document.getElementById('modalBody').innerText=data.pricing[1].price
// document.getElementById('modalBody').innerText=data.pricing[2].price
document.getElementById('modalImage').innerText=data.image
}
loadDataDetails()
// {/* <ol><li>${tools.tools[0].features}</li></ol>
// {/* <li>${tools.features[1]}</li> */}
                    // <li>${tools.features[2]}</li> }