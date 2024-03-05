let anchorLinks = document.querySelectorAll(".anchor");

anchorLinks.forEach(function(anchorLink){
   
anchorLink.addEventListener("click" , function(){
    
    // when I click on any anchor link, it will first remove the "blue" class from all anchor links
    anchorLinks.forEach(function(link){
        link.classList.remove("blue");
    })

    // then add it only to the clicked link, that only one link has the "blue" class at any given time.
    anchorLink.classList.add("blue");
})
})