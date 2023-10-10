function SearchForm() {
  return (
    <form>
      <div>
        <label htmlFor="lang">Language</label>
        <input id="lang" type="text" />
      </div>
      <div>
        <label htmlFor="trad">Tradition</label>
        <input id="trad" type="text" />
      </div>
      <div>
        <label htmlFor="order">Bhikkhu or Bhikkhunī</label>
        <input id="order" type="text" />
      </div>
      <div>
        <label htmlFor="ofType">Offense Type</label>
        <input id="ofType" type="text" />
      </div>
      <div>
        <label htmlFor="rulNum">Rule Number</label>
        <input id="rulNum" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SearchForm;