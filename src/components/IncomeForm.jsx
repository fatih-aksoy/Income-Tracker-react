import React, { useRef } from "react";

const IncomeForm = ({ income, setIncome }) => {
  //! 1
  const desc = useRef(null);
  const price = useRef(null);
  const date = useRef(null);

  const AddIncome = (e) => {
    e.preventDefault();
    //! 2
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

//! 1 - burada girdigimiz const useRef degerleri ile asagida girdigimiz ref={desc}, ref={price}, ref={date} degeleri ile birebir.

//! 2 - buradaki res operatöru ile [...income], daha once eger varsa bizim income da bir obje, onu da al demektir. ve sonrasinda ustune bir obje daha ekle. sen bu objeye id ver cunku silme islemi yapacagiz. bir diger husus desc: desc.current.value ise bizim aslinda input a girdigimiz deger oluyor.
