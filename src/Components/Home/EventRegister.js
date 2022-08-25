import React from "react";

const EventRegister = ({ eventId }) => {
  const registerHandler = (event) => {
    event.preventDefault();
    console.log(eventId);
    const firstName = event.target.fname.value;
    const lastName = event.target.lname.value;
    const email = event.target.email.value;
    const userPhone = event.target.phone.value;
    const guardianName = event.target.guardianName.value;
    const guardianPhone = event.target.guardianPhone.value;
    const guardianEmail = event.target.guardianEmail.value;
    const relation = event.target.relationship.value;
    const birthDate = event.target.birthDate.value;
    const gender = event.target.gender.value;
    const institution = event.target.institution.value;
    const grade = event.target.grade.value;
    const username = `${firstName} ${lastName}`;
    const userInfo = {
      username,
      email,
      userPhone,
      eventId,
      guardianName,
      guardianEmail,
      guardianPhone,
      relation,
      birthDate,
      gender,
      institution,
      grade,
      isRegister: true,
    };
    fetch("https://limitless-hollows-72000.herokuapp.com/event-register", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log("register successful", data));
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <div className="card-body">
        <h2 className="text-3xl">Register events</h2>
        <form onSubmit={registerHandler}>
          <label className="block " htmlFor="fname">
            First Name
          </label>
          <input
            className="input"
            placeholder=" first name"
            type="text"
            name="fname"
            id="fname"
          />

          <label className="block" htmlFor="lname">
            Last Name
          </label>
          <input
            className="input "
            placeholder=" last name"
            type="lname"
            name="lname"
            id="lname"
          />
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            className="input "
            placeholder=" Email address"
            type="email"
            name="email"
            id="email"
          />
          <label className="block" htmlFor="phone">
            Phone
          </label>
          <input
            className="input "
            type="text"
            placeholder=" phone number"
            name="phone"
            id="phone"
          />

          <label className="block" htmlFor="guardian-name">
            Guardian Name
          </label>
          <input
            className="input "
            type="text"
            placeholder=" guardian name"
            name="guardianName"
            id="guardian-name"
          />
          <label className="block" htmlFor="guardian-phone">
            guardian Phone Number
          </label>
          <input
            className="input "
            placeholder=" guardian phone"
            type="text"
            name="guardianPhone"
            id="guardian-phone"
          />
          <label className="block" htmlFor="guardian-email">
            guardian Email address
          </label>
          <input
            className="input "
            placeholder=" guardian email"
            type="email"
            name="guardianEmail"
            id="guardian-email"
          />
          <label className="block" htmlFor="relationship">
            Relations
          </label>
          <select name="relationship" id="relationship">
            <option> select one</option>
            <option value="mother">Mother</option>
            <option value="father">Father</option>
            <option value="guardian">Guardian</option>
          </select>
          <label className="block" htmlFor="birth-date">
            Birth Date
          </label>
          <input type="date" name="birthDate" id="birth-date" />
          <br />
          <input type="radio" name="gender" id="male" value="male" />
          <label htmlFor="male">male</label>

          <input type="radio" name="gender" id="female" value="female" />
          <label htmlFor="female">Female</label>

          <input type="radio" name="gender" id="other" value="other" />
          <label htmlFor="other">other</label>
          <h3 className="text-xl">Institutions</h3>
          <select name="institution" id="">
            <option>Select institution</option>
            <option value="school">School</option>
            <option value="collage">Collage</option>
          </select>
          <label htmlFor="grade"> Grade</label>
          <input type="number" name="grade" placeholder="Grade" id="grade" />
          <input
            type="submit"
            value="submit"
            className="btn btn-success block"
          />
        </form>
      </div>
    </div>
  );
};

export default EventRegister;
/* First Name, Last Name: Text
Email Address: email
Mobile Number: phone
Guardian/Parent Name: Text
Guardian/Parent Email Address: email
Guardian/Parent Mobile Number: phone
Guardian/Parent Relationship: Dropdown (guardian, mother, father)
Birthaday: Date
Gender: Radio Buttons (Female, Male, Prefer Not to Say)
Institution Type: Dropdown (School, College)
Name of Institution: Text
Grade/Standard/Year of Study: Numeric */
