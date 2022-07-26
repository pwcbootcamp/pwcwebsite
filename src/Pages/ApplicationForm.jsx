import React from "react";

const ApplicationForm = () => {
  return (
    <div>
      <section className="container">
        <h2>Application Form</h2>
        <form id="my-form">
          <div className="msg"></div>
          <label htmlFor="firstname">First Name:</label>
          <input
            name="firstname"
            id="firstname"
            type="text"
            placeholder="Input your First Name"
          />
          <label htmlFor="lastname">Last Name:</label>
          <input
            name="lastname"
            id="lastname"
            type="text"
            placeholder="Input your Last Name"
          ></input>
          <label htmlFor="age">Age:</label>
          <input
            for="age"
            name="age"
            id="age"
            type="number"
            placeholder="Input your Age"
          />
          <label htmlFor="state">State:</label>
          <select id="state">
            <option value="Abia">Abia</option>
            <option value="Adamawa">Adamawa</option>
            <option value="Akwa Ibom">Akwa Ibom</option>
            <option value="Anambra">Anambra</option>
            <option value="Bauchi">Bauchi</option>
            <option value="Bayelsa">Bayelsa</option>
            <option value="Benue">Benue</option>
            <option value="Borno">Borno</option>
            <option value="Cross River">Cross River</option>
            <option value="Delta">Delta</option>
            <option value="Ebonyi">Ebonyi</option>
            <option value="Edo">Edo</option>
            <option value="Ekiti">Ekiti</option>
            <option value="Enugu">Enugu</option>
            <option value="Gombe">Gombe</option>
            <option value="Imo">Imo</option>
            <option value="Jigawa">Jigawa</option>
            <option value="Kaduna">Kaduna</option>
            <option value="Kano">Kano</option>
            <option value="Katsina">Katsina</option>
            <option value="Kebbi">Kebbi</option>
            <option value="Kogi">Kogi</option>
            <option value="Kwara">Kwara</option>
            <option value="Lagos">Lagos</option>
            <option value="Nassarawa">Nassarawa</option>
            <option value="Niger">Niger</option>
            <option value="Ogun">Ogun</option>
            <option value="Ondo">Ondo</option>
            <option value="Osun">Osun</option>
            <option value="Oyo">Oyo</option>
            <option value="Plateau">Plateau</option>
            <option value="Rivers">Rivers</option>
            <option value="Sokoto">Sokoto</option>
            <option value="Taraba">Taraba</option>
            <option value="Yobe">Yobe</option>
            <option value="Zamfara">Zamfara</option>
          </select>
          <label htmlFor="gender">Pick your gender: </label>
          <input
            type="radio"
            name="gender"
            value="Male"
            id="male"
            className="gender"
          ></input>
          <label htmlFor="male" id="inline">
            Male
          </label>
          <input
            type="radio"
            name="gender"
            value="Female"
            id="female"
            className="gender"
          ></input>
          <label htmlFor="female" id="inline">
            Female
          </label>
          <label htmlFor="courses">Selected Courses: </label>
          <input
            type="checkbox"
            id="javascript"
            name="javascript"
            className="courses"
          ></input>
          <label htmlFor="javascript" id="inline">
            JavaScript
          </label>
          <input type="checkbox" id="c#" name="c#" className="courses"></input>
          <label htmlFor="c#" id="inline">
            c#
          </label>
          <input
            type="checkbox"
            id="Agile"
            name="Agile"
            className="courses"
          ></input>
          <label htmlFor="Agile" id="inline">
            Agile
          </label>
          <input
            type="checkbox"
            id="dataScience"
            name="dataScience"
            className="courses"
          ></input>
          <label htmlFor="dataScience" id="inline">
            Data Science
          </label>
          <input className="btn" type="submit" value="Submit" />
        </form>
      </section>
    </div>
  );
};

export default ApplicationForm;
