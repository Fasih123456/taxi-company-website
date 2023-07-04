//Component imports
import backgroundImage from "../assets/img/quote-bg.jpg";
import api from "./../API/api";

//Package imports
import { useState } from "react";

//TODO: pickup time is missing

function Reserve() {
  //Will require some conversions, hence it is seperate from the other form values
  const [pickupTime, setPickupTime] = useState("");
  const [formpickuptime, setFormPickUptime] = useState("");
  const [formValues, setFormValues] = useState({
    departure: "",
    delivery: "",
    passengers: 0,
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e: any) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleTimeChange = (e: any) => {
    const selectedTime = e.target.value;
    setFormPickUptime(selectedTime);
    // Extract the hours from the selected time in the format HH:MM
    const hours = selectedTime.split(":")[0];
    // Create a new date object with the current date
    const currentDate = new Date();
    // Set the hours from the selected time to the new date object
    currentDate.setHours(hours);
    // Convert the date object to the required format "2023-07-01T21:01:28.615Z"
    const formattedTime = currentDate.toISOString();
    console.log(formattedTime);

    // Update the state with the formatted time
    setPickupTime(formattedTime);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      //Large number to ensure that the id is unique
      const randomNumber = Math.floor(Math.random() * 1000000) + 1000000;
      const response = await api.post("", {
        id: randomNumber,
        created: new Date().toISOString(),
        passengerName: formValues.name,
        pickUpLocation: formValues.departure,
        dropOffAddress: formValues.delivery,
        pickupTime: pickupTime,
        contactPhoneNumber: formValues.phone,
        numberOfPassengers: formValues.passengers,
        email: formValues.email,
        bookingStatus: "",
      });

      // Handle the response data here if needed
      console.log(response.data);

      setSuccessMessage("Your quote request has been sent successfully. Thank you!");
      setFormValues({
        departure: "",
        delivery: "",
        passengers: 0,
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setErrorMessage("An error occurred while submitting the form. Please try again later.");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <>
      <section id="reserve" className="get-a-quote">
        <div className="container">
          <div className="row g-0">
            <div
              className="col-lg-5 quote-bg"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

            <div className="col-lg-7">
              <form className="php-email-form" onSubmit={handleSubmit}>
                <h3>Reserve Trip</h3>
                <p>
                  After you have filled out this form a taxi will be dispatched to your location.
                </p>
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="departure"
                      className="form-control"
                      placeholder="Address of Departure"
                      value={formValues.departure}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="text"
                      name="delivery"
                      className="form-control"
                      placeholder="Address of Arrival"
                      value={formValues.delivery}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="time"
                      name="pickupTime"
                      id="pickupTime"
                      className="form-control"
                      value={formpickuptime}
                      onChange={handleTimeChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="number"
                      name="passengers"
                      className="form-control"
                      placeholder="Number Of Passengers"
                      value={formValues.passengers}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-lg-12">
                    <h4>Your Personal Details</h4>
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      value={formValues.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-12 ">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      value={formValues.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="Phone"
                      value={formValues.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={6}
                      placeholder="Message"
                      value={formValues.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    {loading ? (
                      <div className="loading">Loading</div>
                    ) : (
                      <>
                        <div className="error-message">{errorMessage}</div>
                        <div className="sent-message">{successMessage}</div>
                        <button type="submit">Reserve Trip</button>
                      </>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reserve;
