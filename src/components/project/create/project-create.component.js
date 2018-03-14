import React, {Component} from 'react';
import {Button, ButtonGroup, ButtonOr, Form, Header} from 'semantic-ui-react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import DockerComposeUpload from "../../docker-compose/docker-compose-upload.component";
import {Link} from "react-router-dom";
import {addProject, editProject} from "../../../actions/projects";
import {getProjectById} from "../../../reducers/projects";
import NotFound from "../../common/notFound";

class ProjectCreate extends Component {

  componentWillMount() {
    this.setState({
      project: this.props.project || {
        title: "",
        compose: ""
      }
    });
  }

  handleChangeEvent = (e, change) => this.handleChange(change);
  handleChange = ({name, value}) => this.setState({
    project: {
      ...this.state.project,
      [name]: value
    }
  });

  handleSubmit() {
    const {title, compose} = this.state.project;

    if (this.props.edit) {
      this.props.editProject(this.props.project.id, this.state.project);
    }
    else {
      this.props.addProject(title, compose);
      this.setState({
        project: {
          title: "",
          compose: ""
        }
      });
    }
  }

  render() {
    const {title, compose} = this.state.project;
    const {notFound} = this.props;

    const view = !notFound ?
        (
            <div>
              <Header>
                {this.props.edit ? 'Edit' : 'Create'} project
              </Header>
              <Form onSubmit={this.handleSubmit.bind(this)}>
                <Form.Field>
                  <label>Project Name</label>
                  <Form.Input name="title" value={title} placeholder='Project Name'
                              onChange={this.handleChangeEvent.bind(this)}
                  />
                </Form.Field>
                <DockerComposeUpload name="compose" readOnly={false} value={compose}
                                     onChange={this.handleChange.bind(this)}/>
                <ButtonGroup>
                  <Button color="teal" type='submit'
                          disabled={title === ''}>{this.props.edit ? 'Edit' : 'Create'}</Button>
                  <ButtonOr/>
                  <Button as={Link} to="/">Cancel</Button>
                </ButtonGroup>
              </Form>
            </div>
        )
        : (
            <NotFound to="/"/>
        );

    return view;
  }
}

const mapStateToProps = (state, ownProps) => {
  const edit = !!ownProps.match.params.projectId;
  const project = edit ? getProjectById(state.projects, ownProps.match.params.projectId) : undefined;
  return {
    project,
    edit,
    notFound: edit && !project
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  addProject,
  editProject
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectCreate)