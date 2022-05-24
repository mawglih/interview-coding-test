const items = [
  {id: 1, title: 'guitar', image: 'https://cdn.pixabay.com/photo/2013/07/12/15/06/guitar-149427_1280.png', price: 200.25, quantity: 2, isActive: true},
  {id: 2, title: 'electrical guitar', image: 'https://cdn.pixabay.com/photo/2017/11/07/00/18/guitar-2925274_1280.jpg', price: 400.0, quantity: 12, isActive: true},
  {id: 3, title: 'violin', image: 'https://cdn.pixabay.com/photo/2013/07/13/10/06/violin-156558_1280.png', price: 650.15, quantity: 4, isActive: true},
  {id: 4, title: 'clarinet', image: 'https://cdn.pixabay.com/photo/2019/04/10/23/54/instrument-4118588_1280.jpg', price: 1080.0, quantity: 1, isActive: true},
  {id: 5, title: 'flute', image: 'https://cdn.pixabay.com/photo/2018/01/18/12/39/music-3090204_1280.jpg', price: 200.25, quantity: 2, isActive: true},
  {id: 6, title: 'organ', image: 'https://cdn.pixabay.com/photo/2018/08/11/20/37/church-3599447_1280.jpg', price: 222001.25, quantity: 0, isActive: false},
  {id: 7, title: 'cello', image: 'https://cdn.pixabay.com/photo/2019/12/20/19/39/cello-4709128_1280.jpg', price: 1500.64, quantity: 7, isActive: true},
  {id: 8, title: 'grand piano', image: 'https://cdn.pixabay.com/photo/2017/01/31/15/38/amigos-2025167_1280.png', price: 20400, quantity: 5, isActive: true},
  {id: 9, title: 'saxaphone', image: 'https://cdn.pixabay.com/photo/2018/03/21/13/16/saxophone-3246650_1280.jpg', price: 3200.75, quantity: 4, isActive: true},
  {id: 10, title: 'accordion', image: 'https://cdn.pixabay.com/photo/2020/05/18/19/48/accordion-5188186_1280.png', price: 1234.45, quantity: 12, isActive: true},
  {id: 11, title: 'bass guitar', image: 'https://cdn.pixabay.com/photo/2015/08/29/14/18/bass-913092_1280.jpg', price: 5200.75, quantity: 21, isActive: true},
  {id: 12, title: 'harp', image: 'https://cdn.pixabay.com/photo/2019/11/04/11/48/harp-4600984_1280.png', price: 15758.43, quantity: 4, isActive: true},
  {id: 13, title: 'drums', image: 'https://cdn.pixabay.com/photo/2018/01/26/18/17/drums-3109364_1280.jpg', price: 5674.25, quantity: 3, isActive: true},
  
];

const StoreItem = ({
  id,
  title,
  img,
  price,
  bool,
  quantity,
  handleClick,
  handleOpen,
}) => {

  return (
    <div className="item">
      <div className="clickDiv" onClick={() => handleOpen(id)}>
        <img src={img} alt={title} className="img img-thumbnail"/>
        <h3 className="title">{title}</h3>
        <h5>${price.toFixed(2)}</h5>
        <span className="badge rounded-pill bg-danger myBadge">Item ID {id}</span>
        <span className={quantity === 0 ? "badge bg-warning myBadge" : "badge bg-success myBadge"}>Available in store {quantity} items</span>
      </div>
      <div>
        <button className="btn btn-primary" disabled={!bool} onClick={() => handleClick(id)}>Add to cart</button>
      </div>
    </div>
    
  )
}


const StoreList = ({
 handleClick,
 handleOpen,
}) => {

  return (
    <div className="cont">
      {items.map(item => (
        <StoreItem
          key={item.id}
          id={item.id}
          title={item.title}
          img={item.image}
          price={item.price}
          bool={item.isActive}
          quantity={item.quantity}
          handleClick={handleClick}
          handleOpen={handleOpen}
        />
      ))}
    </div>
  )
}

const MyCart = ({
  prod,
}) => {
  const [itemsInCart, setItemsInCart] = React.useState([]);
  console.log('in cart', itemsInCart)
  React.useEffect(() => {
    setItemsInCart(prev => ([
      ...prev,
      prod
    ]));
  }, [prod]);
  return (    
    <div className="cartContainer">
      {itemsInCart.length > 1 ? (
       <React.Fragment>
      <h3>Items in the cart</h3>
        {itemsInCart.length > 1 && itemsInCart.map((item, idx) => (
          <div key={idx}>
            <h5>{item.title}</h5>
            {/* TODO: add count of items */}
          </div>
        ))}
      </React.Fragment>
      ) : <h4>Your cart is empty</h4>
      }
    </div>
  );
}

const Modal = ({
  itemId,
  setOpen,
}) => {
  const [item, setItem] = React.useState({});
  React.useEffect(() => {
    const found = items.filter(el => el.id === itemId);
    setItem(found[0]);
    return () => setItem({});
  }, []);
  
  return(
    <div className="modalCont" onClick={() => setOpen(false)}>
      <div className="modalDialog">
        <div className="modalContent">
          <div className="modalHeader">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <h5 className="modalTitle" id="myModalLabel">{item.title}</h5>
          </div>
          <div className="modalBodyContainer">
           <div className="modalBody">
            <div className="modalImage">
              <img src={item.image} alt={item.title}  />
            </div>
            <div className="modalPrice">
              <h3>Buy for ${item.price}</h3>
            </div>
          </div>
          </div>
   
          <div className="modalFooter">
            <button type="button" className="btn btn-info" onClick={() => setOpen(false)}>Back to store</button>
          </div>
        </div>
      </div>
    </div>
    )
}

const App = () => {

  const [open, setOpen] = React.useState(false);
  const [itemId, setItemId] = React.useState(null);
  const [itemsAdded, setItemsAdded] = React.useState([]);
  const handleclick = id => {
    if(id) {
      setItemId(id);
      setItemsAdded(items.find(item => item.id === id));
    }
  }
  const handleOpen = (id) => {
    setOpen(true);
    setItemId(id);
  }
  console.log('ids added', itemsAdded);
  return (
    <div className="container">
      <h1 className="storeTitle">Welcome to my Online Music Store</h1>
      <MyCart prod={itemsAdded} />
      <StoreList handleClick={handleclick} handleOpen={handleOpen}/>
    {open && <Modal setOpen={setOpen} itemId={itemId}/>}
    </div>
  );
}
  

ReactDOM.render(
    <App/>,
  document.getElementById('root')
);