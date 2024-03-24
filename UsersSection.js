import React from 'react';
import user from '../assests/user.svg';
import location from '../assests/location.svg';
import server from '../assests/server.svg';
import "./UserSection.css";
function UsersSection() {
  return (
    <div className="container mx-auto py-20">
      <div className="grid gap-16 px-10 py-10 rounded-2xl grid-cols-3 divide-x items-center shadow-xl shadow-gray-500 justify-center divide-gray-300">
        <div className="flex items-center gap-5 justify-center">
          <img src={user} alt="user" />
          <div>
            <p className="text-xl font-bold ">90+</p>
            <p>Users</p>
          </div>
        </div>
        <div className="flex items-center gap-5 justify-center">
          <img src= {location} alt="user" />
          <div>
            <p className="text-xl font-bold">30+</p>
            <p>Locations</p>
          </div>
        </div>
        <div className="flex items-center gap-5 justify-center">
          <img src= {server} alt="user" />
          <div>
            <p className="text-xl font-bold">50+</p>
            <p>Servers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersSection;
