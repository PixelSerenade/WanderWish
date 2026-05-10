(function(){

    "use strict";
    
    var detailsform=document.querySelector("#destination_details_form");

    detailsform.addEventListener("submit",HandleFormSubmit);

    function HandleFormSubmit(event){
        event.preventDefault();

    
        var name=event.target.elements["name"].value;
        var location=event.target.elements["location"].value;
        var photo=event.target.elements["photo"].value;
        var description=event.target.elements["description"].value;

        for(var x of detailsform.elements)
        {
            x.value="";
        }

        var destinationCard=createDestinationCard(name,location,photo,description);

        var wishlistContainer=document.getElementById("destinations_container");

        if(wishlistContainer.children.length===0)
        {
            document.getElementById("title").innerHTML="My Wishlist";
        }

        document.getElementById("destinations_container").appendChild(destinationCard);
    }

    function createDestinationCard(name,location,photo,description){

        var card=document.createElement("div");
        card.className="card";

        var img1=document.createElement("img");
        img1.alt=`${name} Image`;

        const constantPhoto="images\\signpost.jpg";

        if(photo.length===0)
        {
            img1.src=constantPhoto;
        
        }else{
            img1.src=photo;
        
        }

        card.appendChild(img1);

    
        var card_body=document.createElement("div");
        card_body.className="card-body";

        var myh3=document.createElement("h3");
        myh3.innerHTML=name;
        card_body.appendChild(myh3);

        var myh4=document.createElement("h4");
        myh4.innerHTML=location;
        card_body.appendChild(myh4);

        if(description.length!==0){
            var myp=document.createElement("p");
            myp.innerHTML=description;
            myp.className="card-text";
            card_body.appendChild(myp);
        }

    

        var mybtn=document.createElement("button");
        mybtn.style.color="white";
        mybtn.style.backgroundColor="#FF6A96";
        mybtn.style.borderColor="#FF5D8F";
        mybtn.innerHTML="Remove";
        card_body.appendChild(mybtn);
        mybtn.addEventListener("click",removeDestiationCard);

        card.appendChild(card_body);

    
    
        return card;
    }

    function removeDestiationCard(event)
    {
        var card=event.target.parentElement.parentElement;
        card.remove();
    }
}());


