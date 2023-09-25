import "./Search.css"

const Search = ({action}) => {
  return (
    <input type="text" 
    placeholder="search shoe..." onInput={(ev) => action(ev.target.value)}/>
  )
}
export default Search;