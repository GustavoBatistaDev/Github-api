/* eslint-disable import/no-unresolved */

/* eslint-disable react/function-component-definition */
import React from 'react';
import './Style.css';
import { FaArrowLeft } from 'react-icons/fa';
import { IoMdPeople } from 'react-icons/io';
import user from '../../assets/img/user.jpg';


const RepositoriesPage = () => {
  const a = '';
  return (
    <section className='main-container'>
      <aside className='side-menu'>
        <div className='d-flex justify-content-center'>
          <FaArrowLeft fontSize={20} />
          <div className='container-data-user mx-auto'>
            <img className='user-photo mx-auto' src={user} alt="" />
            <div className='d-flex'>
              <div>
                <h2 className='mx-auto mt-3'>Gabriel Santos</h2>
                <div className='d-flex '>
                  <div id="cursor-pointer">
                    <IoMdPeople className='mr-1' fontSize={25} />
                  </div>
                  <span className='followers' style={{ fontSize: '15px', color: 'darkgray' }}>209</span>
                  <h6 style={{ fontSize: '14px' }} className='ml-1 follower font-italic'>Followers</h6>
                  <h6 style={{ fontSize: '15px' }} className='ml-1 follower font-italic followers'>
                    <span className='followers mr-1' style={{ fontSize: '15px', color: 'darkgray' }}>209</span>seguindo.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <main className='main p-2'>
       <div className="main-content">
        algo {a}
       </div>
      </main>

    </section>
  );
};

export default RepositoriesPage;


