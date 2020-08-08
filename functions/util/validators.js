const { user } = require("firebase-functions/lib/providers/auth");

 //helper functions for validation
 const isEmail = (email) => {
    const regEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(email.match(regEx))
        return true;
    else
        return false;
 };

 const isEmpty = (string) => {
    if(string.trim() === '') 
        return true;
    else
        return false;

 };

 exports.validateSignupData = (data) => {
     // validate data
    let errors = {};
    
    //check email
    if(isEmpty(data.email)){
        errors.email = 'Must not be empty';
    } else if(!isEmail(data.email)){
        errors.email = 'Must be a valid email';
    }

    //check password
    if(isEmpty(data.password)){
        errors.password = 'Must not be empty';
    }
    else if(data.password !== data.confirmPassword){
        errors.confirmPassword = 'Passwords must match';
    }

    //check handle
    if(isEmpty(data.handle)){
        errors.handle = 'Must not be empty';
    }

    //if validation fails
    /*if(Object.keys(errors).length > 0){
        return res.status(400).json(errors);
    }*/

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
 }

 exports.validateLoginData = (user) => {
    let errors = {};

    if(isEmpty(user.email))
        errors.email = 'Must not be empty';
    if(isEmpty(user.password))
        errors.password = 'Must not be empty';

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
 }

 exports.reduceUserDetails = (data) => {
     let userDetails = {};

    if(data.hasOwnProperty('bio')){
        if(!isEmpty(data.bio)){
            userDetails.bio = data.bio;
        }
    }

    if(data.hasOwnProperty('website')){
        if(!isEmpty(data.website)){
            if(data.website.trim().substring(0, 4) !== 'http'){
                userDetails.website = `http://${data.website.trim()}`;
            }
            else{
                userDetails.website = data.website.trim();
            }        
        }
    }

    if(data.hasOwnProperty('location')){
        if(!isEmpty(data.location)){
            userDetails.location = data.location;
        }
    }
    return userDetails;
 }