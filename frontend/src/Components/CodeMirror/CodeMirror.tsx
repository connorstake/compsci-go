import CodeMirror from '@uiw/react-codemirror';
import { StreamLanguage } from '@codemirror/language';
import { go } from '../../legacy-modes/mode/go';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { gruvboxDark } from '@uiw/codemirror-theme-gruvbox-dark';
import { historyField } from '@codemirror/commands';


interface CodeMirrorWrapperProps {
    value: string;
    localStorageKey: string;
  }


export const CodeMirrorWrapper = ({value, localStorageKey}: CodeMirrorWrapperProps) => {

    const stateFields = { history: historyField };

    return (
        <CodeMirror 
        className='codeEditor'
        style={{ fontSize: '14px', width: '100%'}}
        value={value} 
        extensions={[StreamLanguage.define(go)]} 
        theme={gruvboxDark}
        onChange={(value, viewUpdate) => {
          localStorage.setItem(localStorageKey, value);
          const state = viewUpdate.state.toJSON(stateFields);
          localStorage.setItem('myEditorState', JSON.stringify(state));
          console.log("state:", state)
        }}
        />
    )
}