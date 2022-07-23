import verbData from "../json/verb-100.json" assert {type: 'json'};
import adjData from "../json/adjective-100.json" assert {type: 'json'};
import advData from "../json/adverb-100.json" assert {type: 'json'};
import nounData from "../json/objects.json" assert {type: 'json'};

// console.log(verbData)
// Dom Selection
let noun = document.querySelector(".noun");
let verb = document.querySelector(".verb");
let adv = document.querySelector(".adverb");
let adj = document.querySelector(".adjective");

let nextBtn = document.getElementById("next-btn")
let submitBtn = document.getElementById("submit")

let postText = document.querySelector('.submit-text ol')

function getRand(datas) {
    let idx = Math.floor(Math.random() * datas.length);
    return datas[idx]
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
nextBtn.addEventListener('click', function () {
    let nounDat = getRand(nounData);
    let verbDat = getRand(verbData);
    let adjDat = getRand(adjData);
    let advDat = getRand(advData);
    console.log(nounDat)
    noun.innerHTML = nounDat.name;
    verb.innerHTML = verbDat.text;
    adv.innerHTML = adjDat.text;
    adj.innerHTML = advDat.text;
    removeAllChildNodes(postText);
})

submitBtn.addEventListener('click', function () {
    let sentence = document.getElementById("myTextarea").value;
    let el = document.createElement('li')
    let txt = document.createTextNode(`${sentence}`)
    el.appendChild(txt);
    postText.appendChild(el);

})