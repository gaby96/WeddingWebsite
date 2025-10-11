

const validateInfo = (values) => {

    let errors = {};

    if (!values.name) {
        errors.name = "Name required."
    }

    if(!values.side){
        errors.name = "Select side"
    }
    return errors;
}

export default validateInfo;
