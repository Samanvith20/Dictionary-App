import React from 'react';
import './Definition.css';

const Definition = ({ word, meanings, category,lightmode }) => {
  return (
    <div className='meanings'>
        {/* audio---------------------------- */}
      {meanings[0] && word && category === "en" && (
        <audio
          style={{ backgroundColor: "#fff", borderRadius: 15 }}
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          Your browser does not support the audio element.
        </audio>
      )}
      {/* audio---------------------------- */}
      {word === "" ? (
        <span className="subTitle">Start by typing a word in search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div  className="definition" 
               style={{backgroundColor:lightmode?" #3b5368":"white",color:lightmode?"white":"black"}}>
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <div>
                    <b>Example:</b> {def.example}
                  </div>
                )}
                {def.synonyms && (
                  <div>
                    <b>Synonyms:</b> {def.synonyms.map((s) => `${s}, `)}
                  </div>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definition;
