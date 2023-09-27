const Book = (props) => {
  const { img, title, Author, getBook, id } = props;
  // console.log(props);
  const getSingleBook = () => {
    getBook(id);
  };

  return (
    <article className="book">
        <label>#{id}</label>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button>Click me</button>
      <h4>{Author}</h4>
    </article>
  );
};
export default Book;
