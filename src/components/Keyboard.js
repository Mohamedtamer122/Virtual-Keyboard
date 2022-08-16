import React from 'react'
import './Keyboard.css'
import {GiNightSky} from 'react-icons/gi'
import { useState } from 'react'
import {MdOutlineSpaceBar} from 'react-icons/md'


const Keyboard = () => {
const [display,SetDisplay]=useState('')
const [capslock,SetCapslock]=useState(false)
const [space,SetSpace]=useState(' ')
const [spacecount,Setspacecount]=useState(0)



function handleclick(v){
  if(capslock===false){

    SetDisplay(display.concat(v))

  }else{
    SetDisplay(display.concat(v.toUpperCase()))
  }
  


  
  


}

function deleteoneitem(){
  SetDisplay(display. slice(0, -1))



}




function handlecapslock(){
 SetCapslock(capslock ? false: true)





}


function deleteall(){
SetDisplay('')



}





  return (
    <div className="wholecontainer">
      <div className='heading'>
        <p><GiNightSky /></p>
       <p> Blue Wind Calculator</p>

      </div>

       <div className="display">
           display
           <div className='entiredisplay'>
            {display}
            </div>
          
       </div>


        <div className='keyboard'>
        
        <div className="thenumbers">
          <button className="button" onClick={()=>handleclick(1)}>1</button>
          <button className="button" onClick={()=>handleclick(2)}>2</button>
          <button className="button" onClick={()=>handleclick(3)}>3</button>
          <button className="button" onClick={()=>handleclick(4)}>4</button>
          <button className="button" onClick={()=>handleclick(5)}>5</button>
          <button className="button" onClick={()=>handleclick(6)}>6</button>
          <button className="button" onClick={()=>handleclick(7)}>7</button>
          <button className="button" onClick={()=>handleclick(8)}>8</button>
          <button className="button" onClick={()=>handleclick(9)}>9</button>
          <button className="button" onClick={()=>handleclick(0)} >0</button>
          <button className="deletebutton" onClick={()=>deleteoneitem()} >delete</button>
          </div>

          
          <div className="thecharcters">
          <button className="button" onClick={()=>handleclick("q")}>Q</button>
          <button className="button" onClick={()=>handleclick("w")}>W</button>
          <button className="button" onClick={()=>handleclick("e")}>E</button>
          <button className="button" onClick={()=>handleclick("r")}>R</button>
          <button className="button" onClick={()=>handleclick("t")}>T</button>
          <button className="button" onClick={()=>handleclick("y")}>Y</button>
          <button className="button" onClick={()=>handleclick("u")}>U</button>
          <button className="button" onClick={()=>handleclick("i")}>I</button>
          <button className="button" onClick={()=>handleclick("o")}>O</button>
          <button className="button" onClick={()=>handleclick("p")} >P</button>
          
          </div>


          <div className="thecharcters">
          <button className="button" onClick={()=>handleclick("a")}>A</button>
          <button className="button" onClick={()=>handleclick("s")}>S</button>
          <button className="button" onClick={()=>handleclick("d")}>D</button>
          <button className="button" onClick={()=>handleclick("f")}>F</button>
          <button className="button" onClick={()=>handleclick("g")}>G</button>
          <button className="button" onClick={()=>handleclick("h")}>H</button>
          <button className="button" onClick={()=>handleclick("j")}>J</button>
          <button className="button" onClick={()=>handleclick("k")}>K</button>
          <button className="button" onClick={()=>handleclick("l")}>L</button>
          <button className="deletebutton" onClick={()=>handlecapslock()}>Capslock</button>
          
          </div>


           
          <div className="thecharcters">
          <button className="button" onClick={()=>handleclick("z")}>Z</button>
          <button className="button" onClick={()=>handleclick("x")}>X</button>
          <button className="button" onClick={()=>handleclick("c")}>C</button>
          <button className="button" onClick={()=>handleclick("v")}>V</button>
          <button className="button" onClick={()=>handleclick("b")}>B</button>
          <button className="button" onClick={()=>handleclick("n")}>N</button>
          <button className="button" onClick={()=>handleclick("m")}>M</button>
          <button className="button" onClick={()=>handleclick(",")}>,</button>
          <button className="button" onClick={()=>handleclick(".")}>.</button>
          <button className="button" onClick={()=>handleclick("?")}>?</button>
          
          </div>
         
        <div className='spacebutton'>
          <button className="spacebutton2" onClick={()=>handleclick(" ")}><MdOutlineSpaceBar className="highlight"/></button>
          </div>


          <div className='spacebutton'>
          <button className="spacebutton2" onClick={()=>deleteall()}>Clear All</button>
          </div>

        </div>



      </div>
  )
}

export default Keyboard