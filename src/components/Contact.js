const Contact=({my_automobile})=>{
    return(
      <>
        <div class="conct">
          <h2>Contact Details</h2>
          <p>LinkedIn : <a href={my_automobile.socialmedia.LinkedInUrl}>LinkedIn Profile</a></p>
          <p>Location : <a href={my_automobile.socialmedia.Location}>Location</a></p>
        </div>
      </>
    );
  }
  export default Contact;