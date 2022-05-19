const MyForm = () => (
  <form>
    <input/>
    <input/>
    <button type="submit">Submit</button>
  </form>
)


const App = () => (
  <div>
    <h1>Welcome to my form</h1>
    <MyForm />
    <h2>You entered:</h2>
  </div>
);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);