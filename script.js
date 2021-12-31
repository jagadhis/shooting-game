.arena{
    
    background-color: black;
    border: 10px solid black;
    
    
    height: 300px;
    width: auto;
    overflow: hidden;
    align-content: center;
    
}


#gameTitle{
    font-size: 30px;
    text-align: center;
                                                                       font-family: "Lucida Console", "Courier New", monospace;
                                                
    padding: 20px;
    border: 5px solid black;
   
    
      
  background-color: example;
  animation: example 4s infinite;
 
}

@keyframes example {
  0%   {background-color:purple;}
  25%  {background-color: yellow;}
  50%  {background-color: blue;}
  75% {background-color: powderblue;}
  100% {background-color: green;}
}


#p1banner{
    position: relative;
    float: left;
    margin-top: 70px;
    height: 70px;
    width: 270px;
    
    
    writing-mode: horizontal-lr;
    text-align: center;
    font-family: "Lucida Console", "Courier New", monospace;
    background-color: red;

}
#p1banner23{
    position: relative;
    top: 49%;
    float: left;
    height: 15%;
    width: 70px;
    margin-left: -135px;
    /* background-color: powderblue; */
    background-image: url("Images/p1Fire.png");
    


}




#p1{
    
    position: relative;
    float: left;
    top: 55%;
    height: 70px;
    width: 70px;
    margin-left: -220px;
    

}


#p2{
    
    position: relative;
    float: right;
    top: 55%;
    height: 70px;
    width: 70px;
    margin-right: -200px;

}







#p2banner{
    position: relative;
    float: right;
    margin-top: 70px;
    height: 70px;
    width: 270px;
    
    writing-mode: horizontal-lr;
    text-align: center;
font-family: "Lucida Console", "Courier New", monospace;
    background-color: blue;

    
}

#p2banner24{
    position: relative;
    float: right;
    top: 50%;
    height: 70px;
    width: 70px;
    margin-right: -95px;

    
}



#ShootBtn {
    background-color: yellow; 
    border: 1px solid red;
    color: black;
    padding: 10px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
  font-family: "Lucida Console", "Courier New", monospace;
    font-size: 20px;
    cursor: pointer;
    
  }


  .Score-Board{
      border: 1px solid black;
      background-color: black;
      padding: 5px;
      display: grid;
      grid-template-columns: 35% 35% auto;
       animation: example 4s infinite;
      

  }
  @keyframes example {
  0%   {background-color:purple;}
  25%  {background-color: yellow;}
  50%  {background-color: blue;}
  75% {background-color: powderblue;}
  100% {background-color: green;}
}



  .grid-item{
      background-color: powderblue;
      border: 1px solid black;
      padding: 10px;
      font-size: 20px;
        text-align: center;
        font-weight: bold;
        animation: example 4s infinite

  }
    }
  @keyframes example {
  0%   {background-color:purple;}
  25%  {background-color: yellow;}
  50%  {background-color: blue;}
  75% {background-color: powderblue;}
  100% {background-color: green;}
}

  

  .result{
    border: 1px solid black;
    background-color: black;
    padding: 2px;
    display: grid;
    font-weight: bold;

}
  .result-item{
    background-color: powderblue;
    border: 1px solid black;
    padding: 5px;
    font-size: 20px;
      text-align: center;
      position: relative;

}


 
#resetBtn{
    background-color: green; 
    border: 1px solid black;

    color: white;
    padding: 10px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
  font-family: "Lucida Console", "Courier New", monospace;
    font-size: 20px;
    cursor: pointer;
}


#p1FireScore{
    font-size: 50px;
    font-weight: bold;
}
#p2FireScore{
    font-size: 50px;
    font-weight: bold;
}