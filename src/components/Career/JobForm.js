import React, { useState, useEffect, useCallback } from 'react'
import { toast } from 'react-toastify'
import { useDropzone } from 'react-dropzone'
import { ColorRing } from 'react-loader-spinner'

import API from '../../api'

import '../../styles/Career/JobForm.scss'

// import ManFindingJob from '../../assets/images/man-finding-job-online.png'
import UploadFile from '../../assets/icons/upload-file.svg'

const JobForm = () => {
  const [resumeUploadStatus, seResumeUploadStatus] = useState({
    isResumeUploaded: false,
    resumeURL: ''
  })

  const [resumeFile, setResumeFile] = useState('')

  const [jobRequestDetails, setJobRequestDetails] = useState({
    name: '',
    email: '',
    experience: '',
    currentOrganisation: '',
    currentDesignation: '',
    address: '',
    resume: ''
  })

  const [displayResumeUploadLoader, setDisplayResumeUploadLoader] =
    useState(false)

  const notifyFormSubmited = () =>
    toast('☎️ We will contact you soon. Thanks!', { draggable: true })
  const notifyErrorFormSubmission = () =>
    toast('❗ Try Again, Form Submission Failed', { draggable: true })
  const notifyErrorResumeSubmission = () =>
    toast('❗ Try Again, Upload Resume', { draggable: true })

  const onDrop = useCallback(
    acceptedFiles => {
      // Setting resume file
      setResumeFile(acceptedFiles)
    },
    [resumeFile]
  )

  // useDropone Hook from react-dropzone library
  let { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop
  })

  const handleJobApplication = async e => {
    e.preventDefault()
    if (resumeFile === '') {
      notifyErrorResumeSubmission()
    } else {
      const jobApplicationData = {
        name: jobRequestDetails.name,
        email: jobRequestDetails.email,
        experience: jobRequestDetails.experience,
        currentOrganisation: jobRequestDetails.currentOrganisation,
        currentDesignation: jobRequestDetails.currentDesignation,
        address: jobRequestDetails.address,
        resume: jobRequestDetails.resume
      }
      // resume: jobRequestDetails.resume,
      // address: jobRequestDetails.address

      await API.post('/api/job-applications/', jobApplicationData)
        .then(res => {
          notifyFormSubmited()
          setJobRequestDetails({
            name: '',
            email: '',
            experience: '',
            currentOrganisation: '',
            currentDesignation: '',
            address: '',
            resume: ''
          })
          console.log(res, 'Job Application submitted successfully.')
        })
        .catch(err => {
          notifyErrorFormSubmission()
          console.log(err, 'Error submmitting job appication form')
        })
    }
  }

  console.log(jobRequestDetails, 'jobRequestDetails')
  console.log(resumeFile)

  useEffect(() => {
    if (resumeFile !== '') {
      setDisplayResumeUploadLoader(true)
      const uploadFile = async () => {
        await API.post(
          '/api/file-upload/upload-single-file',
          { files: resumeFile },
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        )
          .then(res => {
            seResumeUploadStatus({
              ...resumeUploadStatus,
              isResumeUploaded: true,
              resumeURL: res.data.url
            })
            setJobRequestDetails({ ...jobRequestDetails, resume: res.data.url })
            console.log(res, 'Uploaded resume suuccessfully')
            setDisplayResumeUploadLoader(false)
          })
          .catch(err => console.log(err, 'Error uploading resume file'))
      }
      uploadFile()
    }
  }, [resumeFile])

  const handleInputChange = (event, setState, state, type) => {
    const newValue = event.target.value.trimStart()
    setState({
      ...state,
      [type]: newValue
    })
  }

  const handlePaste = (event, setState, state, type) => {
    event.preventDefault()
    const pastedText = event.clipboardData.getData('text/plain')
    const cleanedText = pastedText.replace(/[^a-zA-Z]+/g, '')
    setState({
      ...state,
      [type]: cleanedText
    })
  }

  return (
    <div className='job-form' id='form_redirectjobcareer'>
      <div className='job-form__header'>
        <h1>
          Couldn’t <span>find any Job</span> ?
        </h1>
        <h3>
          Upload your CV, we will get back to you once there is a relevant
          opening.
        </h3>
      </div>

      <div className='job-form__container'>
        <div className='job-form__inner-container'>
          <form
            onSubmit={handleJobApplication}
            className='job_application_form'
          >
            <div className='job-form__input-group'>
              <label htmlFor='applicantName'>Your Full Name*</label>
              <input
                type='text'
                id='applicantName'
                onChange={e =>
                  handleInputChange(
                    e,
                    setJobRequestDetails,
                    jobRequestDetails,
                    'name'
                  )
                }
                onPaste={e =>
                  handlePaste(
                    e,
                    setJobRequestDetails,
                    jobRequestDetails,
                    'name'
                  )
                }
                pattern='[A-Za-z\s]+'
                placeholder='Enter Your Name'
                value={jobRequestDetails.name}
                required
              />
            </div>

            <div className='job-form__input-group'>
              <label htmlFor='applicantEmail'>Your E-Mail Address*</label>
              <input
                type='email'
                id='applicantEmail'
                placeholder='Enter Your Mail Address'
                value={jobRequestDetails.email}
                onChange={e =>
                  setJobRequestDetails({
                    ...jobRequestDetails,
                    email: e.target.value
                  })
                }
                required
              />
            </div>

            <div className='job-form__input-group'>
              <label htmlFor='experience'>Total Experience ( In years )*</label>
              <input
                type='number'
                id='experience'
                placeholder='Enter your total years of experience'
                step='any'
                value={jobRequestDetails.experience}
                onChange={e =>
                  setJobRequestDetails({
                    ...jobRequestDetails,
                    experience: e.target.value
                  })
                }
                required
              />
            </div>

            <div className='job-form__input-group'>
              <label htmlFor='currentOrganisation'>Current Organisation*</label>
              <input
                type='text'
                id='currentOrganisation'
                placeholder='Enter Your Current Organisation'
                value={jobRequestDetails.currentOrganisation}
                onChange={e =>
                  handleInputChange(
                    e,
                    setJobRequestDetails,
                    jobRequestDetails,
                    'currentOrganisation'
                  )
                }
                onPaste={e =>
                  handlePaste(
                    e,
                    setJobRequestDetails,
                    jobRequestDetails,
                    'currentOrganisation'
                  )
                }
                pattern='[A-Za-z\s]+'
                required
              />
            </div>

            <div className='job-form__input-group'>
              <label htmlFor='currentDesignation'>Current Designation*</label>
              <input
                type='text'
                id='currentDesignation'
                placeholder='Enter Your Current Designation'
                value={jobRequestDetails.currentDesignation}
                onChange={e =>
                  handleInputChange(
                    e,
                    setJobRequestDetails,
                    jobRequestDetails,
                    'currentDesignation'
                  )
                }
                onPaste={e =>
                  handlePaste(
                    e,
                    setJobRequestDetails,
                    jobRequestDetails,
                    'currentDesignation'
                  )
                }
                pattern='[A-Za-z\s]+'
                required
              />
            </div>
            <div className='job-form__input-group'>
              <label htmlFor='applicantAddress'>Address</label>
              <input
                type='text'
                id='applicantAddress'
                placeholder='Enter Your Address'
                value={jobRequestDetails.address}
                // onChange={e =>
                //   setJobRequestDetails({
                //     ...jobRequestDetails,
                //     address: e.target.value
                //   })
                // }
                onChange={e =>
                  handleInputChange(
                    e,
                    setJobRequestDetails,
                    jobRequestDetails,
                    'address'
                  )
                }
                onPaste={e =>
                  handlePaste(
                    e,
                    setJobRequestDetails,
                    jobRequestDetails,
                    'address'
                  )
                }
                pattern='[A-Za-z\s]+'
                required
              />
            </div>

            <div className='job-form__input-group'>
              <label htmlFor='resume'>
                Upload your Resume( DOC, DOCX and PDF format only)
              </label>
              {/* <input type="file"
                                id='resume'
                                ref={hiddenResumeFile}
                                onChange={(e) => handleResumeUpload(e)}
                                style={{ display: 'none' }}
                            />
                            <button onClick={(e) => handleResume(e)} className='job-form__upload-file-button'>
                                <img src={UploadFile} alt="add file" />
                                <p>Upload Your CV <br />( PDF, DOC, Less Than 2 MB )</p>
                            </button> */}

              <div className='job-form__dropzone-container'>
                <div
                  {...getRootProps({
                    className: 'job-form__upload-file-button'
                  })}
                >
                  <input {...getInputProps()} />
                  <img src={UploadFile} alt='add file' />
                  <h4>
                    Drag and drop to upload the file or <span>Browse</span>
                  </h4>
                  {/* <p>PDF, JPG & PNG format are supported.</p> */}
                </div>

                {/* Show uploaded prescription file, if length files Array is not empty  */}
                {resumeFile.length !== 0 && (
                  <aside className='job-form__selected-file'>
                    <p>
                      <span>Uploaded Resume:</span> {resumeFile[0].name}
                    </p>
                  </aside>
                )}
              </div>
            </div>

            <button className='job-form__submit-button' type='submit'>
              Submit
            </button>
          </form>

          <div className='job-form__side-image'>
            <img
              src='https://medallwebsite.s3.ap-south-1.amazonaws.com/Career/careerImg.jpg'
              alt='finding job'
            />
          </div>
        </div>
      </div>

      {displayResumeUploadLoader && (
        <div className='job-form__resume-uploader-loader'>
          <ColorRing
            visible={true}
            height='80'
            width='80'
            ariaLabel='blocks-loading'
            wrapperStyle={{}}
            wrapperClass='blocks-wrapper'
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
          <br />
          <h3>
            Uploading <span>Resume</span> Please Wait..
          </h3>
        </div>
      )}
    </div>
  )
}

export default JobForm
