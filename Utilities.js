function getAttribute(char, attrName, which="current"){
    let rawVal = getAttrByName(char.get("id"), attrName, which);
    if (isNaN(rawVal)) return rawVal;
    else return parseInt(rawVal);
}

function sendMessage(from, to, msg){
    let whisper = "";
    if(to) whisper = "/w " + to.get("name").split(" ")[0];
    sendChat("character|" + from.get("id"), whisper + " " + msg);
}
