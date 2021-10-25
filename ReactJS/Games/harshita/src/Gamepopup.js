import React from 'react'

function Gamepopup({isWin, closeHandle, points}) {
    return (
        <div 
            style={{
                position: "fixed", 
                top:"30%", 
                left:"35%",
                backgroundColor:"rgb(3, 60, 174", 
                color:"white",
                width:"400px", 
                height:"400px", 
                display:"flex", 
                alignItems:"center", 
                justifyContent:"center", 
                flexDirection:"column",
                zIndex:"1",
                borderRadius:"20px"
            }}
        >
            <h1 style={{marginBottom:"30px"}}>Game Ends</h1>
            {
                isWin ? <div style={{fontSize:"16px"}}>Congratulations ! You Won :) </div> : <div style={{fontSize:"16px"}}>Opps !, try again :( </div>
            }
            <h3 style={{fontSize:"16px", marginTop:"10px", color:"hotpink"}}>You Got {points}/6 points</h3>
            <button 
                className="mt-5 px-5 btn btn-light"
                onClick={closeHandle}
            >
                OK
            </button>
        </div>
    )
}

export default Gamepopup
