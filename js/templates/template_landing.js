let contTemplateWeb = document.querySelector("#contTemplateWeb")
let templateWeb = document.querySelector("#templateWeb").content
let fragmentWeb = document.createDocumentFragment()


document.addEventListener("DOMContentLoaded", ()=>{
    dataFechWeb()
})


const dataFechWeb = async ()=>{
    try{
        const resWeb = await fetch("landing-templates.json")
        const dataWeb = await resWeb.json()
        pintarAll(dataWeb)

        document.addEventListener("click", (e)=>{
            if(e.target.id === "lnum1"){
                contTemplateWeb.textContent = pintarAll(dataWeb)
                pintarAll(dataWeb)
            }else if(e.target.id === "lnum2"){
                contTemplateWeb.textContent = pintarRestaurant(dataWeb)
                pintarRestaurant(dataWeb)
            }else if(e.target.id === "lnum3"){
                contTemplateWeb.textContent = pintarPortfolios(dataWeb)
                pintarPortfolios(dataWeb)
            }else if(e.target.id === "lnum4"){
                contTemplateWeb.textContent = pintarVeterinaria(dataWeb)
                pintarVeterinaria(dataWeb)
            }else if(e.target.id === "lnum5"){
                contTemplateWeb.textContent = pintarGamer(dataWeb)
                pintarGamer(dataWeb)
            }else if(e.target.id === "lnum6"){
                contTemplateWeb.textContent = pintarFashion(dataWeb)
                pintarFashion(dataWeb)
            }else if(e.target.id === "lnum7"){
                contTemplateWeb.textContent = pintarParty(dataWeb)
                pintarParty(dataWeb)
            }else if(e.target.id === "lnum8"){
                contTemplateWeb.textContent = pintarCorporativo(dataWeb)
                pintarCorporativo(dataWeb)
            }
        })
        
    }catch(error){
        console.log("Error de carga")
    }
}


//FUNCION LANDING
const pintarAll = (dataWeb) =>{
    dataWeb.all.forEach(element => {
        //console.log(element.image1)
        templateWeb.querySelector("#image1").setAttribute("src", element.image1)
        templateWeb.querySelector("#image1").setAttribute("alt", element.title1)
        templateWeb.querySelector("#image2").setAttribute("src", element.image2)
        templateWeb.querySelector("#image2").setAttribute("alt", element.title2)

        
        templateWeb.querySelector("#webTitle").textContent = element.title1
        templateWeb.querySelector("#webTitle2").textContent = element.title2

        templateWeb.querySelector("#webDescription").textContent = element.descripcion1
        templateWeb.querySelector("#webDescription2").textContent = element.descripcion2

        templateWeb.querySelector("#titleProy").textContent = element.subtitleProy
        templateWeb.querySelector("#titleResp").textContent = element.subtitleResp
        templateWeb.querySelector("#titleResp2").textContent = element.subtitleResp

        templateWeb.querySelector("#desktop").textContent = element.dis1
        templateWeb.querySelector("#tablet").textContent = element.dis2
        templateWeb.querySelector("#movil").textContent = element.dis3
        templateWeb.querySelector("#desktop2").textContent = element.dis1
        templateWeb.querySelector("#tablet2").textContent = element.dis2
        templateWeb.querySelector("#movil2").textContent = element.dis3

        templateWeb.querySelector("#text1A").textContent = element.tip1A
        templateWeb.querySelector("#text1B").textContent = element.tip1B
        templateWeb.querySelector("#text1C").textContent = element.tip1C
        templateWeb.querySelector("#text1D").textContent = element.tip1D

        templateWeb.querySelector("#text2A").textContent = element.tip1A
        templateWeb.querySelector("#text2B").textContent = element.tip1B
        templateWeb.querySelector("#text2C").textContent = element.tip1C
        templateWeb.querySelector("#text2D").textContent = element.tip2D


        templateWeb.querySelector("#btnWeb1").dataset.id = element.id_block1
        templateWeb.querySelector("#btnWeb2").dataset.id = element.id_block2


        let cloneWeb = templateWeb.cloneNode(true)
        fragmentWeb.appendChild(cloneWeb)
    });
    contTemplateWeb.appendChild(fragmentWeb)
   


    //Ejecutar eventos
    document.addEventListener("click", (e)=>{
        if(e.target.dataset.id === "1"){
            window.open("https://antonmarchitec.github.io/landing_restaurant/")
        }else if(e.target.dataset.id === "2"){
            window.open("https://antonmarchitec.github.io/landing_veterinaria_vip/")
        }else if(e.target.dataset.id === "3"){
            window.open("https://antonmarchitec.github.io/landing_resposteria/")
        }else if(e.target.dataset.id === "4"){
            window.open("https://antonmarchitec.github.io/template_gamer/")
        }else if(e.target.dataset.id === "5"){
            window.open("https://antonmarchitec.github.io/template_visual_designer/")
        }else if(e.target.dataset.id === "6"){
            window.open("https://antonmarchitec.github.io/template_visit-tokio/")
        }else if(e.target.dataset.id === "7"){
            window.open("https://antonmarchitec.github.io/template_halloween/")
        }else if(e.target.dataset.id === "8"){
            window.open("https://antonmarchitec.github.io/fashion__template/")
        }
        
    }) 
}


