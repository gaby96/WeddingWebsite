

const validateInfo = (values) => {

    let errors = {};

    if (!values.name) {
        errors.name = "Name required."
    }


    if (!values.phone) {
        errors.phone = "Phone number required."
    }else if(!/^[0-9\b]+$/.test(values.phone)){
        errors.phone = "Please enter only number. No use gap."
    }else if(values.phone.length !== 10){
        errors.phone = "Please enter valid phone number."
    }


    if (!values.city) {
        errors.city = "City/Village required."
    }


    if (!values.district) {
        errors.district = "District required."
    }

    
    if (!values.pincode) {
        errors.pincode = "Pincode required."
    }else if(!/^[0-9\b]+$/.test(values.pincode)){
        errors.pincode = "Please enter only number. No use gap."
    }else if(values.pincode.length !== 6){
        errors.pincode = "Please enter valid pincode. No use gap."
    }


    return errors;
}

export default validateInfo;
