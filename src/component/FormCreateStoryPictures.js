import React, {useState, useEffect} from 'react';
import axios from "axios";
import * as yup from "yup"

export default function FormCreateStoryPictures(){

    const [post, setPost] =useState([]);
    const [isButtonDisabled, setIsButtonDisabled] =useState(true);

    const defaultState = {
        user:"",
        storyTitle:"",
        date:"",
        storyBody:"",
        privacy:"",
        photo: []
    };

    const [formState, setFormState]= useState(defaultState);
    const [errors, setErrors] = useState(defaultState);

    // const formSchema = yup.object(),shape({
        
    // })

        const validateChange = e =>{
            yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid =>{
                setErrors({...errors, [e.target.name]:""});
            })
            .catch(err => setErrors({...errors, [e.target.name]: err.errors[0]}));
        };

        useEffect(()=>{
            formSchema.isValid(formState).then(valid=>{
                console.log("valid?", valid);
                setIsButtonDisabled(valid);
            });
        }, [formState]);
        console.log("this is post after useEffect",post );

        const formSubmit = e =>{
            e.preventDefault();
            console.log("Form Submitted!")
            axios
            .post("https://reqres.in/api/users", formState)
            .then(response =>{
                console.log(response)
                setPost([...post, response.data]);
                setFormState(defaultState)
            })
            .catch(err => console.log(err.response));
        };


        const inputChange =e =>{
            console.log("input changed", e.target.value);
            e.persist()

            const newFormData = {
                ...formState,
                [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
            };
            validateChange(e)
            setFormState(newFormData);

        };






    return(

    <h2>Create Your Story</h2>
    <form onSubmit = {formSubmit}>
        <label htmlFor = "user">
            User Name
            <input id="user" type="text" name="user" data-cy="user"
            onChange={inputChange}
            value={formState.name}
            />
        </label>

        <label htmlFor = "storyTitle">
            Title
            <input id="storyTitle"
        </label>
    </form>

    )

}