import React from "react";
import { Card, Button } from "react-bootstrap";
import "./DashboardComponent.css";
function DashboardComponent({ posts }) {
  return (
    <>
      <div className="cards-cantainer ">
        {posts.map((ele, key) => {
          return (
            <Card key={ele.id} className="mt-2" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{ele.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{key}</Card.Subtitle>
                <Card.Text>{ele.body}</Card.Text>
                <Card.Link href={`/dashboard/post/${ele.id}`}>Open</Card.Link>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default DashboardComponent;
