 function getHtmlByHtmlFile(path){
    fetch(path)
    .then(response => response.text())
    .then(htmlContent => {
        return htmlContent;
    })
    .catch(error => {
        console.error('Error fetching file:', error);
    });
}
function addHtmlContent(path, parentId){
    fetch(path)
    .then(response => response.text())
    .then(htmlContent => {
        document.getElementById(parentId).innerHTML += htmlContent;
    })
    .catch(error => {
        console.error('Error fetching file:', error);
    });
}