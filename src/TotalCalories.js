import React from "react";
import { Container, Row, Col } from 'reactstrap';

class TotalCalories extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Total Calories: {this.props.totalCalories}</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TotalCalories;
