import React from "react";
import axios from "axios";
import TshirtModal from "./TshirtModel";

function Tshirt() {
  const [modalShow, setModalShow] = React.useState(false);
  const [user, setUser] = React.useState({});

  async function details() {
    const data = await axios
      .post("http://localhost:5000/razorpay/tshirt", {
        token: localStorage.getItem("token"),
      })
      .then((t) => t.data);

    //set user and add link to data
    setUser({
      name: data.name,
      email: data.email,
      contact: data.contact,
      id: data.id,
      sm_id: data.sm_id,
      amount: data.amount,
      currency: data.currency,
    });
    setModalShow(true);
  }
  return (
    <div class="container-xxl py-5">
      <div class="container py-5 px-lg-5">
        <div class  ="row g-5 align-items-center">
          <div class="col-lg-6">
            <img
              class="img-fluid wow fadeInUp merch"
              data-wow-delay="0.1s"
              src="img/merch.png"  
            />
          </div>
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h5 class="text-primary-gradient fw-medium">Buy now</h5>
            <h1 class="mb-4">Gear up for Samudramanthan</h1>
            <p class="mb-4">
           Show your spirit with exclusive Samudramanthan T-shirts and more!  Don’t miss out—register now and grab your merch today!
 </p>
<b>Please note: To purchase a T-shirt, you must register and have a valid SM ID.</b>     



            <div class="row g-4">
              <div class="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                {localStorage.getItem("token") ? (
                  <>
                    <a
                      onClick={details}
                      class="d-flex btn bg-primary-gradient rounded py-3 px-4"
                    >
                      <i class="fab bi bi-cart-fill fa-3x text-white flex-shrink-0"></i>
                      <div class="ms-3">
                        <p class="text-white mb-0">Available</p>
                        <h5 class="text-white mb-0">Buy Now</h5>


                      </div>
                    </a>
                  </>
                ) : (
                  <>
                    <a
                      href="/register"
                      class="d-flex bg-primary-gradient rounded py-3 px-4"
                    >
                      <i class="fab bi bi-cart-fill fa-3x text-white flex-shrink-0"></i>
                      <div class="ms-3">
                        <p class="text-white mb-0">Available</p>
                        <h5 class="text-white mb-0">Buy Now</h5>
                      </div>
                    </a>
                  </>
                )}
              </div>
            </div>
            < TshirtModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                user={user}
                setUser={setUser}
                />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tshirt;
