function alterEshopLink(){
   const link = document.getElementById('nav_shop'); // Get the element
   link.href = 'https://eshop.wurth.co.za/Product-categories/3128.cyid/3128.cgid/en/GB/ZAR/'; // Change link
};

function updateBorder(){
   const productsLink = document.getElementById("nav_shop"); // Get the element
   productsLink.classList.remove("active"); // Remove class
   const promoLink = document.getElementById("nav_direct_shoplink"); // Get the element
   promoLink.classList.add("active"); // Add class
};

    const constructionPromoTab = document.getElementById("constructioninkcontainer"); // Get the element
    const autoPromoTab = document.getElementById("autolinkcontainer"); // Get the element
    const metalPromoTab = document.getElementById("metallinkcontainer"); // Get the element
    const cargoPromoTab = document.getElementById("cargolinkcontainer"); // Get the element
 
    const autoTab = document.getElementById("auto"); // Get the element
    const cargoTab = document.getElementById("cargo"); // Get the element
    const metalTab = document.getElementById("metal"); // Get the element
    const constructionTab = document.getElementById("construction"); // Get the element

    function removeTabClasses(){
        autoPromoTab.classList.remove("active"); // Remove class
        metalPromoTab.classList.remove("active"); // Remove class
        cargoPromoTab.classList.remove("active"); // Remove class
        constructionPromoTab.classList.remove("active"); // Remove class
        autoTab.classList.remove("active"); // Remove class
        metalTab.classList.remove("active"); // Remove class
        cargoTab.classList.remove("active"); // Remove class
        constructionTab.classList.remove("active"); // Remove class
    }

    function showConstructionOnly(){
            cargoPromoTab.classList.add("d-none"); // Add class
            cargoTab.classList.add("d-none"); // Add class
            metalPromoTab.classList.add("d-none"); // Add class
            metalTab.classList.add("d-none"); // Add class
            autoPromoTab.classList.add("d-none"); // Add class
            autoTab.classList.add("d-none"); // Add class
            constructionPromoTab.classList.add("active"); // Add class
            constructionTab.classList.add("active"); // Add class
    }
    
    function showAutoOnly(){
            cargoPromoTab.classList.add("d-none") // Add class
            cargoTab.classList.add("d-none"); // Add class
            metalPromoTab.classList.add("d-none"); // Add class
            metalTab.classList.add("d-none"); // Add class
            constructionPromoTab.classList.add("d-none"); // Add class
            constructionTab.classList.add("d-none"); // Add class
            autoPromoTab.classList.add("active"); // Add class
            autoTab.classList.add("active");  // Add class
    }
    
    function showMetalOnly(){
            cargoPromoTab.classList.add("d-none"); // Add class
            cargoTab.classList.add("d-none"); // Add class
            autoPromoTab.classList.add("d-none"); // Add class
            autoTab.classList.add("d-none"); // Add class
            constructionPromoTab.classList.add("d-none"); // Add class
            constructionTab.classList.add("d-none"); // Add class
            metalPromoTab.classList.add("active"); // Add class
            metalTab.classList.add("active"); // Add class
    }
    
    function showCargoOnly(){
            metalPromoTab.classList.add("d-none"); // Add class
            metalTab.classList.add("d-none"); // Add class
            autoPromoTab.classList.add("d-none"); // Add class
            autoTab.classList.add("d-none"); // Add class
            constructionPromoTab.classList.add("d-none"); // Add class
            constructionTab.classList.add("d-none"); // Add class
            cargoPromoTab.classList.add("active") // Add class
            cargoTabTab.classList.add("active"); // Add class
    }
    
    
    function divisionalPromo(){
    	try{ 
        let division = dataLayerInfo['cstInfo']['dv'];
        
        if(division === "AUTO"){
            removeTabClasses() // Function call
            showAutoOnly() // Function call
            return
        }else if(division === "METALL"){
            removeTabClasses() // Function call
            showMetalOnly() // Function call
            return
        }else if(division === "CARGO"){
            removeTabClasses() // Function call
            showCargoOnly() // Function call
            return
        }else if(division === "BAU"){
            removeTabClasses() // Function call
            showConstructionOnly() // Function call
            return
        }else{
         return
        }
      }catch(error){
      	return // Return if error
      }
    }

