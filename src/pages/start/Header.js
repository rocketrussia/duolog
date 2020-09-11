import React from 'react';


const Header = () => {
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

export default Header
