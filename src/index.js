import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const firstBook = {
  img : "https://images-eu.ssl-images-amazon.com/images/I/91CqGHNvtbL.SR160,240_BG243,243,243.jpg",
  author : "Brandon Sanderson",
  title : "Oathbringer"
}

const secondBook = {
  img : "https://images-eu.ssl-images-amazon.com/images/I/81Bx9KP0dXL.SR160,240_BG243,243,243.jpg",
  author : "Patrick Rothfuss",
  title : "The Name of the Wind",
  price : "$21"
}
/*** 
 *  The name of the function needs to start 
 *  with a capital letter to be a component 
***/
function BookList(){
  return( 
    <section className="booklist">
      <Book img={firstBook.img} 
            author={firstBook.author} 
            title={firstBook.title} 
            price={firstBook.price}
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </Book>
      <Book img={secondBook.img} 
            author={secondBook.author} 
            title={secondBook.title} 
            price={secondBook.price}
      />
    </section>
  );
}

const Book = (props) => {
  const {img, title, author, price, children} = props
  return(
    <article className="book">
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{price}</p>
      {children}
    </article>
  );
};

ReactDom.render(<BookList />,document.getElementById('root'));
