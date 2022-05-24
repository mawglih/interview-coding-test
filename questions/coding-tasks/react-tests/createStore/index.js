const items = [
  {id: 1, title: 'guitar', image: 'https://pixabay.com/images/id-149427/', price: 200.25, quantity: 2, isActive: true},
  {id: 2, title: 'elguitar', image: 'https://pixabay.com/images/id-2925274/', price: 400.0, quantity: 12, isActive: true},
  {id: 3, title: 'violin', image: 'https://pixabay.com/images/id-156558/', price: 650.15, quantity: 4, isActive: true},
  {id: 4, title: 'clarinet', image: 'https://pixabay.com/images/id-4118588/', price: 1080.0, quantity: 1, isActive: true},
  {id: 5, title: 'flute', image: 'https://pixabay.com/images/id-3090204/', price: 200.25, quantity: 2, isActive: true},
  {id: 6, title: 'organ', image: 'https://pixabay.com/images/id-3599447/', price: 222001.25, quantity: 1, isActive: false},
  {id: 7, title: 'cello', image: 'https://pixabay.com/images/id-4709128/', price: 1500.64, quantity: 7, isActive: true},
  {id: 8, title: 'grandpiano', image: 'https://pixabay.com/images/id-2025167/', price: 20400, quantity: 5, isActive: true},
  {id: 9, title: 'saxaphone', image: 'https://pixabay.com/images/id-3246650/', price: 3200.75, quantity: 4, isActive: true},
  {id: 10, title: 'accordion', image: 'https://pixabay.com/images/id-5188186/', price: 1234.45, quantity: 12, isActive: true},
  {id: 11, title: 'bassguitar', image: 'https://pixabay.com/images/id-913092/', price: 5200.75, quantity: 21, isActive: true},
  {id: 12, title: 'arpha', image: 'https://pixabay.com/images/id-4600984/', price: 15758.43, quantity: 4, isActive: true},
  {id: 13, title: 'drums', image: 'https://pixabay.com/images/id-3109364/', price: 5674.25, quantity: 3, isActive: true},
  
];


const App = () => (
  <div>
    <h1>Welcome to my Online Music Store</h1>
  </div>
);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
  );
