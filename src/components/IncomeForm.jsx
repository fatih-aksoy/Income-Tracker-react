import React, { useRef } from "react";

const IncomeForm = ({ income, setIncome }) => {
  const desc = useRef(null);
  const date = useRef(null);
  const price = useRef(null);

  const AddIncome = (e) => {
    e.preventDefault();
    setIncome([
      ...income,
      {
        id: Math.floor(Math.random() * 1000),
        desc: desc.current.value,
        price: price.current.value,
        date: date.current.value,
      },
    ]);

    desc.current.value = "";
    price.current.value = "";
    date.current.value = "";
  };

  return (
    <form className="income-form" onSubmit={AddIncome}>
      <div className="form-inner">
        <input
          type="text"
          name="desc"
          id="desc"
          placeholder="Income Description..."
          ref={desc}
        />
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Price..."
          ref={price}
        />
        <input
          type="date"
          name="date"
          id="date"
          placeholder="Income Date..."
          ref={date}
        />
        <input className="btn" type="submit" value="Add Income" />
      </div>
    </form>
  );
};

export default IncomeForm;

//! burada useRef kullandik fakar useRef nedir?
//! e.preventDefault() sayfa kendini yenilemesin diye
