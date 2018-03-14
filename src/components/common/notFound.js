import * as React from "react";
import {Header} from "semantic-ui-react";
import {Link} from "react-router-dom";

const NotFound = ({back}) => (
    <div>
      <Header>
        Page you were looking is not found.
      </Header>
      <Link to={back || '/'}>Get back to reality!</Link>
    </div>
);

export default NotFound;