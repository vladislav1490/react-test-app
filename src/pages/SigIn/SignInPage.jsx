import React from "react";
import Form from "../../components/form/Form";

function SignInPage({ setIsLoggedIn }) {
  return (
    <div className="SignInPage">
      <Form setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default SignInPage;
