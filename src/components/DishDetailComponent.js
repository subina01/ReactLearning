import React from "react";
import { Card, CardBody, CardText, CardTitle, CardImg} from "reactstrap";




   function RenderDish ({dish})
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

    function RenderComments({comments})
    { 
        if (comments !=null)
        {  
            
            const commentLists = comments.map((comment) =>
            {   
               
                return (  
                    <div className="container">
                    <li key = {comment.id} className="mb-2">
                        <p>{comment.comment}</p>
                       <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(comment.date))}</p>
                    </li>
                    </div>
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

    
    const DishDetail = (props) =>
    {
          if (props.dish == null)
            {
               return(
                <div></div>
                
               )
            }
            
                return(
                    <div className="container">
                        <div className="row">
                              <div  className= "col-12 col-md-5 m-1">
                                <RenderDish dish ={props.dish}/>
                             </div>
                              <div className= "col-12 col-md-5 m-1">
                                    <RenderComments comments= {props.dish.comments}/>
                                </div>
                        </div>
                    </div>
                )

                
            
        
        
    }

    


export default DishDetail;