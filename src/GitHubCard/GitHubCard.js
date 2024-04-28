import React from "react";
import Card from "react-bootstrap/Card"
import Photo from './Photo.png'

function GitHubCard(){
    return(
        <div className="card">
        <Card style={{ width: "18rem"}}>
        {/* Use your GitHub info instead, but Mickey Mouse is used as an example */}
        <Card.Img variant="top" src={Photo} />
        {/* Source: https://en.wikipedia.org/wiki/Mickey_Mouse */}
        <Card.Body>
            <Card.Title>Picture</Card.Title>
            <Card.Text>
            Photo for the assignment. 
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
    );
}

export default GitHubCard;