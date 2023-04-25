const Events = () => {
  const handleMyEvent = (e) => {
    console.log('ativou o evento');
    console.log(e);
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>verdadeiro</h1>;
    } else {
      return <h1>falso</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique Aqui</button>
      </div>
      <button onClick={() => console.log('clicou 2')}>
        Clique aqui tambem
      </button>
      <button>
        onClick=
        {() => {
          if (true) {
            console.log('verdadeiro');
          }
        }}
      </button>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
