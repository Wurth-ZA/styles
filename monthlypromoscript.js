function alterEshopLink(){
 const link = document.getElementById('nav_shop');
   link.href = 'https://eshop.wurth.co.za/Product-categories/3128.cyid/3128.cgid/en/GB/ZAR/';
};

function updateBorder(){
   const productsLink = document.getElementById("nav_shop"); // Get the element
   productsLink.classList.remove("active");
    const promoLink = document.getElementById("nav_direct_shoplink"); // Get the element
   promoLink.classList.add("active");   
};

    const constructionPromoTab = document.getElementById("constructioninkcontainer");
    const autoPromoTab = document.getElementById("autolinkcontainer");
    const metalPromoTab = document.getElementById("metallinkcontainer"); // Get the element
    const cargoPromoTab = document.getElementById("cargolinkcontainer"); // Get the element

    const autoTab = document.getElementById("auto");
    const cargoTab = document.getElementById("cargo");
    const metalTab = document.getElementById("metal");
    const constructionTab = document.getElementById("construction");

    function removeTabClasses(){
        autoPromoTab.classList.remove("active");
        metalPromoTab.classList.remove("active");
        cargoPromoTab.classList.remove("active");
        constructionPromoTab.classList.remove("active");
        autoTab.classList.remove("active");
        metalTab.classList.remove("active");
        cargoTab.classList.remove("active");
        constructionTab.classList.remove("active");
    }

    function showConstructionOnly(){
            cargoPromoTab.classList.add("d-none");
            cargoTab.classList.add("d-none");
            metalPromoTab.classList.add("d-none");
            metalTab.classList.add("d-none");
            autoPromoTab.classList.add("d-none");
            autoTab.classList.add("d-none");
            constructionPromoTab.classList.add("active");
            constructionTab.classList.add("active");
    }
    
    function showAutoOnly(){
            cargoPromoTab.classList.add("d-none")
            cargoTab.classList.add("d-none");
            metalPromoTab.classList.add("d-none");
            metalTab.classList.add("d-none");
            constructionPromoTab.classList.add("d-none");
            constructionTab.classList.add("d-none");
            autoPromoTab.classList.add("active");
            autoTab.classList.add("active");   
    }
    
    function showMetalOnly(){
            cargoPromoTab.classList.add("d-none")
            cargoTab.classList.add("d-none");
            autoPromoTab.classList.add("d-none");
            autoTab.classList.add("d-none");
            constructionPromoTab.classList.add("d-none");
            constructionTab.classList.add("d-none");
            metalPromoTab.classList.add("active");
            metalTab.classList.add("active");
    }
    
    function showCargoOnly(){
            metalPromoTab.classList.add("d-none");
            metalTab.classList.add("d-none");
            autoPromoTab.classList.add("d-none");
            autoTab.classList.add("d-none");
            constructionPromoTab.classList.add("d-none");
            constructionTab.classList.add("d-none");
            cargoPromoTab.classList.add("active")
            cargoTabTab.classList.add("active");
    }
    
    
    function divisionalPromo(){
    	try{
        
        let division = dataLayerInfo['cstInfo']['dv'];
        
        if(division === "AUTO"){
            removeTabClasses()
            showAutoOnly()
            return
        }else if(division === "METALL"){
            removeTabClasses()
            showMetalOnly()
            return
        }else if(division === "CARGO"){
            removeTabClasses()
            showCargoOnly()
            return
        }else{
            removeTabClasses()
            showConstructionOnly()
            return
        }
      }catch(error){
      	return
      }
    }

