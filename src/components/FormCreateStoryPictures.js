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
        private:"",
       // photo: []
    };

    const [formState, setFormState]= useState(defaultState);
    const [errors, setErrors] = useState(defaultState);

    const formSchema = yup.object().shape({
        user: yup.string(),
        storyTitle: yup.string(),
        date: yup.date(),
        storyBody: yup.string(),
        private: yup.boolean()
        
    })

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






 return (

            <div className='form-container'>
                    <h2>Create <span className='text-primary'>Your Story</span> </h2>
                    <form onSubmit={formSubmit}>
                        <label htmlFor="user">
                            User Name
                        <input id="user" type="text" name="user" data-cy="user"
                                onChange={inputChange}
                                value={formState.name}
                            />
                        </label>
            
            
                        <label htmlFor="storyTitle">
                            Title
                        <input id="storyTitle" type="text" name="storyTitle" data-cy="storyTitle"
                                onChange={inputChange}
                                value={formState.name}
                            />
                        </label>
            
                        <label htmlFor="date">
                            Date
                        <input id="date" type="text" name="date" data-cy="date"
                                onChange={inputChange}
                                value={formState.name}
                            />
                        </label>
            
                        <lable htmlFor="storyBody">
                            Tell us your story
                        <textarea name="storyBody" id="storyBody" data-cy="storyBody"
                                onChange={inputChange}
                                value={formState.name}
                            />
                        </lable>
            
                        <label htmlFor="private">
                            
                        <input type="checkbox" id="private" name="private" data-cy="private"
                                onChange={inputChange}
                                checked={formState.private}
                            
                            />
                            This story is for my eyes only
                        </label>
            
            
                        <button disabled={isButtonDisabled} type="submit" name="submit" id="submit" className="btn btn-primary btn-block">
                            Publish
                         </button>
                   
            
                        <pre>{JSON.stringify(formState, null, 2)}</pre>
                        <pre>{JSON.stringify(post, null, 2)}</pre>
            
            
            
                    </form>
            
                </div>
            
            
                )
             }