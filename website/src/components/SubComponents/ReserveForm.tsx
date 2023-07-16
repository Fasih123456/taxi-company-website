import "./css/form.css";

//React
import { SetStateAction, useState } from "react";
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
import api from "../../API/api";

//Handles the type for the props
type ReserveProps = {
  currentAddress: string;
  setCurrentAddress: (address: string) => void;
};

//Handles the type for the forms
type FormValues = {
  departure: string;
  delivery: string;
  passengers: number;
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ReserveForm: React.FC<ReserveProps> = ({ currentAddress, setCurrentAddress }) => {
  //Will require some conversions, hence it is seperate from the other form values
  const [pickupTime] = useState("");
  const server400 = () =>
    toast.success("Your Booking Request Has Been Sent Successfully To your Email!");
  const server500 = () =>
    toast.error(
      "An Error Occured While Sending Your Booking Request. Please Try Again Later. Contact Us If The Problem Persists."
    );
  const PassengerNumValidationFailed = () =>
    toast.warning("Please Enter A Valid Number Of Passengers between 1 and 8");
  const dateValidationFailed = () =>
    toast.warning("Please Enter A Date after the current date and time");

  const [formValues, setFormValues] = useState<FormValues>({
    departure: currentAddress ? currentAddress : "", //this is being handled by the parent component
    delivery: "",
    passengers: 1,
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [startDate, setStartDate] = useState(new Date());

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
    if (formValues.passengers < 1 || formValues.passengers > 8) {
      PassengerNumValidationFailed();
      validation = false;
    }

    //Validates the date
    if (startDate < new Date()) {
      dateValidationFailed();
      validation = false;
    }

    //If the validation fails, the form will not be submitted
    if (!validation) {
      return;
    }

    try {
      //Large number to ensure that the id is unique
      const randomNumber = Math.floor(Math.random() * 1000000) + 1000000;
      const response = await api.post("/submit", {
        id: randomNumber,
        created: new Date().toISOString(),
        passengerName: formValues.name,
        pickUpLocation: currentAddress,
        dropOffAddress: formValues.delivery,
        pickupTime: pickupTime,
        contactPhoneNumber: "+44" + formValues.phone,
        numberOfPassengers: formValues.passengers,
        email: formValues.email,
        bookingStatus: "",
      });

      if (response.status === 400) {
        server400();
      } else if (response.status === 500) {
        server500();
      }

      setFormValues({
        departure: "",
        delivery: "",
        passengers: 1,
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      server500();
      console.error(error);
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
                  placeholder="Address of Departure"
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
                  placeholder="Address of Arrival"
                  value={formValues.delivery}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-group">
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 50, hide: 600 }}
                  overlay={renderTooltip("Number Of Passengers(1-8)")}
                >
                  <input
                    type="number"
                    name="passengers"
                    id="passengers"
                    className="form-control input--style-3"
                    placeholder="Number Of Passengers"
                    min={1}
                    max={8}
                    value={
                      formValues.passengers == 0 ? formValues.passengers : "Number Of Passengers"
                    }
                    onChange={handleInputChange}
                    required
                  />
                </OverlayTrigger>
              </div>
              <div className="input-group">
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 100, hide: 400 }}
                  overlay={renderTooltip("Pick Up Date")}
                >
                  <DatePicker
                    selected={startDate}
                    onChange={(date: SetStateAction<Date>) => setStartDate(date)}
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
