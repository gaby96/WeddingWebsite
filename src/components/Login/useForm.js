import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const useForm = (validate) => {


    const [values, setValues] = useState({
        name: '',
        phone: '',
        city: '',
        district: '',
        pincode:''
    })

    const [error, setError] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        })
    }


    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError(validate(values));
        
        if (Object.keys(error).length === 0 && isSubmitting) {
            history.push('/home')
        }
    }



    return { handleChange, handleSubmit, values, error}
}

export default useForm;