//FUNCION LANDING 2
const pintarRestaurant = (dataWeb) =>{
    dataWeb.restaurant.forEach(element => {
        //console.log(element.image1)
        templateWeb.querySelector("#image1").setAttribute("src", element.image1)
        templateWeb.querySelector("#image1").setAttribute("alt", element.title1)
        templateWeb.querySelector("#image2").setAttribute("src", element.image2)
        templateWeb.querySelector("#image2").setAttribute("alt", element.title2)

        
        templateWeb.querySelector("#webTitle").textContent = element.title1
        templateWeb.querySelector("#webTitle2").textContent = element.title2

        templateWeb.querySelector("#webDescription").textContent = element.descripcion1
        templateWeb.querySelector("#webDescription2").textContent = element.descripcion2

        templateWeb.querySelector("#titleProy").textContent = element.subtitleProy
        templateWeb.querySelector("#titleResp").textContent = element.subtitleResp
        templateWeb.querySelector("#titleResp2").textContent = element.subtitleResp

        templateWeb.querySelector("#desktop").textContent = element.dis1
        templateWeb.querySelector("#tablet").textContent = element.dis2
        templateWeb.querySelector("#movil").textContent = element.dis3
        templateWeb.querySelector("#desktop2").textContent = element.dis1
        templateWeb.querySelector("#tablet2").textContent = element.dis2
        templateWeb.querySelector("#movil2").textContent = element.dis3

        templateWeb.querySelector("#text1A").textContent = element.tip1A
        templateWeb.querySelector("#text1B").textContent = element.tip1B
        templateWeb.querySelector("#text1C").textContent = element.tip1C
        templateWeb.querySelector("#text1D").textContent = element.tip1D

        templateWeb.querySelector("#text2A").textContent = element.tip1A
        templateWeb.querySelector("#text2B").textContent = element.tip1B
        templateWeb.querySelector("#text2C").textContent = element.tip1C
        templateWeb.querySelector("#text2D").textContent = element.tip2D


        templateWeb.querySelector("#btnWeb1").dataset.id = element.id_block1
        templateWeb.querySelector("#btnWeb2").dataset.id = element.id_block2


        let cloneWeb = templateWeb.cloneNode(true)
        fragmentWeb.appendChild(cloneWeb)
    });
    contTemplateWeb.appendChild(fragmentWeb)
   
}



