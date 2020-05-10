import React from 'react';
import { Link } from "react-router-dom";
import { Button }from "react-bootstrap";


class Home extends React.Component {
    render() {
        return (
            <div>
                <Link to="create">
                    <Button variant="primary">Create Timer</Button>
                </Link>
            </div>
        )
    }

}

export default Home;