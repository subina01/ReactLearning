import React, { Component } from "react";
import { Card, CardBody, CardText, CardTitle, CardImg, CardImgOverlay } from "reactstrap";


class DishDetail extends Component
{

    renderDish (dish)
    {
        
           return(
            <Card>
                <CardImg width = "100%" src={dish.image} alt ={dish.name}/>
                <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText> 
                </CardBody>
            </Card>
           )
        
    }

    renderComments(comments)
    { 
        if (comments !=null)
        {  
            
            const commentLists = comments.map((comment) =>
            {   
               
                return (  
                    <li key = {comment.id} className="mb-2">
                        <p>{comment.comment}</p>
                        <p> --{comment.author}, {comment.date}</p>
                    </li>
                );
               
            });
            
        

        return(
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">{commentLists}</ul>
            </div>
        );
        }

        else {
            return(
                <div> </div>
            );
        }
    }   

    
    render()
    {
        const {dish} = this.props;
        {   
            if (dish == null)
            {
               return(
                <div></div>
                
               )
            }
            
                return(
                    <div className="container">
                        <div className="row">
                              <div  className= "col-12 col-md-5 m-1">
                                   {this.renderDish(dish)}
                             </div>
                              <div className= "col-12 col-md-5 m-1">
                                    {this.renderComments(dish.comments)}
                                </div>
                        </div>
                    </div>
                )

                
            
        
        }
    }

    

}
export default DishDetail;