//FUNCION LANDING 2
const pintarPortfolios = (dataWeb) =>{
    dataWeb.portfolios.forEach(element => {
        //console.log(element.image1)
        templateWeb.querySelector("#image1").setAttribute("src", element.image1)
        templateWeb.querySelector("#image1").setAttribute("alt", element.title1)
        templateWeb.querySelector("#image2").setAttribute("src", element.image2)
        templateWeb.querySelector("#image2").setAttribute("alt", element.title2)

        
        templateWeb.querySelector("#webTitle").textContent = element.title1
        templateWeb.querySelector("#webTitle2").textContent = element.title2

        templateWeb.querySelector("#webDescription").textContent = element.descripcion1
        templateWeb.querySelector("#webDescription2").textContent = element.descripcion2

        templateWeb.querySelector("#titleProy").textContent = element.subtitleProy
        templateWeb.querySelector("#titleResp").textContent = element.subtitleResp
        templateWeb.querySelector("#titleResp2").textContent = element.subtitleResp

        templateWeb.querySelector("#desktop").textContent = element.dis1
        templateWeb.querySelector("#tablet").textContent = element.dis2
        templateWeb.querySelector("#movil").textContent = element.dis3
        templateWeb.querySelector("#desktop2").textContent = element.dis1
        templateWeb.querySelector("#tablet2").textContent = element.dis2
        templateWeb.querySelector("#movil2").textContent = element.dis3

        templateWeb.querySelector("#text1A").textContent = element.tip1A
        templateWeb.querySelector("#text1B").textContent = element.tip1B
        templateWeb.querySelector("#text1C").textContent = element.tip1C
        templateWeb.querySelector("#text1D").textContent = element.tip1D

        templateWeb.querySelector("#text2A").textContent = element.tip1A
        templateWeb.querySelector("#text2B").textContent = element.tip1B
        templateWeb.querySelector("#text2C").textContent = element.tip1C
        templateWeb.querySelector("#text2D").textContent = element.tip2D


        templateWeb.querySelector("#btnWeb1").dataset.id = element.id_block1
        templateWeb.querySelector("#btnWeb2").dataset.id = element.id_block2


        let cloneWeb = templateWeb.cloneNode(true)
        fragmentWeb.appendChild(cloneWeb)
    });
    contTemplateWeb.appendChild(fragmentWeb)
   
}


//FUNCION LANDING 2
const pintarVeterinaria = (dataWeb) =>{
    dataWeb.veterinaria.forEach(element => {
        //console.log(element.image1)
        templateWeb.querySelector("#image1").setAttribute("src", element.image1)
        templateWeb.querySelector("#image1").setAttribute("alt", element.title1)
        templateWeb.querySelector("#image2").setAttribute("src", element.image2)
        templateWeb.querySelector("#image2").setAttribute("alt", element.title2)

        
        templateWeb.querySelector("#webTitle").textContent = element.title1
        templateWeb.querySelector("#webTitle2").textContent = element.title2

        templateWeb.querySelector("#webDescription").textContent = element.descripcion1
        templateWeb.querySelector("#webDescription2").textContent = element.descripcion2

        templateWeb.querySelector("#titleProy").textContent = element.subtitleProy
        templateWeb.querySelector("#titleResp").textContent = element.subtitleResp
        templateWeb.querySelector("#titleResp2").textContent = element.subtitleResp

        templateWeb.querySelector("#desktop").textContent = element.dis1
        templateWeb.querySelector("#tablet").textContent = element.dis2
        templateWeb.querySelector("#movil").textContent = element.dis3
        templateWeb.querySelector("#desktop2").textContent = element.dis1
        templateWeb.querySelector("#tablet2").textContent = element.dis2
        templateWeb.querySelector("#movil2").textContent = element.dis3

        templateWeb.querySelector("#text1A").textContent = element.tip1A
        templateWeb.querySelector("#text1B").textContent = element.tip1B
        templateWeb.querySelector("#text1C").textContent = element.tip1C
        templateWeb.querySelector("#text1D").textContent = element.tip1D

        templateWeb.querySelector("#text2A").textContent = element.tip1A
        templateWeb.querySelector("#text2B").textContent = element.tip1B
        templateWeb.querySelector("#text2C").textContent = element.tip1C
        templateWeb.querySelector("#text2D").textContent = element.tip2D


        templateWeb.querySelector("#btnWeb1").dataset.id = element.id_block1
        templateWeb.querySelector("#btnWeb2").dataset.id = element.id_block2


        let cloneWeb = templateWeb.cloneNode(true)
        fragmentWeb.appendChild(cloneWeb)
    });
    contTemplateWeb.appendChild(fragmentWeb)
   


   //Ejecutar eventos
   document.addEventListener("click", (e)=>{
   
    
}) 
}



