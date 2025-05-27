import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addBook } from '../../redux/books/actionCreators'
import './BookForm.css'
import booksData from '../../data/books.json'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()

  const handleAddRandomBook = () => {
    const randomindex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomindex]
    const randomBookWithID = {
      ...randomBook,
      isFavorite: false,
      id: uuidv4(),
    }

    dispatch(addBook(randomBookWithID))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && author) {
      const book = {
        title,
        author,
        isFavorite: false,
        id: uuidv4(),
      }
      dispatch(addBook(book))
      setTitle('')
      setAuthor('')
    }
  }

  return (
    <div className="app-block book-form">
      <h2>Добавить новую книгу</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Заголовок:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="title">Автор:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>
        <button type="submit">Добавить книгу</button>
        <button type="button" onClick={handleAddRandomBook}>
          Добавить случайную
        </button>
      </form>
    </div>
  )
}
export default BookForm
