const SearchParams = () => {
    const location = "Charlotte, NC";
    return (
        <div className="search-params">
            <form>
                <label htmlFor="">
                    Location
                    <input
                        id="location"
                        value={location}
                        placeholder="Location"
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;
