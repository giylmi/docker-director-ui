import React, {Component} from 'react';
import {Container, Grid, GridColumn, Header} from 'semantic-ui-react'
import Navigation from "./navigation/navigation.component";
import ProjectCreate from "./project/create/project-create.component"
import ProjectList from "./project/project-list.component"
import {Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <Container>
          <Grid columns={2} divided>
            <GridColumn width={3}>
              <Navigation/>
            </GridColumn>
            <GridColumn width={13}>
              <Header as="h2">
                Projects
              </Header>
              <Route exact path="/" component={ProjectList}/>
              <Route exact path="/projects/create" component={ProjectCreate}/>
              <Route exact path="/projects/edit/:projectId" component={ProjectCreate}/>
            </GridColumn>
          </Grid>
        </Container>
    );
  }
}

export default App;
