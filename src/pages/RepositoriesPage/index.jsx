/* eslint-disable no-unused-vars */
/* eslint-disable import/no-duplicates */
import React, { useEffect } from 'react';

import { useState } from 'react';

import { IoMdPeople } from 'react-icons/io';
import './Style.css';

import { ProfilePhoto } from './ProfilePhoto';
import { UserData } from './UserData';
import { PersonalInfo } from './PersonalInfo';
import { Technologies } from './Technologies';
import { Repositories } from './Repositories';
import { getLanguagesFrom } from '../../services/api';

import { getUser } from '../../services/api';
import { getRepos } from '../../services/api';
import { Loading } from '../../components/Loading';
// eslint-disable-next-line import/order
import { useParams } from 'react-router-dom';

// eslint-disable-next-line react/function-component-definition
const RepositoriesPage = () => {

  const {login} = useParams();


  const [user, setUser] = useState();
  const [currentLanguage, setCurrentLanguage] = useState('');
  const [languages, setLanguages] = useState();
  const [loading, setLoading] = useState(true);
  const [repositories, setRepositories] = useState();


  useEffect(() => {
    const loadData = async () => {
      const [userResponse, repositoryResponse] =  await Promise.all([
        getUser(login),
        getRepos(login)
      ]);
      setUser(userResponse.data);
      setRepositories(repositoryResponse.data);

      setLanguages(getLanguagesFrom(repositoryResponse.data));

      setLoading(false);
    };

    loadData();
  }, []);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  }

  if(loading){
    return <Loading/>
  }

  return (
    <section className='main-container' >
      <aside className="side-menu position-fixed">
        <ProfilePhoto user={user} />
        <div className='d-flex'>
          <div className=' mx-auto'>
            <h2 className='mx-auto mt-3'>{user.name}</h2>
            <div className='d-flex '>
              <IoMdPeople className='mr-1' fontSize={25} />
              <UserData user={user} />
            </div>
            <PersonalInfo user={user} />
            <Technologies currentLanguage={currentLanguage}
              onClicktech={onFilterClick} languages={languages} />
          </div>
        </div>
      </aside>
      <main className='main  '>
        <div className="main-content">
          <h4 className='p-4'>Repositories</h4>
          <div className="row justify-content-center">
            <Repositories currentLanguage={currentLanguage} repositories={repositories} />
          </div>
        </div>
      </main>
    </section>
  );
}

export default RepositoriesPage;


