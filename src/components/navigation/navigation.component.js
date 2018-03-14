import React, {Component} from 'react'
import {Label, Menu} from 'semantic-ui-react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Link} from "react-router-dom";
import {getProjectsLength} from "../../reducers/projects";

class Navigation extends Component {

  render() {
    const { activeItem, counts } = this.props;

    return (
        <Menu vertical fluid>
          <Menu.Item as={Link} to="/" active={activeItem === 'projects'}>
            <Label color='teal'>{counts.projects}</Label>
            Projects
          </Menu.Item>
        </Menu>
    )
  }
}

const mapStateToProps = state => ({
  activeItem: state.navigation.activeItem,
  counts: {
    projects: getProjectsLength(state.projects)
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation)
