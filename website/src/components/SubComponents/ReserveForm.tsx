import "./css/form.css";

//React
import { useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import InputGroup from "react-bootstrap/InputGroup";

//Date Handling
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { subDays, addDays } from "date-fns";

//Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//API
import axios from "axios";

//Handles the type for the props
type ReserveProps = {
  currentAddress: string;
  setCurrentAddress: (address: string) => void;
};

//Handles the type for the forms
type FormValues = {
  departure: string;
  delivery: string;
  passengers: string;
  name: string;
  email: string;
  phone: string;
};

//Handles the reverse form and its api calls
const ReserveForm: React.FC<ReserveProps> = ({ currentAddress, setCurrentAddress }) => {
  //Will require some conversions, hence it is seperate from the other form values
  const [pickupTime, setPickUpTime] = useState(new Date());

  //All the toast messages
  const server202 = () =>
    toast.success("Your Booking Request Has Been Sent Successfully To your Email!");
  const server500 = () =>
    toast.error(
      "An Error Occurred While Sending Your Booking Request. Please Try Again Later. Contact Us If The Problem Persists."
    );
  const PassengerNumValidationFailed = () =>
    toast.warning("Please Enter A Valid Number Of Passengers between 1 and 8");
  const dateValidationFailed = () =>
    toast.warning("Please Enter A Date after the current date and time");

  const [formValues, setFormValues] = useState<FormValues>({
    departure: currentAddress ? currentAddress : "", //this is being handled by the parent component
    delivery: "",
    passengers: "",
    name: "",
    email: "",
    phone: "",
  });

  //Handles all input changes
  const handleInputChange = (e: any) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const renderTooltip = (text: string) => <Tooltip id="button-tooltip">{text}</Tooltip>;

  //Will be used for form validation
  const handleSubmit = async (e: any) => {
    let validation = true;
    e.preventDefault();

    //Validates the number of passengers
    if (Number(formValues.passengers) < 1 || Number(formValues.passengers) > 8) {
      PassengerNumValidationFailed();
      validation = false;
    }

    //Validates the date
    if (pickupTime < new Date()) {
      dateValidationFailed();
      validation = false;
    }

    //If the validation fails, the form will not be submitted
    if (!validation) {
      return;
    }

    try {
      //Large number to ensure that the id is unique
      const randomNumber = Number(Math.floor(Math.random() * 1000000) + 1000000);

      const response = await axios.post("https://eastmanchesterapi.azurewebsites.net//Customer", {
        id: randomNumber,
        created: new Date(),
        passengerName: formValues.name,
        pickUpLocation: currentAddress,
        dropOffAddress: formValues.delivery,
        pickupTime: pickupTime,
        contactPhoneNumber: "+44" + formValues.phone,
        numberOfPassengers: formValues.passengers,
        email: formValues.email,
        bookingStatus: "",
      });

      if (response.status === 202) {
        //success
        server202();
      } else if (response.status === 500) {
        //server failure
        server500();
      }

      setFormValues({
        departure: "",
        delivery: "",
        passengers: "",
        name: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      server500();
      console.error(error);
    }
  };

  const handleDateChange = (date: Date | null) => {
    // The date parameter will be either a Date object or null
    if (date) {
      setPickUpTime(date);
    }
  };

  return (
    <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins" id="reserve-form">
      <div className="wrapper wrapper--w780" id="form-wrapper">
        <div className="card card-3">
          <div className="card-heading"></div>
          <div className="card-body">
            <h2 className="title">Book Now</h2>
            <form onSubmit={handleSubmit} id="actual-reserve-form">
              <div className="input-group">
                <input
                  type="text"
                  name="departure"
                  className="form-control input--style-3"
                  placeholder="Departure Address"
                  value={currentAddress}
                  onChange={(e) => setCurrentAddress(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="delivery"
                  className="form-control input--style-3"
                  placeholder="Destination Address"
                  value={formValues.delivery}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="passengers"
                  id="passengers"
                  className="form-control input--style-3"
                  placeholder="Number Of Passengers(1-8)"
                  value={formValues.passengers}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-group">
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 100, hide: 400 }}
                  overlay={renderTooltip("Pick Up Date")}
                >
                  <DatePicker
                    selected={pickupTime}
                    onChange={handleDateChange}
                    timeInputLabel="Time:"
                    excludeDateIntervals={[
                      { start: subDays(new Date(), 99999999), end: addDays(new Date(), -1) },
                    ]}
                    dateFormat="dd/MM/yyyy h:mm aa"
                    className="input--style-3"
                    showTimeInput
                  />
                </OverlayTrigger>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  className="form-control input--style-3"
                  placeholder="Name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control input--style-3"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-group">
                <InputGroup.Text id="basic-addon1" className="input-text">
                  +44
                </InputGroup.Text>
                <input
                  type="text"
                  className="form-control input--style-3"
                  name="phone"
                  placeholder="Phone Number"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="p-t-10">
                <button className="btn btn--pill btn--green" type="submit">
                  Submit
                </button>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReserveForm;
