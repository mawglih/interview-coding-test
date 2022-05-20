const MyForm = ({
  handleSubmit,
}) => {
  const [val, setVal] = React.useState({firstname: '', lastname: ''});
  const onValueChange = (e) => {
    e.preventDefault(e);
    const {id, value} =e.target;
    setVal((prevState) => ({
      ...prevState,
      [id]: value
    }));
  }
  const onFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(val);
    setVal({firstname: '', lastname: ''});
  }
  return(
    <form onSubmit={onFormSubmit}> 
      <div className="row mb-3">
        <label htmlFor="firstname" className="col-sm-2 col-form-label">First Name</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="firstname" value={val.firstname} onChange={(e) => {onValueChange(e)}}/>
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="lastname" className="col-sm-2 col-form-label">Last Name</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="lastname" value={val.lastname} onChange={(e) => {onValueChange(e)}}/>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}


const App = () => { 
  const [data, setData] = React.useState([]);
  const handledata = (val) => {
    setData((prevState) => ([
      ...prevState,
      val,
    ]));
  }

  return(
    <div className="container">
      <h1>Welcome to my form</h1>
      <MyForm  handleSubmit={handledata}/>
      {(data && data.length > 0) && (
        <div className="display">
          <h2>You entered:</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={Math.random(1000) * 888}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
  }
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);