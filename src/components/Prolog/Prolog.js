import React from 'react';
import styles from './prolog.module.css'

// TODO: Add new style
// const Prolog = () => {
//   return (
//       <div>
//         <div>Logo</div>
//         <div>Description</div>
//         <div>Icon 1</div>
//         <div>Icon 2</div>
//         <div>Icon 3</div>
//         <div>Download</div>
//       </div>
//   )
// }

const Prolog = () => {
  return (
    <>
      <h3>
        Duolog
        <span
          style={{
            fontSize: "12px",
            fontWeight: "normal",
            color: "grey",
            verticalAlign: "top",
          }}
        >
                {" "}
          Alpha
              </span>
      </h3>
      <p className="about">
        Приложение помогает подготовиться к интервью или экзамену
      </p>
    </>
  )
}

export default Prolog