import React, { useState, useEffect } from "react";

const SelectedContact = ({selectedContact}) =>{
const [contactDetails, setContactDetails] = useState ({});

useEffect(() => {
    try {
      const fetchContactDetails = async () => { 
      const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
      const data = await response.json();
      HTMLFormControlsCollection.log("data", data);
      setContactDetails(data);
      };
      fetchContactDetails();
    } catch (error) {
      console.error(error);
    }
  },[]);

    return contactDetails ? (
      <>
      <h2>Contact Details for {contactDetails.name} </h2>
      <h3>Company: {contactDetails.contact.name} </h3>
      <h3>Company Catchphrase  {contactDetails.company.catchPhrase} </h3>
      </>
    ):(
      <h2>Loading...</h2>
    );
};
export default SelectedContact;

    
