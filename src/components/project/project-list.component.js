import React, {Component} from 'react';
import {Accordion, Icon, Segment, SegmentGroup} from 'semantic-ui-react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getProjects} from "../../reducers/projects";
import {Link} from "react-router-dom";
import {DockerComposeCodemirror} from "../docker-compose/docker-compose-codemirror.component";
import {addProject, removeProject} from "../../actions/projects";

class ProjectList extends Component {

  state = {
    activeIndex: -1
  };

  handleClick = (e, titleProps) => {
    const {index} = titleProps;
    const {activeIndex} = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({activeIndex: newIndex})
  };

  render() {
    const {activeIndex} = this.state;

    let projects = this.props.projects.map((item, i) => (
        [
          <Segment key={`segment_${item.id}`}>
            {item.title}
            <Link to={`/projects/edit/${item.id}`}>
              <Icon name="edit"/>
            </Link>
            <Icon link name="remove" color="red" onClick={() => (this.props.removeProject(item.id))}/>
          </Segment>,
          <SegmentGroup key={`segmentGroup_${item.id}`}>
            <Accordion>
              <Accordion.Title active={activeIndex === i} index={i} onClick={this.handleClick}>
                <Icon name='dropdown'/>
                <strong>docker-compose.yml</strong>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === i} index={i}>
                {activeIndex === i ?
                    <DockerComposeCodemirror
                        dockerCompose={item.compose}
                    /> : null
                }
              </Accordion.Content>
            </Accordion>
          </SegmentGroup>
        ]
    ));
    return (
        <div>
          <Link to="/projects/create">Create project</Link>

          <SegmentGroup>
            {projects}
          </SegmentGroup>
        </div>

    );
  }
};

const mapStateToProps = state => ({
  projects: getProjects(state.projects)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addProject,
  removeProject
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectList)