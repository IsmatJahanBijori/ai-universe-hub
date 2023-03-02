const loadDataDetails = () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url).then(res => res.json()).then(data => displayDataDetails(data.data))
}

const displayDataDetails = (tools) => {
    // console.log((tools.tools))

    const cardContainer = document.getElementById('card-container')
    cardContainer.textContent = ''
    tools.tools.forEach(tool => {
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
const showDetailsInfo = (data) => {
    // console.log(data.pricing[0].price)
    // console.log(data.pricing[1].price)
    // console.log(data.pricing[2].price)
    console.log(data)

    const modalContainer = document.getElementById('modalBody')
    modalContainer.textContent=''
    const modalDiv = document.createElement('div')
    modalDiv.innerHTML = `
    <div class="row row-cols-1 row-cols-md-2 g-0" >
        <div class="col-md-7 p-2" style="background-color:rgba(235, 87, 87, 0.05);">
            <div id="description">
                <h5>${data.description}</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="me-2">
                        <p class="text-success ">${data.pricing[0].price}</p>
                        <br>
                        <p class="text-success">${data.pricing[0].plan}</p>
                        </div>
                        <div class="me-2">
                        <p class="text-success">${data.pricing[1].price}</p>
                        <br>
                        <p class="text-success">${data.pricing[1].plan}</p>
                        </div>
                        <div class="me-2">
                        <p class="text-success">${data.pricing[2].price}</p>
                        <p class="text-success">${data.pricing[2].plan}</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div>Features:
                            <ul>
                                <li>${data.features[1].feature_name}</li>
                                <li>${data.features[1].feature_name}</li>
                                <li>${data.features[1].feature_name}</li>
                            </ul>
                        </div>
                        <div>Integration:
                            <ul>
                                <li>${data.integrations[0]}</li>
                                <li>${data.integrations[1]}</li>
                                <li>${data.integrations[2]}</li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
        <div class="col-md-5 p-1 mb-2">
            <img id="modalImage" src="${data.image_link[1]}" class="img-fluid rounded-start" alt="...">
            <div class="mt-2">
                <h4>${data.input_output_examples[0].input}</h4>
                <p>${data.input_output_examples[0].output}</p>
            </div>
        </div>
    </div>`
    modalContainer.appendChild(modalDiv)
}
loadDataDetails()

