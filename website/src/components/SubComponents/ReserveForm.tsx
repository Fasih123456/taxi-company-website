import "./css/form.css";
import formImage from "../../assets/img/reserve-img.jpg";

import { SetStateAction, useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { subDays, addDays } from "date-fns";

import api from "../../API/api";

type ReserveProps = {
  currentAddress: string;
  setCurrentAddress: (address: string) => void;
};

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
  const [pickupTime, setPickupTime] = useState("");
  const [formpickuptime, setFormPickUptime] = useState("");
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
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e: any) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const renderTooltip = (text: string) => <Tooltip id="button-tooltip">{text}</Tooltip>;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

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
        passengers: 1,
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
    <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
      <div className="wrapper wrapper--w780">
        <div className="card card-3">
          <div className="card-heading"></div>
          <div className="card-body">
            <h2 className="title">Registration Info</h2>
            <form method="POST">
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
                {" "}
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
                  delay={{ show: 100, hide: 400 }}
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
                    value={formValues.passengers}
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
                    dateFormat="MM/dd/yyyy h:mm aa"
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReserveForm;
