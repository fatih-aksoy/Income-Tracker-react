import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import IncomeForm from "./components/IncomeForm";

function App() {
  const [income, setIncome] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < income.length; i++) {
      total += parseInt(income[i].price);
    }
    setTotalIncome(total);
  });

  //! 1
  function deleteItem(id) {
    const newArr = income.filter((item) => item.id !== id);
    setIncome(newArr);
  }

  return (
    <div className="App">
      <Header totalIncome={totalIncome} />
      <IncomeForm income={income} setIncome={setIncome} />
      <div className="incomeListContainer">
        {income.map((item) => (
          <div key={item.id} className="incomeList">
            <div>{item.desc}</div>
            <div>{item.price} $</div>
            <div>{item.date}</div>
            <button onClick={(e) => deleteItem(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

//! bizim incomleramiz array olacak

//! 1 - ben silme islemi icin burada income i filter layacagim. filter ladigimi const newArr icine atacagim. bu islemde, item.id !== id,  unlem isaretini kaldirip sadece == yazsaydim, sadece o id yi alirdi, onu alirdi digeleri silinirdi. unlem yazarak bunu alma, bunun disindakileri al diyorum.
