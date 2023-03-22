import ContactForm from "../../components/contact/contact-form";
import { Fragment } from "react";
import Head from "next/head";

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>문의하기</title>
        <meta
          name="Contact"
          content="문의하기"
        />
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default ContactPage;