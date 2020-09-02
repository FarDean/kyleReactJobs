import React,{useState} from 'react';
import './App.css';
import useFetchJobs from './useFetchJobs';
import {Container} from 'react-bootstrap'

import Job from "./Job";
import JobsPagination from './JobsPagination';

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const {jobs,loading,error,hasNextPage} = useFetchJobs(params,page)
  return (
    <Container className="my-4">
        <h1 className="mb-4">Github Jobs</h1>
        <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
        {loading && <h1>loading...</h1>}
        {error && <h1>error.Refresh.</h1>}
        <h1>{jobs.map(job=>(
          <Job key={job.id} job={job} />
        ))}</h1>
    </Container>
  );
}

export default App;
