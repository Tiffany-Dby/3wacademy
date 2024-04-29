const App = () => {
  const [result, setResult] = React.useState(0);

  const addOne = () => {
    setResult(result + 1);
  }

  const substractOne = () => {
    setResult(result - 1);
  }

  const multiplyBy100 = () => {
    setResult(result * 100);
  }

  const divideBy20 = () => {
    setResult(result / 20);
  }

  const resetResult = () => {
    setResult(0)
  }

  return (
    <div className="container calc flex flex-column">
      <div>
        <Result result={result} />
      </div>
      <div className="flex calc-btn-wrapper">
        <div className="flex flex-column cal-btn-operations">
          <AddOrSub handleClickAddOne={addOne} handleClickSubstractOne={substractOne} />
          <MultiplyOrDivide handleClickMultiplyBy100={multiplyBy100} handleClickDivideBy20={divideBy20} />
        </div>
        <div className="flex calc-btn-reset">
          <Button value="reset" handleClick={resetResult} />
        </div>
      </div>
    </div>
  );
}

const Result = ({ result }) => {
  return <p>{result}</p>;
}

const AddOrSub = ({ handleClickAddOne, handleClickSubstractOne }) => {
  return (
    <div >
      <div >
        <Button value="Add one" handleClick={handleClickAddOne} />
      </div>
      <div >
        <Button value="Remove one" handleClick={handleClickSubstractOne} />
      </div>
    </div>
  );
}

const MultiplyOrDivide = ({ handleClickMultiplyBy100, handleClickDivideBy20 }) => {
  return (
    <div >
      <div >
        <Button value="Multiply by 100" handleClick={handleClickMultiplyBy100} />
      </div>
      <div >
        <Button value="Divide by 20" handleClick={handleClickDivideBy20} />
      </div>
    </div>
  );
}

const Button = ({ name, value, handleClick }) => {
  return (
    <button className={name} type="button" onClick={handleClick}>{value}</button>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
