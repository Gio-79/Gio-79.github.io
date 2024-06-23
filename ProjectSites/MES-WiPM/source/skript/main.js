var isSideMenueActive = false;

var objectType = {
    Class: 1,
    Id: 2
};

window.addEventListener('scroll', function() {
    if (window.scrollY > 40) {
        this.document.getElementById('header_main_logo').style.width = "var(--main_logo_target_size_small)";
    } else {
        this.document.getElementById('header_main_logo').style.width = "var(--main_logo_target_size_big)";
    }
});

window.addEventListener('scroll', function() {
    if (window.scrollY < 300) {
        this.document.getElementById('toTopButton').style.display = "none";
    } else {
        this.document.getElementById('toTopButton').style.display = "block";
    }
});


function sideMenueVisibility(){
    if(isSideMenueActive) document.getElementById('side-menue').style.display = "none";
    else document.getElementById('side-menue').style.display = "block";
    isSideMenueActive = !isSideMenueActive;
}

function setObjectVisibility(name, objectType, target){
    if(objectType = objectType.Class){
        if(document.getElementsByClassName(name).style.display == 'none'){
            document.getElementsByClassName(name).style.display = target;
        }
        else document.getElementsByClassName(name).style.display = "none";
    }
    else{
        if(document.getElementById(name).style.display == 'none'){
            document.getElementById(name).style.display = target;
        }
        else document.getElementById(name).style.display = "none";
    }
}

function setElementOnDisplay(name, target, objectType){
    if(objectType = objectType.Class){
       document.getElementsByClassName(name).style.display = target;
    }
    else{
        document.getElementById(name).style.display = target; 
    }
}

function setFolderState(name,target,iconName, deg){
    if(document.getElementById(name).style.display == 'none'){
        document.getElementById(name).style.display = target;
        document.getElementById(iconName).style.rotate = deg;
    }
    else {
        document.getElementById(name).style.display = 'none';
        document.getElementById(iconName).style.rotate = '0deg';
    }
}


    function setImageGallery(direction, count, name) {
    for (let i = 0; i != count; i++) {
        var currentImageId = "#" + String(name) + " .image-conteiner #gallery-image_" + i;
        var targetImageId = "#" + String(name) + " .image-conteiner #gallery-image_" + (i + direction);


        if(document.querySelector(currentImageId).style.display == "block" && document.querySelector(targetImageId)){
            var currentCircleId = "#" + String(name) + " .current-image-circle-index #circe-img_" + i;
            var targetCircleId = "#" + String(name) + " .current-image-circle-index #circe-img_" + (i + direction);

            var currentImage = document.querySelector(currentImageId);
            var targetImage = document.querySelector(targetImageId);
            var currentCircle = document.querySelector(currentCircleId);
            var targetCircle = document.querySelector(targetCircleId);

            currentImage.style.display = 'none';
            targetImage.style.display = 'block';
        
            if(window.location.pathname.includes('index')){
                currentCircle.src = "./source/images/icons/Circle_Empty_Blue.png";
                targetCircle.src = "./source/images/icons/Circle_Filled_Blue.png";
            }
            else{
                
                currentCircle.src = "../images/icons/Circle_Empty_Blue.png";
                targetCircle.src = "../images/icons/Circle_Filled_Blue.png";
            }
            
            let currentIndex = i + direction;
            console.log(currentIndex)
            if(currentIndex < 0) return 0;
            if(currentIndex > count) return i;
            return currentIndex;
        }
        
        
    }
}

function scrollToTop() {
    const duration = 1000; 
    const start = document.documentElement.scrollTop || document.body.scrollTop;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    function scroll() {
        const now = 'now' in window.performance ? performance.now() : new Date().getTime();
        const time = Math.min(1, ((now - startTime) / duration));
        const timeFunction = time * (2 - time);
        window.scrollTo(0, Math.ceil((timeFunction * (0 - start)) + start));

        if (document.documentElement.scrollTop !== 0 || document.body.scrollTop !== 0) {
            requestAnimationFrame(scroll);
        }
    }

    scroll();
}

function changePage(src){
    window.location.href = String(src);
} 

function changeImageSource(id, src){
    document.getElementById(String(id)).src = String(src);
}

function deaktivateItems(ids) {
    ids.forEach(function(id) {
        var element = document.getElementById(id);
        if (element) {
            element.style.display = 'none'; 
        }
    });
}

function aktivateItems(ids) {
    ids.forEach(function(id) {
        var element = document.getElementById(id);
        if (element) {
            element.style.display = 'block'; 
        }
    });
}


function chnageTextById(id,i ,textArray){
    console.log(i);
    console.log(textArray.length - 1)
    document.getElementById(String(id)).innerHTML = "";
    if(i >= 0 && i <= textArray.length - 1)document.getElementById(String(id)).innerHTML = String(textArray[i]);
    else if(i >= textArray.length - 1 || (i == null && i > textArray.length - 2)) document.getElementById(String(id)).innerHTML = String(textArray[textArray.length - 1]);
    else document.getElementById(String(id)).innerHTML = String(textArray[0]);
    
}

function linkTo_UnCryptMailto(encoded) {
    var decoded = atob(encoded);
    var email = decoded.replace('%2C', '@').replace('%27', '.');
    window.location.href = 'mailto:' + email;
}

//only console:
function encodeEmail(email) {
    var replacedEmail = email.replace('@', '%2C').replace('.', '%27');
    var encodedEmail = btoa(replacedEmail);
    return encodedEmail;
}