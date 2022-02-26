import React, { useState, useMemo, useEffect} from 'react';
import '../scss/global.scss'
import StudentContext from '../context/StudentContext'
import useStudent from '../hooks/useStudent'

function MyApp({ Component, pageProps }) {
  const { student, isError, isLoading } = useStudent('3b35fb50-3d5e-41b3-96d6-c5566141fab0')

  const studentData = useMemo(() =>({
    student,
    isLoading,
    isError
  }), [student])

  return (
    <StudentContext.Provider value={studentData}>
      <Component {...pageProps} />
    </StudentContext.Provider>
  ) 
}

export default MyApp
