import React from 'react'
import {Form} from 'semantic-ui-react'
import {DockerComposeCodemirror} from "./docker-compose-codemirror.component";

const DockerComposeUpload = (props) => (
    <Form.Field>
      <label>docker-compose.yml</label>
      <DockerComposeCodemirror readOnly={props.readOnly} dockerCompose={props.value}
                               onChange={(value)=>{
                                 props.onChange({
                                   name: props.name,
                                   value
                                 })
                               }} />
    </Form.Field>
);

export default DockerComposeUpload