import React from "react";
import { Card, CardImg, CardBody, CardText,CardTitle, CardSubtitle } from "reactstrap";
function RenderCard ({individualItem}){

    console.log("dish",item);
    return(
           <div>
                <Card>
                <CardImg src={individualItem.image} alt ={individualItem.name} />
                <CardBody>
                    <CardTitle>{individualItem.name}</CardTitle>
                    {individualItem.designation?<CardSubtitle>{individualItem.designation}</CardSubtitle>: null}
                     <CardText>{individualItem.description}</CardText>
                </CardBody>
        </Card>
    </div>
          
    );
}


function Home({dish,promotion,leader}) {
    return (
        <>
        <div className="container">
       <div className="row align-items-start">
       <div className="col-12 col-md m-1">
            <RenderCard item={dish} />
        </div>
        <div className="col-12 col-md m-1">
            <RenderCard item={promotion} />
        </div>
        <div className="col-12 col-md m-1">
            <RenderCard item={leader} />
    </div>
       </div>
        </div>
        </>
    )
}


export default Home;