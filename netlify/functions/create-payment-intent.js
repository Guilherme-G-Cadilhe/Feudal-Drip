require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY) // Chave secreta Stripe


// Função customizada a ser adicionada no objeto Exports do node
exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body) //10000 = 100,00

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "brl", // usd, ...| outras moedas
      payment_method_types: ["card"] // outras formas de pagamento
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent })
    }
  } catch (error) {
    console.log('error', error)
    return {
      status: 400,
      body: JSON.stringify({ error })
    }
  }
}