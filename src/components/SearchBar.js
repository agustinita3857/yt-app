import React,{useState} from 'react';


const SearchBar=({onFormSubmit})=>{
    const [term,setTerm]=useState('');

    const onSubmit = event => {
        event.preventDefault();

        onFormSubmit(term)
    };
    return(
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Search for a video</label>
                    <input 
                    type="text" 
                    value={term}
                    onChange={(event)=>{setTerm(event.target.value)}}
                    />
                </div>
            </form>
        </div>
    )
};

/* MISMO CODIGO QUE ARRIBA PERO CON CLASE

class SearchBar extends React.Component{
    state={term:''};

 onInputChange=(event)=>{
    this.setState({term:event.target.value})
    }
   onFormSubmit = event => {
      event.preventDefault();

      this.props.onFormSubmit(this.state.term)
    };
*/
export default SearchBar;