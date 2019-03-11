function News(props) {
  return (
      <div >
          <img src={props.image}/>
          <span>{props.price} руб</span>
          <p>{props.title}</p>
      </div>
  )
}

function App(props) {
    const content = props.posts.map((post) =>
      <div key={post.id} className="product">
          <News  title={post.title} image={post.image} price={post.price} />
      </div>
    );
    return (
      <div>
        {content}
      </div>
    );
}

const data = [
  {
      id: 1,
      title: 'Joytech eGo AIO 1500mAh Black-White',
      image: 'img/ego_AIO.jpg',
      price: 123
  },
  {
      id: 2,
      title: 'Жидкость milk cream green',
      image: 'img/milk_cream_green.jpg',
      price: 345
  },
  {
      id: 3,
      title: 'Жидкость mr. Blintz',
      image: 'img/mr_blintz.jpg',
      price: 678
  },
  {
      id: 4,
      title: 'Жидкость old school tea fresh',
      image: 'img/tea_time.jpg',
      price: 234
  }
];
const popular = [
  {
      id: 1,
      title: 'SMOK Alien 220W AVP kit gun',
      image: 'img/alien.jpg',
      price: 2000
  },
  {
      id: 2,
      title: 'Joytech eGo AIO 1500mAh Black-White',
      image: 'img/ego_AIO.jpg',
      price: 123
  },
  {
      id: 3,
      title: 'Eleaf IJust S 3000mAh',
      image: 'img/ijust.jpg',
      price: 1700
  },
  {
      id: 4,
      title: 'Жидкость old school tea fresh',
      image: 'img/tea_time.jpg',
      price: 234
  }

]

ReactDOM.render(
  <App posts={data} />,
  document.querySelector(".products")
  );

function pop(event){
  event.preventDefault();
  ReactDOM.render(
  <App posts={popular} />,
  document.querySelector(".products")
  );
}
function getNew(event){
  event.preventDefault();
  ReactDOM.render(
  <App posts={data} />,
  document.querySelector(".products")
  );
}
