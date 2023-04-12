import React from "react";

const App = () => {
  return (
    <div id="root">
      <Header />
      <AddNewInfo />
      <Table />
    </div>
  );
};
const Header = () => {
  return (
    <div>
      <h1>Table Example</h1>
    </div>
  );
};

const AddNewInfo = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Type new name here" />
        &nbsp;
        <input type="text" placeholder="Type new organization here" />
        &nbsp;
        <input type="text" placeholder="Type new position here" />
        &nbsp;
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <td>
            <b>Name</b>
          </td>
          <td>
            <b>Organization</b>
          </td>
          <td>
            <b>Position</b>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>ABC Inc.</td>
          <td>Developer</td>
        </tr>
        <tr>
          <td>Jane</td>
          <td>XYZ Corp.</td>
          <td>Designer</td>
        </tr>
        <tr>
          <td>Bob</td>
          <td>123 LLC</td>
          <td>Manager</td>
        </tr>
      </tbody>
    </table>
  );
};

export default App;
