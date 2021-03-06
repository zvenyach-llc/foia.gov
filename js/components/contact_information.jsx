import React from 'react';
import PropTypes from 'prop-types';

import FoiaPersonnel from './foia_personnel';
import FoiaSubmissionAddress from './foia_submission_address';
import foiaPersonnel from '../util/foia_personnel';

function ContactInformation({ agencyComponent }) {
  // Grab contacts
  const foiaOfficerFoiaPersonnel = foiaPersonnel.personnel(agencyComponent, 'foia_officers')[0];
  const serviceCenterFoiaPersonnel = foiaPersonnel.personnel(agencyComponent, 'service_centers')[0];
  const publicLiaisonFoiaPersonnel = foiaPersonnel.personnel(agencyComponent, 'public_liaisons')[0];

  return (
    <div className="contact-information">
      <div className="contact-information_section">
        <FoiaPersonnel foiaPersonnel={foiaOfficerFoiaPersonnel} />
      </div>
      <div className="contact-information_section">
        <FoiaPersonnel foiaPersonnel={serviceCenterFoiaPersonnel} />
      </div>
      <div className="contact-information_section">
        <FoiaPersonnel foiaPersonnel={publicLiaisonFoiaPersonnel} />
      </div>
      <div className="contact-information_section">
        <FoiaSubmissionAddress
          submissionAddress={agencyComponent.submission_address}
          paperReceiver={agencyComponent.paper_receiver}
        />
        { agencyComponent.email &&
          <p className="agency-info_email">
            <a href={`mailto:${agencyComponent.email}`}>{ agencyComponent.email }</a>
          </p>
        }
      </div>
    </div>
  );
}

ContactInformation.propTypes = {
  agencyComponent: PropTypes.object.isRequired,
};


export default ContactInformation;
