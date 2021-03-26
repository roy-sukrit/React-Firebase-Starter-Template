import React from 'react'
import { Steps,Divider } from 'antd';

const { Step } = Steps;

const Home = () => {

    return (
        <div className="container ">
        <div className="row  ">
        <div className="col md-2 offset-2 ">
        <h2>Welcome to React-Firebase Starter Template!</h2>
        <Divider/>
        <h3>Code Setup</h3>
        <Steps className="pt-4" responsive direction="vertical">
        <Step status="process" title="Step 1" description=" Login firebase ---> Console --> Create new Firebase Project -->New App" />
        <Step status="process" title="Step 2" description="Paste your firebase config in firebase.js" />
        <Step status="process" title="Step 3" description="Enable Google and email in Authentication tab " />
        <Step status="process" title="Step 4" description="npm i && npm start" />
        <Step status="process" title="Step 5" description="Register with mail or Login with Google" />
        <Step status="finish" title="Step 6" description="You are logged in!." />
      </Steps>
        </div>
        
        </div>
        
            
        </div>
    )
}

export default Home
