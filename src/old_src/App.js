import React, { useEffect, useState } from 'react'
import { 
  EmailIcon,
  Provider,
  Header,
  Divider,
  Flex,
  teamsV2Theme,
  LinkedInIcon,
  CallIcon,
  Text,
} from '@fluentui/react-northstar';

import './App.css';

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    let myData = require("./data/data.json")
    console.log(myData)
    setData(myData)
  }, []);
  let socialLinks = <>
  <h1>H1</h1>
  <h2>H2</h2>
  </>
  return (
    <Provider className="App-provider" theme={teamsV2Theme}>
      <Flex className="App-flex" column>
        <Header as="h1" content={data.firstname + " " + data.lastname} />
        <Divider />
        <Flex gap="gap.small">
          <EmailIcon /><Text weight="light" content={data.email} />
          <LinkedInIcon /><Text weight="light" content={data.linkedin} />
          <CallIcon/><Text weight="light" content={data.contact} />
        </Flex>
        <Header as="h2" content="About me" />
        <h1>{data.firstname}</h1>
        <Text content="fda" />
        <Header as="h2" content="Skills and Abilities" />
        <Header as="h2" content="Experience" />
        <Header as="h3" content="SDE 2 | Microsoft" />
        <Header as="h3" content="SDE | Microsoft" />
        <Header as="h3" content="SDE Intern | Microsoft" />
        {socialLinks}
        <Header as="h2" content="Education" />
        <Header as="h3" content="B. Tech | College of Engineering, Pune" />
        <ul>
          <li><Text content="Major: Computer Engineering"></Text></li>
          <li><Text content="Publication: Springer Link"></Text></li>
        </ul>
      </Flex>
    </Provider>
  );
}

export default App;
