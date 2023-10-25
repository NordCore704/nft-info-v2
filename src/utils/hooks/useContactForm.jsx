import React, { useState } from "react";
import { useContactFormInput } from "@/utils/exports/formExports";
import emailjs from "@emailjs/browser";

const useContactForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const name = useContactFormInput("");
  const email = useContactFormInput("");
  const message = useContactFormInput("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const serviceId = "service_kj6jp4r";
    const publicKey = "DPdRzMaNJKGH1ga1W";
    const templateId = "template_zc87syd";

    const templateParams = {
      from_email: email,
      from_name: name,
      to_name: "Simon Peter",
      message,
    };

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      if (response.status === 200) {
        document.body.classList.add("overflow-hidden");
        setShowSuccess(true);
      }
    } catch (error) {
      console.log("error sending mail", error);
    }
  };
  return {
    name,
    email,
    message,
    showSuccess,
    handleSubmit,
    setShowSuccess,
  };
};

export default useContactForm;
