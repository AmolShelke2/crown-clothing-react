import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publisherKey =
    'pk_test_51LU1w0SHHPvWPBMUb6ZQdtbJkpaGZuo0Ajxzx5SpdhYLXNWrpHM0oWThZ7W9fGFEiiL8hL5q6gjpeQ96FzEKLHch00khuYUKgD';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Succesful');
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="Crown Clothing Ltd"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      image="https://svgshare.com/i/CUz.svg"
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publisherKey}
    />
  );
};

export default StripeCheckoutButton;
