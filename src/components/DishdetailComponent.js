import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    )
  }

  renderComments(comments) {
    if (comments != null) {
      const commentaries = comments.map((comment) => {
        return (
          <ul className="list-unstyled">
            <li>{comment.comment}</li>
            <li>{comment.author}, {comment.date}</li>
          </ul>
        )
      });

      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {commentaries}
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderDish(this.props.dish)}
          {this.renderComments(this.props.dish.comments)}
        </div>
      </div>
    )
  }
}

export default DishDetail;