//FUNCION LANDING 2
const pintarGamer = (dataWeb) =>{
    dataWeb.gamer.forEach(element => {
        //console.log(element.image1)
        templateWeb.querySelector("#image1").setAttribute("src", element.image1)
        templateWeb.querySelector("#image1").setAttribute("alt", element.title1)
        templateWeb.querySelector("#image2").setAttribute("src", element.image2)
        templateWeb.querySelector("#image2").setAttribute("alt", element.title2)

        
        templateWeb.querySelector("#webTitle").textContent = element.title1
        templateWeb.querySelector("#webTitle2").textContent = element.title2

        templateWeb.querySelector("#webDescription").textContent = element.descripcion1
        templateWeb.querySelector("#webDescription2").textContent = element.descripcion2

        templateWeb.querySelector("#titleProy").textContent = element.subtitleProy
        templateWeb.querySelector("#titleResp").textContent = element.subtitleResp
        templateWeb.querySelector("#titleResp2").textContent = element.subtitleResp

        templateWeb.querySelector("#desktop").textContent = element.dis1
        templateWeb.querySelector("#tablet").textContent = element.dis2
        templateWeb.querySelector("#movil").textContent = element.dis3
        templateWeb.querySelector("#desktop2").textContent = element.dis1
        templateWeb.querySelector("#tablet2").textContent = element.dis2
        templateWeb.querySelector("#movil2").textContent = element.dis3

        templateWeb.querySelector("#text1A").textContent = element.tip1A
        templateWeb.querySelector("#text1B").textContent = element.tip1B
        templateWeb.querySelector("#text1C").textContent = element.tip1C
        templateWeb.querySelector("#text1D").textContent = element.tip1D

        templateWeb.querySelector("#text2A").textContent = element.tip1A
        templateWeb.querySelector("#text2B").textContent = element.tip1B
        templateWeb.querySelector("#text2C").textContent = element.tip1C
        templateWeb.querySelector("#text2D").textContent = element.tip2D


        templateWeb.querySelector("#btnWeb1").dataset.id = element.id_block1
        templateWeb.querySelector("#btnWeb2").dataset.id = element.id_block2


        let cloneWeb = templateWeb.cloneNode(true)
        fragmentWeb.appendChild(cloneWeb)
    });
    contTemplateWeb.appendChild(fragmentWeb)
}


//FUNCION LANDING 2
const pintarFashion = (dataWeb) =>{
    dataWeb.fashion.forEach(element => {
        //console.log(element.image1)
        templateWeb.querySelector("#image1").setAttribute("src", element.image1)
        templateWeb.querySelector("#image1").setAttribute("alt", element.title1)
        templateWeb.querySelector("#image2").setAttribute("src", element.image2)
        templateWeb.querySelector("#image2").setAttribute("alt", element.title2)

        
        templateWeb.querySelector("#webTitle").textContent = element.title1
        templateWeb.querySelector("#webTitle2").textContent = element.title2

        templateWeb.querySelector("#webDescription").textContent = element.descripcion1
        templateWeb.querySelector("#webDescription2").textContent = element.descripcion2

        templateWeb.querySelector("#titleProy").textContent = element.subtitleProy
        templateWeb.querySelector("#titleResp").textContent = element.subtitleResp
        templateWeb.querySelector("#titleResp2").textContent = element.subtitleResp

        templateWeb.querySelector("#desktop").textContent = element.dis1
        templateWeb.querySelector("#tablet").textContent = element.dis2
        templateWeb.querySelector("#movil").textContent = element.dis3
        templateWeb.querySelector("#desktop2").textContent = element.dis1
        templateWeb.querySelector("#tablet2").textContent = element.dis2
        templateWeb.querySelector("#movil2").textContent = element.dis3

        templateWeb.querySelector("#text1A").textContent = element.tip1A
        templateWeb.querySelector("#text1B").textContent = element.tip1B
        templateWeb.querySelector("#text1C").textContent = element.tip1C
        templateWeb.querySelector("#text1D").textContent = element.tip1D

        templateWeb.querySelector("#text2A").textContent = element.tip1A
        templateWeb.querySelector("#text2B").textContent = element.tip1B
        templateWeb.querySelector("#text2C").textContent = element.tip1C
        templateWeb.querySelector("#text2D").textContent = element.tip2D


        templateWeb.querySelector("#btnWeb1").dataset.id = element.id_block1
        templateWeb.querySelector("#btnWeb2").dataset.id = element.id_block2


        let cloneWeb = templateWeb.cloneNode(true)
        fragmentWeb.appendChild(cloneWeb)
    });
    contTemplateWeb.appendChild(fragmentWeb)
}


