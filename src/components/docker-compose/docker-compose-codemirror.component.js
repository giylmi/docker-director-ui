import React from 'react'
import {Controlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import './docker-compose-codemirror.css';
require('codemirror/mode/yaml/yaml');

export const DockerComposeCodemirror = (props) => (
    <CodeMirror
        value={props.dockerCompose}
        options={{
          mode: 'yaml',
          theme: 'material',
          lineNumbers: true,
          readOnly: props.readOnly ? 'nocursor' : false
        }}
        onBeforeChange={(editor, data, value) => {
          props.onChange(value);
        }}
    />
);