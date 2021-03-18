import {getCapital} from "./fetchInfo.js";
let count =0;
const DOM = {
    franceContent: document.getElementById("contentFrance"),
    russiaContent: document.getElementById("contentRussia"),
    germanyContent: document.getElementById("contentGermany"),
    spainContent: document.getElementById("contentSpain"),
    fetchButton: document.getElementById("fetchAll")
};

DOM.fetchButton.onclick = function (){
    fetchFrance();
    fetchRussia();
    fetchGermany();
    fetchSpain();
}

const fetchFrance = async () => {
    const result = await getCapital("france");
    count++;
    displayContent(DOM.franceContent, `${result}, order: ${count}`);
}
const fetchRussia = async () => {
    const result = await getCapital("russia");
    count++;
    displayContent(DOM.russiaContent, `${result}, order: ${count}`);
}
const fetchGermany = async () => {
    const result = await getCapital("germany");
    count++;
    displayContent(DOM.germanyContent, `${result}, order: ${count}`);
}
const fetchSpain = async () => {
    const result = await getCapital("spain");
    count++;
    displayContent(DOM.spainContent, `${result}, order: ${count}`);
}

const displayContent =(element, content)=>{
    element.innerHTML = content;
}
