import { useState } from "react"
import { Faq_Section } from "./Faq_Section"

export const Faq_Wrapper=()=>{
    const[faqindex,setFaqindex]=useState(null)
    const handleindex=(index)=>{
        setFaqindex((prev)=>{
            return index === prev ? null : index;
        })
    }
    const faq=[
        {
            question:"1. What is Fusion?",
            answer:"Fusion is your one-stop online shop for high-quality products across fashion, electronics, home essentials, and more — delivered right to your door.",
        },
        {
            question:"2. How do I place an order?",
            answer:"Simply browse our categories, add items to your cart, and click 'Checkout.' Follow the prompts to enter your shipping and payment details to complete your purchase.",
        },
        {
            question:"3. What payment methods do you accept?",
            answer:"Fusion accepts Visa, Mastercard, American Express, PayPal, Apple Pay, and select Buy Now, Pay Later options.",
        },
        {
            question:"4. Can I track my order?",
            answer:"Yes! Once your order ships, we’ll send you a tracking number via email. You can also log into your Fusion account to view real-time updates.",
        },
        {
            question:"5. How long does delivery take?",
            answer:"Standard shipping usually takes 3–7 business days, depending on your location. We also offer express delivery options at checkout.",
        },
        {
            question:"6. What is your return policy?",
            answer:"We accept returns within 30 days of delivery. Items must be unused and in original packaging. Start your return through your account dashboard or contact our support team.",
        },
        {
            question:"7. Is my personal information safe with Fusion?",
            answer:"Absolutely. We use SSL encryption and secure payment gateways to ensure your data stays private and protected.",
        },
        {
            question:"8. Do you offer international shipping?",
            answer:"Currently, Fusion ships only India Stay tuned — we’re working to expand internationally soon!",
        },
        {
            question:"9. How can I contact customer service?",
            answer:"You Have to visit Out Customer Services Page For more detail",
        },
        {
            question:"10. Do you offer gift cards?",
            answer:"Yes! Fusion eGift Cards are available in various denominations and are perfect for any occasion. Visit our Gift Card page to purchase.",
        },
    ]
    return(
        <>
        {
        faq.map((value,index)=>{
            return(
                <Faq_Section {...value} key={index}
                isopen={faqindex==index}
                setIsopen={()=>handleindex(index)}
                />
            )
        })
        }
        </>
    )
}