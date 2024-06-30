
async function createMainEntry(dataPath, parentId){
    const parent = document.getElementById(String(parentId));
    const data = await fetchJSON(dataPath);
    
    const year = String(data.date).substring(6,10);
    const month = String(data.date).substring(3,5);
    const day = String(data.date).substring(0,2);
    const date = String(year+"-"+month+"-"+day)

    if(new Date(String(date)) < new Date()){
        console.error(data.Headline+", is expired !")
        console.warn("load blocked")
        return;
    }

    // Construct the HTML string for the event card
    const htmlString = `
        <div class="Eventcard" id="${data.Headline}">
            <h2 id="Title">${data.Headline}</h2>
            <p id="event_date-time">${data.date}</p>
            <p id="description">${data.brief_description}</p>
            <button id="info-button"><img src="https://cdn-icons-png.flaticon.com/128/1/1176.png" alt="Info"></button>
            <div id="info_container">
                <p id="info_text">${data.long_description}</p>
            </div>
        </div>
    `;

    // Append the HTML string to the parent container
    parent.innerHTML += htmlString;

}

async function loadNextCalendarEntrys(staticDataPath,parent, maxCount, tag){
    var currentCount = 0;
    var newContent = "<h2>DIE NÄCHSTEN TERMINE</h2>";
    var nextContent = "";
    console.log(tag)
    for(let i = 1; i != 30;i++){
        let path = String(staticDataPath + String(i) + ".json");
        
        try{
            let data = await fetchJSON(path);
            const year = String(data.date).substring(6,10);
            const month = String(data.date).substring(3,5);
            const day = String(data.date).substring(0,2);
            const date = String(year+"-"+month+"-"+day)
        
            if(new Date(String(date)) > new Date() && currentCount < maxCount){
                nextContent = ` 
                <div class="event-card">
                    <h3>${data.Headline}</h3>
                    <p>${data.date}</p>
                    <a href="../pages/Aktuelles.html#Events_container" class="Text-link"><img src="../images/icons/Arrow_right_1_Blue.png">Mehr</a>
                </div>
                `;

                if(tag == null || String(data.tag).includes(tag)){
                    newContent += nextContent;
                    currentCount += 1;
                }
               
                nextContent = "";
                
            }

           
        }catch{break;}
        
    }
    if(currentCount == 0){
        newContent += "<h4>Derzeit keine Einträge</h4>" 
    }
    document.getElementById(String(parent)).innerHTML = newContent;
}

