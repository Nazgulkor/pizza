import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Cart, Home } from "./pages";




function App(){

  






  return(
    <div className="App">
        <div className="wrapper">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="card" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </div>
  )
}



// const mapStateToProps = state => {
//   return {
//     filters : state.filters,
//     items : state.pizzas.items
//   }
// }
// const mapDispatchToProps = dispatch =>{
//   return {
//     setPizzas : (items) => dispatch(setPizzasAction(items))
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App);



export default App;