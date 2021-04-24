import React from "react"

//styles
import "./styles/HeroNosotros.css"

//images
import meat from "../images/6458.png"

function HeroNosotros (){
return(
    <>
    <div className="HeroNosotros">
        <div className="contaner-img-nosotros">
            <img className="img-nosotros" src={meat} alt=""/>
        </div>
        <div className="text-nosotros">
            <div className="title-container-hero-nosotros">
                <h1 className="title-hero-nosotros">STEAKS</h1>
                <h1 className="title-hero-nosotros">PRODUCTION BY</h1>
                <h1 className="title-hero-nosotros">COLOMBIAN TECHNOLOGY</h1>
            </div>
            <div className="text-container-nosotros">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis similique!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dicta itaque officiis ex recusandae est harum! Optio, quidem! Pariatur cum doloremque reiciendis nemo asperiores aliquid, itaque perspiciatis lo eaque fugiat fugit.</p>
            </div>
        
        </div>
    </div>
    </>
)
}

export default HeroNosotros