//FUNCION LANDING 2
const pintarParty = (dataWeb) =>{
    dataWeb.party.forEach(element => {
        //console.log(element.image1)
        templateWeb.querySelector("#image1").setAttribute("src", element.image1)
        templateWeb.querySelector("#image1").setAttribute("alt", element.title1)
        templateWeb.querySelector("#image2").setAttribute("src", element.image2)
        templateWeb.querySelector("#image2").setAttribute("alt", element.title2)

        
        templateWeb.querySelector("#webTitle").textContent = element.title1
        templateWeb.querySelector("#webTitle2").textContent = element.title2

        templateWeb.querySelector("#webDescription").textContent = element.descripcion1
        templateWeb.querySelector("#webDescription2").textContent = element.descripcion2

        templateWeb.querySelector("#titleProy").textContent = element.subtitleProy
        templateWeb.querySelector("#titleResp").textContent = element.subtitleResp
        templateWeb.querySelector("#titleResp2").textContent = element.subtitleResp

        templateWeb.querySelector("#desktop").textContent = element.dis1
        templateWeb.querySelector("#tablet").textContent = element.dis2
        templateWeb.querySelector("#movil").textContent = element.dis3
        templateWeb.querySelector("#desktop2").textContent = element.dis1
        templateWeb.querySelector("#tablet2").textContent = element.dis2
        templateWeb.querySelector("#movil2").textContent = element.dis3

        templateWeb.querySelector("#text1A").textContent = element.tip1A
        templateWeb.querySelector("#text1B").textContent = element.tip1B
        templateWeb.querySelector("#text1C").textContent = element.tip1C
        templateWeb.querySelector("#text1D").textContent = element.tip1D

        templateWeb.querySelector("#text2A").textContent = element.tip1A
        templateWeb.querySelector("#text2B").textContent = element.tip1B
        templateWeb.querySelector("#text2C").textContent = element.tip1C
        templateWeb.querySelector("#text2D").textContent = element.tip2D


        templateWeb.querySelector("#btnWeb1").dataset.id = element.id_block1
        templateWeb.querySelector("#btnWeb2").dataset.id = element.id_block2


        let cloneWeb = templateWeb.cloneNode(true)
        fragmentWeb.appendChild(cloneWeb)
    });
    contTemplateWeb.appendChild(fragmentWeb)
}


//FUNCION LANDING 2
const pintarCorporativo = (dataWeb) =>{
    dataWeb.corporativo.forEach(element => {
        //console.log(element.image1)
        templateWeb.querySelector("#image1").setAttribute("src", element.image1)
        templateWeb.querySelector("#image1").setAttribute("alt", element.title1)
        templateWeb.querySelector("#image2").setAttribute("src", element.image2)
        templateWeb.querySelector("#image2").setAttribute("alt", element.title2)

        
        templateWeb.querySelector("#webTitle").textContent = element.title1
        templateWeb.querySelector("#webTitle2").textContent = element.title2

        templateWeb.querySelector("#webDescription").textContent = element.descripcion1
        templateWeb.querySelector("#webDescription2").textContent = element.descripcion2

        templateWeb.querySelector("#titleProy").textContent = element.subtitleProy
        templateWeb.querySelector("#titleResp").textContent = element.subtitleResp
        templateWeb.querySelector("#titleResp2").textContent = element.subtitleResp

        templateWeb.querySelector("#desktop").textContent = element.dis1
        templateWeb.querySelector("#tablet").textContent = element.dis2
        templateWeb.querySelector("#movil").textContent = element.dis3
        templateWeb.querySelector("#desktop2").textContent = element.dis1
        templateWeb.querySelector("#tablet2").textContent = element.dis2
        templateWeb.querySelector("#movil2").textContent = element.dis3

        templateWeb.querySelector("#text1A").textContent = element.tip1A
        templateWeb.querySelector("#text1B").textContent = element.tip1B
        templateWeb.querySelector("#text1C").textContent = element.tip1C
        templateWeb.querySelector("#text1D").textContent = element.tip1D

        templateWeb.querySelector("#text2A").textContent = element.tip1A
        templateWeb.querySelector("#text2B").textContent = element.tip1B
        templateWeb.querySelector("#text2C").textContent = element.tip1C
        templateWeb.querySelector("#text2D").textContent = element.tip2D


        templateWeb.querySelector("#btnWeb1").dataset.id = element.id_block1
        templateWeb.querySelector("#btnWeb2").dataset.id = element.id_block2


        let cloneWeb = templateWeb.cloneNode(true)
        fragmentWeb.appendChild(cloneWeb)
    });
    contTemplateWeb.appendChild(fragmentWeb)
}






