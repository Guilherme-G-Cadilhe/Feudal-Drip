import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { BUTTON_TYPE_CLASSES } from '../button/button.component';
import * as S from './payment-form.styles';

// Detalhes de Dados
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector'



const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const amount = useSelector(selectCartTotal)
  const currentUser = useSelector(selectCurrentUser)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)


  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Checa a existencia das configurações do Stripe
      return
    }

    setIsProcessingPayment(true)

    // Pasta raiz customizada netlify | sub-pasta | nome do arquivo da função
    const response = await fetch("/.netlify/functions/create-payment-intent",
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: amount * 100, })
      }).then(res => res.json());

    const { paymentIntent: { client_secret } } = response

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Cliente Teste'
        }
      }
    })

    setIsProcessingPayment(false)

    console.log('paymentResult', paymentResult)
    if (paymentResult.error) {
      alert(JSON.stringify(paymentResult.error))
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert("Payment Successful")
      }
    }


  }

  return (
    <S.PaymentFormContainer>
      <S.FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <S.PaymentButton isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>Order now!</S.PaymentButton>
      </S.FormContainer>
    </S.PaymentFormContainer>
  )
};

export default PaymentForm;