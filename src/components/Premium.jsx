import axios from "axios"
import { BASE_URL } from "../utils/contant.js"
import { useEffect, useState } from "react"


const Premium = () => {
  const [isUserPremium, setIsUserPremium] = useState(false);
  useEffect(() => {
    verifyPremiumUser();
  }, []);

  const verifyPremiumUser = async () => {
    const res = await axios.get(BASE_URL + "/premium/verify", {
      withCredentials: true,
    });

    if (res.data.isPremium) {
      setIsUserPremium(true);
    }
  };

  const handleBuyClick = async (type) => {
  const order= await axios.post(BASE_URL+"/payment/create",{
    membershipType:type

  },{withCredentials:true})

  const options = {
    key:order.data.keyId,
    amount:order.data.amount,
    currency: order.data.currency,
    name: "Connection web",
    description: 'Tpremimum connection',
    order_id:order.data.orderId, 
    prefill: {
      name: order.data.notes.firstName+order.data.notes.lastName,
    },
    theme: {
      color: '#8c54f3'
    },
    handler: verifyPremiumUser,
  };

  const rzp =  window.Razorpay(options);
  rzp.open();
    
  }

  return !isUserPremium?(
    <div className="m-10">
    <div className="flex w-full">
      <div className="card bg-base-300 rounded-box grid h-80 flex-grow place-items-center">
        <h1 className="font-bold text-3xl">Silver Membership</h1>
        <ul>
          <li> - Chat with other people</li>
          <li> - 100 connection Requests per day</li>
          <li> - Blue Tick</li>
          <li> - 3 months</li>
        </ul>
        <button
          onClick={() => handleBuyClick("silver")}
          className="btn btn-secondary"
        >
          Buy Silver
        </button>
      </div>
      <div className="divider divider-horizontal">OR</div>
      <div className="card bg-base-300 rounded-box grid h-80 flex-grow place-items-center">
        <h1 className="font-bold text-3xl">Gold Membership</h1>
        <ul>
          <li> - Chat with other people</li>
          <li> - Infinite connection Requests per day</li>
          <li> - Blue Tick</li>
          <li> - 6 months</li>
        </ul>
        <button
          onClick={() => handleBuyClick("gold")}
          className="btn btn-primary"
        >
          Buy Gold
        </button>
      </div>
    </div>
  </div>
  ):(
  <div className="">
  <h1>already premium</h1>
  </div>
  )
}
export default Premium