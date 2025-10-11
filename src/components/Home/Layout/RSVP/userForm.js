import { useState } from 'react';

const useForm = (validate) => {


    const [values, setValues] = useState({
        name: '',
        guest: '',
        message: '',
    })

    const [error, setError] = useState({});
    const [setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError(validate(values));
        
    }



    return { handleChange, handleSubmit, values, error}
}

export default useForm;
