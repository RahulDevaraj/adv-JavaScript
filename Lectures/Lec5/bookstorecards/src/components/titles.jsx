import React, { Component } from 'react';
import {getBooks} from '../ExternalServices/bookService'
import 'bootstrap/dist/css/bootstrap.css';
import Review from './review';
class Titles extends Component {
    state = { 
        books:getBooks()
     } 

     handleDelete({_id})
     {
        const newBooks = this.state.books.filter(
            (book)=>(book._id!==_id)
        )
        this.setState({books:newBooks})
     }
    render() { 
        const {length} = this.state.books;
        if(length===0)
        return (
            <p>
                There are no Titles to Display
            </p>
        )
        else
        return (
            <>
            <h1>
                My Book Library
            </h1>

            <p>Showing {length} books</p>
{/* 
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Author</th>
                        <th>Number in Stock</th>
                        <th>Price</th>
                        <th>Year</th>
                        <th>Review</th>
                        <th>Action(s)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.books.map((book,index)=>(
                            <tr key={index}>
                                <td>{book._id}</td>
                                <td>{book.title}</td>
                                <td>{book.category.name}</td>
                                 <td>{book.author}</td>
                               <td>{book.numberInStock}</td>
                <td>{book.price}</td>
                <td>{book.publishYear}</td>
                                <td><Review status={book.liked}/></td>
                                <td>
                                    <button className='btn btn-danger' onClick={()=>{this.handleDelete(book)}}>X</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
             */}
             <div class="card-group">
                {
                this.state.books.map((book,index)=>(
                    <div class="card">
                    <img className="card-img-top" src=".../100px180/" alt="Card image cap"/>
                    <div class="card-body">
                      <h5 class="card-title">{book.title}</h5>
                      <p class="card-text">{book._id}</p>
                      <p class="card-text">{book.author}</p>
                      <p class="card-text">{book.category.name}</p>
                      <p class="card-text">{book.numberInStock}</p>
                      <p class="card-text">{book.price}</p>
                      <p class="card-text">{book.publishYear}</p>
                      <p class="card-text"><Review status={book.liked}/></p>
                      <p class="card-text"><button className='btn btn-danger' onClick={()=>{this.handleDelete(book)}}>X</button></p>
                    </div>
                  </div>
                ))
                }
                

  </div>
 
            </>
            
        );
    }
}
 
export default Titles;