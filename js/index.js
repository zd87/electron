import {getCapital} from "./fetchInfo.js";

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
    displayContent(DOM.franceContent, result);
}
const fetchRussia = async () => {
    const result = await getCapital("russia");
    displayContent(DOM.russiaContent, result);
}
const fetchGermany = async () => {
    const result = await getCapital("germany");
    displayContent(DOM.germanyContent, result);
}
const fetchSpain = async () => {
    const result = await getCapital("spain");
    displayContent(DOM.spainContent, result);
}

const displayContent =(element, content)=>{
    element.innerHTML = content;
}
