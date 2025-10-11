

const validateInfo = (values) => {

    let errors = {};

    if (!values.name) {
        errors.name = "Name required."
    }
    return errors;
}

export default validateInfo;
