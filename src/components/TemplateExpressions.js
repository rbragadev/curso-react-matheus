const TemplateExpressions = () => {  const person = {
    name: 'Raphael',
    age: 33,
  };

  return (
    // meu comentario
    <div>
      <h1>Ola {person.name}, tudo bem?</h1>
      <p className="teste">você tem {person.age} anos </p>
    </div>
  );
};

export default TemplateExpressions;
