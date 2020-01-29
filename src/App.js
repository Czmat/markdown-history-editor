import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import marked from 'marked';
import './App.css';

function App() {
  const [markup, setMarkup] = useState({ text: '' });

  const onChange = e => {
    markup.text = e.target.value;

    setMarkup({ text: e.target.value });
    console.log(markup.text);
  };

  marked.setOptions({
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    langPrefix: 'language-',
    highlight: function(code, lang) {
      if (lang === 'js') {
        return code;
      }
      return code;
    },
  });

  function createMarkup() {
    var convText = marked(markup.text, {
      sanitize: true,
    });

    return { __html: convText };
  }

  function MyComponent() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <textarea className="text-field" onChange={onChange}>
            {markup.text}
          </textarea>
        </div>
        <div className="col-sm-6">{MyComponent()}</div>
      </div>
      <button type="button" class="btn btn-outline-secondary">
        Secondary
      </button>
    </div>
  );
}

export default App;
