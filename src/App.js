import React,{useState} from 'react';
import './App.css';
import useFetchJobs from './useFetchJobs';
import {Container} from 'react-bootstrap'

import Job from "./Job";

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const {jobs,loading,error} = useFetchJobs(params,page)
  return (
    <Container>
        {loading && <h1>loading...</h1>}
        {error && <h1>error.Refresh.</h1>}
        <h1>{jobs.map(job=>(
          <Job key={job.id} job={job} />
        ))}</h1>
    </Container>
  );
}

export default App;
