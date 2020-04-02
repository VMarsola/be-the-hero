import React from 'react'
import FormIncident from '../components/FormIncident'
import IncidentTxt from '../components/IncidentTxt'

export default function NewIncident() {
    return(
        <div className="container-register">
            <div className="content">
                <IncidentTxt/>
                <FormIncident/>
            </div>
        </div>
    )
}
