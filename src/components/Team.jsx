import '../styles/Team.scss';
import { useState } from 'react';
import classNames from 'classnames';
import CrystalEaly from '../images/Team/crystal-ealy.png';
import HulonAnish from '../images/Team/hulon-anish.png';
import ZacharyCadiente from '../images/Team/zachary-cadiente.png';
import KelvinPowell from '../images/Team/kelvin-powell.png';

export const Team = () => {
  const [selectedTeamMemberId, setSelectedTeamMemberId] = useState('');

  return (
    <div className='team'>
      <p className='team__label'>Team</p>

      <h2 className='team__title'>Member of our expert team</h2>

      <p className='team__description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum
        aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
      </p>

      <div className='team__container'>
        <article
          className='team__member-card'
          id='Hulon-Anish'
          onClick={() => setSelectedTeamMemberId('Hulon-Anish')}
        >
          {selectedTeamMemberId !== 'Hulon-Anish' && (
            <p className='team__member-name'>Hulon Anish</p>
          )}
          <div className='team__member-image'>
            <img src={HulonAnish} alt='Hulon Anish' />
          </div>

          <div className={classNames('team__member-info', {
            'team__member-info--open': selectedTeamMemberId === 'Hulon-Anish',
          })}>
            <div className='team__member-info-contacts'>
              <div className='team__member-info-social team__member-info-social--fb' />
              <div className='team__member-info-social team__member-info-social--twitter' />
              <div className='team__member-info-social team__member-info-social--instagram' />
              <div className='team__member-info-social team__member-info-social--linkedin' />
            </div>

            <p className='team__member-info-name'>Hulon Anish</p>

            <p className='team__member-info-body'>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              In amet amet integer
            </p>
          </div>
        </article>

        <article
          className='team__member-card'
          id='Crystal-Ealy'
          onClick={() => setSelectedTeamMemberId('Crystal-Ealy')}
        >
          {selectedTeamMemberId !== 'Crystal-Ealy' && (
            <p className='team__member-name'>Crystal Ealy</p>
          )}
          <div className='team__member-image'>
            <img src={CrystalEaly} alt='Crystal Ealy' />
          </div>

          <div className={classNames('team__member-info', {
            'team__member-info--open': selectedTeamMemberId === 'Crystal-Ealy',
          })}>
            <div className='team__member-info-contacts'>
              <div className='team__member-info-social team__member-info-social--fb' />
              <div className='team__member-info-social team__member-info-social--twitter' />
              <div className='team__member-info-social team__member-info-social--instagram' />
              <div className='team__member-info-social team__member-info-social--linkedin' />
            </div>

            <p className='team__member-info-name'>Crystal Ealy</p>

            <p className='team__member-info-body'>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              In amet amet integer
            </p>
          </div>
        </article>

        <article
          className='team__member-card'
          id='Zachary-Cadiente'
          onClick={() => setSelectedTeamMemberId('Zachary-Cadiente')}
        >
          {selectedTeamMemberId !== 'Zachary-Cadiente' && (
            <p className='team__member-name'>Zachary Cadiente</p>
          )}
          <div className='team__member-image'>
            <img src={ZacharyCadiente} alt='Crystal Ealy' />
          </div>

          <div className={classNames('team__member-info', {
            'team__member-info--open': selectedTeamMemberId === 'Zachary-Cadiente',
          })}>
            <div className='team__member-info-contacts'>
              <div className='team__member-info-social team__member-info-social--fb' />
              <div className='team__member-info-social team__member-info-social--twitter' />
              <div className='team__member-info-social team__member-info-social--instagram' />
              <div className='team__member-info-social team__member-info-social--linkedin' />
            </div>

            <p className='team__member-info-name'>Zachary Cadiente</p>

            <p className='team__member-info-body'>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              In amet amet integer
            </p>
          </div>
        </article>

        <article
          className='team__member-card'
          id='Kelvin-Powell'
          onClick={() => setSelectedTeamMemberId('Kelvin-Powell')}
        >
          {selectedTeamMemberId !== 'Kelvin-Powell' && (
            <p className='team__member-name'>Kelvin Powell</p>
          )}
          <div className='team__member-image'>
            <img src={KelvinPowell} alt='Kelvin Powell' />
          </div>

          <div className={classNames('team__member-info', {
            'team__member-info--open': selectedTeamMemberId === 'Kelvin-Powell',
          })}>
            <div className='team__member-info-contacts'>
              <div className='team__member-info-social team__member-info-social--fb' />
              <div className='team__member-info-social team__member-info-social--twitter' />
              <div className='team__member-info-social team__member-info-social--instagram' />
              <div className='team__member-info-social team__member-info-social--linkedin' />
            </div>

            <p className='team__member-info-name'>Kelvin Powell</p>

            <p className='team__member-info-body'>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              In amet amet integer
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};
