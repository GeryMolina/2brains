import React from 'react';
import Header from '../components/dashboard/Header';
import Collabs from '../components/dashboard/Collaborator';


const Dashboard = props =>{
    return(
        <div>
            <Header/>
            <Collabs />
        </div>
        
    )
}
export default Dashboard;