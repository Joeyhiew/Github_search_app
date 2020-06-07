import React from 'react';
import { useDispatch , connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { searchUsername , fetchUserRepo , fetchUserOrg } from '../../actions/searchAction'
import { checkUser } from '../../actions/searchUser'


const Search =({text})=> {

    const handleSearch =(e)=> {
        e.preventDefault();
        dispatch(checkUser(text))
        dispatch(fetchUserRepo(text))
        dispatch(fetchUserOrg(text))
      }

    const dispatch = useDispatch();

    return(
        <div className="formDiv">
            <Form inline onSubmit = {(e) => handleSearch(e)}>
                <FormControl type="text" placeholder="Search Username" className="mr-sm-2"
                            onChange = {e => dispatch(searchUsername(e.target.value))} />
                <Button type = "button" variant="outline-success" onClick = {(e) => handleSearch(e)}>Search</Button>
            </Form>
        </div>

    )
}

const mapStateToProps = state => ({
    text: state.user.text,
})
export default connect(mapStateToProps)(Search);