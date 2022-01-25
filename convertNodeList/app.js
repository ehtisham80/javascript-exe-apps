const nodeListToArray = (nodeList) => Array.prototype.slice.call(nodeList);
console.log(nodeListToArray(document.childNodes));
