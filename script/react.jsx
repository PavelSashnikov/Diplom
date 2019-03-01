class Specific extends React.Component {      //Классовый компонент
    constructor(props) {
      super(props);
      this.state={price:this.props.price};
    }
    updatePrice = () =>{
      this.setState({
       price: this.state.price + 5
      });
    }
    render () {
      return (
            <div>
            <ul className="list">
                <li>Цвет: {this.props.color}</li>
                <li>Цена: <b>{this.state.price}</b> $</li>
                {this.state.price>50 && <li>Много денег</li>}
            </ul>
            <div><button className="button" onClick={this.updatePrice}>Поднять цену</button></div>
            </div>
        )
    }
  }


  function Flowers(props) {
      return (
          <div >
              <h1>{props.title}</h1>
              <img src={props.imageUrl}/>
              <p>{props.subtitle}</p>
          </div>
      )
  }

  function App(props) {
        const content = props.posts.map((post) =>
          <div key={post.id} className="container">
              <Flowers  title={post.title}  subtitle={post.subtitle} imageUrl={post.imageUrl} />
              <Specific color={post.color}  price={post.price} />
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
      title: 'Суккуленты',
      subtitle: 'Растения, имеющие специальные ткани для запаса воды',
      imageUrl: 'https://ae01.alicdn.com/kf/HTB1fulxm4WYBuNjy1zkq6xGGpXaQ/-.jpg_q50.jpg',
      color: 'зеленый',
      price: 10

      },
      {
      id: 2,
      title: 'Орхидеи',
      subtitle: 'Крупнейшее семейство однодольных растений',
      imageUrl: 'http://floria.by/image/cache/data/home%20flowers/orchidea/korolevskaya%20/korolevskij1-500x500.jpg',
      color: 'белые',
      price: 30

      }
  ];
  ReactDOM.render(
    <App posts={data} />,
    document.getElementById('root')
  );
