import CodeMirror from '@uiw/react-codemirror';
import { StreamLanguage } from '@codemirror/language';
import { go } from '../../legacy-modes/mode/go';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { historyField } from '@codemirror/commands';


interface CodeMirrorWrapperProps {
    value: string;
  }


export const CodeMirrorWrapper = ({value}: CodeMirrorWrapperProps) => {

    const stateFields = { history: historyField };

    return (
        <CodeMirror 
        className='codeEditor'
        style={{ fontSize: '14px', width: '100%'}}
        value={value} 
        height="650px" 
        extensions={[StreamLanguage.define(go)]} 
        theme={okaidia}
        onChange={(value, viewUpdate) => {
          localStorage.setItem('myValue', value);
          const state = viewUpdate.state.toJSON(stateFields);
          localStorage.setItem('myEditorState', JSON.stringify(state));
          console.log("state:", state.doc)
        }}
        />
    )
}