var header = document.getElementById('Header');
var profilePicture = document.getElementById('profilePicture');

var overviewPage = document.getElementById('overviewPage');
var toolsPage = document.getElementById('toolsPage');
var projectsPage = document.getElementById('projectsPage');

var overviewLink = document.getElementById('OverviewLink');
var toolsLink = document.getElementById('ToolsLink');
var projectsLink = document.getElementById('ProjectsLink');
var linkUnderline = "0 0 2px 0";


var isDarkMode = true;

if(window.innerWidth < 700){
        profilePicture.style.width = "100px";
    }
    else{
        profilePicture.style.width = "150px";
    } 

const page = {
    overview:1,
    projects:2,
    tools:3,
}
var currentPage = page.overview;

console.log(currentPage);
window.onscroll = function() {scrollFunction()};
setActivepage(currentPage);

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
     profilePicture.style.width = "50px";
  } else {
     if(window.innerWidth < 700){
        profilePicture.style.width = "100px";
    }
    else{
        profilePicture.style.width = "150px";
    } 
  }
}

function Themebutton(){
    if(isDarkMode) setLightMode();
    else setDarkMode();
    isDarkMode = !isDarkMode;

    function setLightMode(){
        document.documentElement.style.setProperty('--textColor','black');
        document.documentElement.style.setProperty('--borderColor','rgb(215, 215, 215)');
        document.documentElement.style.setProperty('--backgroundColorDark','rgb(223, 223, 223)');
        document.documentElement.style.setProperty('--backgroundColorLight','rgb(238, 238, 238)');
        document.documentElement.style.setProperty('--underlineColor','rgb(2, 116, 255)');
        document.documentElement.style.setProperty('--backgroundColorDarkTransparent','rgb(223, 223, 223, 0.92)')
    }

    function setDarkMode(){
        document.documentElement.style.setProperty('--textColor','white');
        document.documentElement.style.setProperty('--borderColor','rgb(36, 41, 46)');
        document.documentElement.style.setProperty('--backgroundColorDark','rgb(1, 5, 10)');
        document.documentElement.style.setProperty('--backgroundColorLight','rgb(12, 14, 18)');
        document.documentElement.style.setProperty('--underlineColor','rgb(242, 107, 84 )');
        document.documentElement.style.setProperty('--backgroundColorDarkTransparent','rgb(1, 5, 10, 0.92)')
    }
}

function setActivepage(index){
    if(index == page.projects){
        currentPage = page.projects;
        projectsPage.style.display = "block";
        toolsPage.style.display = "none";
        overviewPage.style.display = "none";

        projectsLink.style.borderWidth = linkUnderline;
        toolsLink.style.borderWidth = "0";
        overviewLink.style.borderWidth = "0";

        projectsLink.style.padding = "0 5px 10px 5px";
        toolsLink.style.padding = "0 5px 12px 5px";
        overviewLink.style.padding = " 0 5px 12px 5px";
    }
    else if(index == page.tools){
        currentPage = page.tools;
        projectsPage.style.display = "none";
        toolsPage.style.display = "block";
        overviewPage.style.display = "none";

        projectsLink.style.borderWidth = "0";
        toolsLink.style.borderWidth = linkUnderline;
        overviewLink.style.borderWidth = "0";

        projectsLink.style.padding = " 0 5px 12px 5px";
        toolsLink.style.padding = "0 5px 10px 5px";
        overviewLink.style.padding = " 0 5px 12px 5px";
    }
    else{
        currentPage = page.overview;
        projectsPage.style.display = "none";
        toolsPage.style.display = "none";
        overviewPage.style.display = "block";

        projectsLink.style.borderWidth = "0";
        toolsLink.style.borderWidth = "0";
        overviewLink.style.borderWidth = linkUnderline;

        projectsLink.style.padding = "0 5px 12px 5px";
        toolsLink.style.padding = "0 5px 12px 5px";
        overviewLink.style.padding = "0 5px 10px 5px";
    }
}