import React, {useState} from 'react';
import style from "./recipe.module.css"
import Modal from 'react-modal'
import {WhatsappShareButton,WhatsappIcon,FacebookIcon,FacebookShareButton,TwitterIcon,TwitterShareButton} from 'react-share'
Modal.setAppElement("#root")
const Recipe = (props) => {
    const [open,setOpen] = useState(false);
    return (
        <div className={style.recipe}>
            <Modal isOpen={open} onRequestClose={()=> setOpen(false)} style={
                {overlay:{
                    backgroundColor:"rgba(0,0,0,.5)"
                },
            content:{
                backgroundColor:"white",
                zIndex:"10"
            }}
            }>
                <center><h1>{props.title}</h1>
                <img src={props.image} alt={props.title} />
                <h3>Calories - {props.calories}</h3></center>
                <h3>Recipe</h3>
                {props.ingredients.map((ing,id) =>(
                    <div key={id}>
                    <p>{ing.text}</p>
                    {(ing.img!==null)?<img src={ing.image} alt={ing.text} />:null}
                    
                    </div>
                ))}
                <h3>Why to Eat ?</h3>
                
                <ol>
                    {props.rest.healthLabels.map((healthy,id)=>(
                        <p key={id}>{healthy}</p>
                    ))}
                </ol>
                
                <button className="search-button" onClick={()=>setOpen(false)}><i className="fa fa-long-arrow-left" aria-hidden="true"></i></button>
            </Modal>
            <h1>{props.title}</h1> 
            <p>Calories - {props.calories}</p>
            <img className={style.image}src={props.image} alt={props.title} />
            <button className="search-button" onClick={()=>setOpen(true)}>View</button>
            <div className="share" style={{display:"flex",justifyContent:"space-around"}}>
                <WhatsappShareButton title="Recipe specially for you" url={window.location.href}>
                    <WhatsappIcon  size={32} round />
                </WhatsappShareButton>
                <FacebookShareButton quote="Recipe specially for you" url={window.location.href}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton title="Recipe specially for you" url={window.location.href}>
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
            </div>
            
        </div>
    );
};

export default Recipe;