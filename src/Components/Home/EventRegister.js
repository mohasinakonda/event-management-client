import React from "react";

const EventRegister = () => {
  return (
    <div>
      <h2 className="text-3xl">Register events</h2>
      <form>
        <label className="block " htmlFor="fname">
          First Name
        </label>
        <input className="input" type="text" name="fname" id="fname" />
        <label className="block" htmlFor="lname">
          Last Name
        </label>
        <input className="input " type="lname" name="lname" id="lname" />
        <label className="block" htmlFor="email">
          Email
        </label>
        <input className="input " type="email" name="email" id="email" />
        <label className="block" htmlFor="phone">
          Phone
        </label>
        <input className="input " type="text" name="phone" id="phone" />

        <label className="block" htmlFor="guardian-name">
          Guardian Name
        </label>
        <input
          className="input "
          type="text"
          name="guardian-name"
          id="guardian-name"
        />
        <label className="block" htmlFor="guardian-phone">
          guardian Phone Number
        </label>
        <input
          className="input "
          type="text"
          name="guardian-phone"
          id="guardian-phone"
        />
        <label className="block" htmlFor="guardian-email">
          guardian Email address
        </label>
        <input
          className="input "
          type="email"
          name="guardian-email"
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
        <input type="date" name="birth-date" id="birth-date" />
        <label className="block" htmlFor="male">
          male
        </label>
        <input type="radio" name="male" id="male" />

        <label htmlFor="female">Female</label>
        <input type="radio" name="female" id="female" />
        <label htmlFor="other">other</label>
        <input type="radio" name="other" id="other" />
      </form>
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
