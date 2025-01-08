import React, { useState, useCallback } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { Dna } from 'react-loader-spinner'

import { useDropzone } from 'react-dropzone';

import API from '../api';

import '../styles/Prescription.scss'

// importing child component 
import UploadedFile from '../components/Prescription/UploadedFile';


// import icons 
import Upload from '../assets/icons/cloud-upload.png'
import File from '../assets/icons/file.svg'
import Trash from '../assets/icons/trash.svg'
import Scans from '../components/MRI/Scans';

const Prescription = () => {
    // Setting Form values
    const [prescriptionFormDetails, setPrescriptionFormDetails] = useState({ prescriptionFile: [], prescriptionUploaderName: '', mobile: '', pincode: '' });

    // Form submission checker 
    const [isFormSubmitted, setIsFormSumbmitted] = useState(false)

    // Storing uploaded prescription file in "prescriptionFile" State 
    const [prescriptionFile, setPrescriptionFile] = useState([]);

    const [isDisplayLoader, setIsDisplayLoader] = useState(false);
    const [isInputFocused, setIsInputFocused] = useState(false);

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const onDrop = useCallback(acceptedFiles => {
        setPrescriptionFile([...acceptedFiles]);
        // Setting prescription file
        setPrescriptionFormDetails({ ...prescriptionFormDetails, prescriptionFile: [...acceptedFiles] })
    }, [prescriptionFormDetails])

    // useDropone Hook from react-dropzone library
    let { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        onDrop,
    })

    const errorFileUpload = () => toast("❗ File upload fail, Please try smaller size file", { draggable: true });
    const errorGettingFileUrl = () => toast("❗ Try Again, Something went wrong.", { draggable: true });
    const notifyFileUpload = () => toast("📁 Upload Prescription File", { draggable: true });

    const files = prescriptionFile.map(file => (
        <li key={file.path} className='prescription__file-details-box'>
            <div className='prescription__file-details'>
                <img src={File} alt="file" />
                <div className='prescription__file-info'>
                    <h5>{file.path}</h5>
                    <p>{file.size / 1000}   KB</p>
                </div>
            </div>
            <img className='prescription__file-remove-btn' src={Trash} alt="trash" onClick={() => setPrescriptionFile([])} />
        </li>
    ));
    // const hiddenFileInput = useRef(null);

    // const handlePrescription = e => {
    //     hiddenFileInput.current.click();
    // };

    // const handlePrescriptionUpload = async (e) => {
    //     const prescriptionFile = e.target.files[0];
    //     console.log(prescriptionFile, 'Prescription File');
    //     await axios.post('http://localhost:5000/home/presciption', { prescriptionFile }, {
    //         headers: {
    //             'Content-Type': prescriptionFile.type
    //         }
    //     })
    //         .then(function (response) {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // };

    // POST form data to database
    const handlePrescriptionFormSubmit = async (e) => {
        e.preventDefault();
        setIsDisplayLoader(true);

        if (files.length === 0) {
            notifyFileUpload();
            setIsDisplayLoader(false);
        } else {
            setIsDisplayLoader(true);
            console.log(prescriptionFormDetails);

            await API.post('/api/file-upload/upload-single-file', { files: prescriptionFormDetails.prescriptionFile[0] }, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then(async (res) => {
                window.scrollTo(0, 0);
                console.log(res, "upload file response");

                if (res.statusText === "OK") {
                    // Uploading Prescription file to database
                    const fileURL = res.data.url
                    await API.post('/api/prescriptions', { name: prescriptionFormDetails.prescriptionUploaderName, mobileNumber: prescriptionFormDetails.mobile, fileUrl: fileURL, pincode: prescriptionFormDetails.pincode })
                        .then(res => {
                            if (res.data.status === "success") {
                                console.log(res);
                                triggerLeadSquareAPI();
                            } else {
                                errorGettingFileUrl();
                                setIsDisplayLoader(false);
                            }
                        })
                        .catch(err => {
                            console.log(err);
                            errorFileUpload();
                            setIsDisplayLoader(false);
                        });

                } else {
                    setIsDisplayLoader(false);
                    errorGettingFileUrl();
                }
            }).catch(err => {
                console.log(err, "Error Uploading Prescription file");
                errorFileUpload();
                setIsDisplayLoader(false);
            })

            async function triggerLeadSquareAPI() {
                const url = 'https://files-in21.leadsquared.com/File/Upload';
                const fileType = '7';
                const accessKey = 'u$r66791bf41480f4111abdee73031bab5d';
                const secretKey = 'e990c51e929a92c8dc9dbd5073548da11405c5ae';
                const fileStorageType = '0';
                const enableResize = 'false';
                const id = '206';
                const schemaName = 'mx_CustomObject_111';
                const entitySchemaName = 'mx_Custom_4';
                const entity = '1';
                const storageVersion = '0';

                const formData = new FormData();
                formData.append('FileType', fileType);
                formData.append('uploadFiles', prescriptionFormDetails.prescriptionFile[0]);
                formData.append('AccessKey', accessKey);
                formData.append('SecretKey', secretKey);
                formData.append('FileStorageType', fileStorageType);
                formData.append('EnableResize', enableResize);
                formData.append('Id', id);
                formData.append('SchemaName', schemaName);
                formData.append('EntitySchemaName', entitySchemaName);
                formData.append('Entity', entity);
                formData.append('StorageVersion', storageVersion);

                axios.post(url, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }).then(response => {
                    console.log(response.data, "lead square API");

                    if (response.data.Status === "Success") {
                        sentDetailsToLeadSquare(response.data.uploadedFile);
                    } else {
                        errorFileUpload();
                        setIsDisplayLoader(false);
                    }
                }).catch(error => {
                    errorFileUpload();
                    setIsDisplayLoader(false);
                    console.error(error);
                });
            };


            async function sentDetailsToLeadSquare(fileLink) {
                const apiUrl = 'https://api-in21.leadsquared.com/v2/ProspectActivity.svc/CreateCustom';
                function getCurrentUTCDateTime() {
                    const now = new Date();
                    const year = now.getUTCFullYear();
                    const month = String(now.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
                    const day = String(now.getUTCDate()).padStart(2, '0');
                    const hours = String(now.getUTCHours()).padStart(2, '0');
                    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
                    const seconds = String(now.getUTCSeconds()).padStart(2, '0');

                    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
                }

                const requestBody = {
                    "LeadDetails": [
                        {
                            "Attribute": "FirstName",
                            "Value": prescriptionFormDetails.prescriptionUploaderName
                        },
                        {
                            "Attribute": "Phone",
                            "Value": `+91-${prescriptionFormDetails.mobile}`
                        },
                        {
                            "Attribute": "mx_Zip",
                            "Value": prescriptionFormDetails.pincode
                        },
                        {
                            "Attribute": "SearchBy",
                            "Value": "Phone"
                        }
                    ],
                    "Activity": {
                        "ActivityEvent": 206,
                        "ActivityNote": "Note for the activity",
                        "ActivityDateTime": getCurrentUTCDateTime(),
                        "Fields": [
                            {
                                "SchemaName": "mx_Custom_4",
                                "Value": "",
                                "Fields": [
                                    {
                                        "SchemaName": "mx_CustomObject_111",
                                        "Value": fileLink,
                                    },
                                    {
                                        SchemaName: "mx_Custom_5",
                                        Value: searchParams?.get('utm_campaign') ? searchParams?.get('utm_campaign') : "Medall Shop",
                                    },
                                    {
                                        SchemaName: "mx_Custom_6",
                                        Value: searchParams?.get('utm_source') ? searchParams?.get('utm_source') : "organic",
                                    },
                                    {
                                        SchemaName: "mx_Custom_7",
                                        Value: searchParams?.get('utm_medium') ? searchParams?.get('utm_medium') : "Ecommerce Website",
                                    },
                                    {
                                        SchemaName: "mx_Custom_8",
                                        Value: "Prescription Form"
                                    }
                                ]
                            }
                        ]
                    }
                };

                const accessKey = 'u$r66791bf41480f4111abdee73031bab5d';
                const secretKey = 'e990c51e929a92c8dc9dbd5073548da11405c5ae';

                const headers = {
                    'Content-Type': 'application/json',
                };

                await axios.post(`${apiUrl}?accessKey=${accessKey}&secretKey=${secretKey}`, requestBody, { headers }).then(res => {
                    console.log(res, "URL sent to leadsquare");
                    if (res.data.Status === "Success") {
                        setIsDisplayLoader(false);
                        setIsFormSumbmitted(true);
                    } else {
                        errorFileUpload();
                        setIsDisplayLoader(false);
                    }
                }).catch(err => {
                    errorFileUpload();
                    setIsDisplayLoader(false);
                    console.log(err, "Error! failed to sent url to leadsquare");
                });
            }
        }
    }

    const handlePhoneNumber = (e) => {
        // Remove non-numeric characters
        const sanitizedValue = e.target.value.replace(/\D/g, '');
        // Limit the length to 10 digits
        const limitedValue = sanitizedValue.slice(0, 10);
        // Update the state
        setPrescriptionFormDetails({ ...prescriptionFormDetails, mobile: limitedValue });
    }

    return (
        <>
            {isDisplayLoader &&
                <div className="prescription-loader">
                    <div className="prescription-loader__container">
                        <Dna
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="dna-loading"
                            wrapperStyle={{}}
                            wrapperClass="dna-wrapper"
                        />
                        Processing.....
                    </div>
                </div>
            }
            {
                isFormSubmitted ? <><UploadedFile /> <Scans scanType="MRI" /> </> :

                    <div className='prescription'>
                        {/* <input type="file"
                ref={hiddenFileInput}
                onChange={(e) => handlePrescriptionUpload(e)}
                style={{ display: 'none' }}
            />
            <button onClick={(e) => handlePrescription(e)}>
                Upload Prescription
            </button> */}
                        <div className="prescription__header">
                            <h2>Upload prescription</h2>
                            <p>Save time, ensure privacy, and enjoy 24/7 accessibility with our Streamlined process.</p>
                        </div>
                        <form className="prescription__container" onSubmit={handlePrescriptionFormSubmit}>
                            <div className="prescription__dropzone-container">
                                <div {...getRootProps({ className: 'prescription__dropzone' })}>
                                    <input {...getInputProps()} name="prescriptionFile" />
                                    <img src={Upload} alt="cloud upload" />
                                    <h4>Drag and drop to upload the file or  <span>Browse</span></h4>
                                    <p>PDF, JPG & PNG format are supported.</p>
                                </div>

                                {/* Show uploaded prescription file, if length files Array is not empty  */}
                                {
                                    files.length !== 0 && <aside className='prescription__selected-file'>
                                        <ul>{files}</ul>
                                    </aside>
                                }
                            </div>

                            <div className="prescription__form">
                                <div>
                                    <h3>Enter the Below details</h3>

                                    <div className="prescription__input-group">
                                        <label htmlFor="prescription__uploader-name">NAME*</label>
                                        <input type="text" id='prescription__uploader-name' placeholder='Please Provide Your Name' name="prescriptionUploaderName" value={prescriptionFormDetails.prescriptionUploaderName} onChange={(e) => setPrescriptionFormDetails({ ...prescriptionFormDetails, prescriptionUploaderName: e.target.value })} required pattern="[A-Za-z\s]+" />
                                    </div>

                                    <div className="prescription__input-group">
                                        <label htmlFor="prescription__mobile-number">Mobile Number*</label>
                                        <input type="text" id='prescription__mobile-number' pattern="[0-9]{10}" maxLength={10} onFocus={handleInputFocus} placeholder='Enter Your Mobile Number' name="mobileNumber" value={prescriptionFormDetails.mobile} onChange={(e) => setPrescriptionFormDetails({ ...prescriptionFormDetails, mobile: e.target.value })} required />
                                    </div>
                                    {prescriptionFormDetails.mobile.length >= 1 ? <> {isInputFocused && !/^\d{10}$/.test(prescriptionFormDetails.mobile) && (
                                        <p style={{ marginLeft: '6px', marginTop: '-9px', marginBottom: "5px", color: '#F23A3A', fontSize: "12px" }}>
                                            Enter valid  number
                                        </p>
                                    )}</> : ""}

                                    <div className="prescription__input-group">
                                        <label htmlFor="prescription__mobile-number">Pincode</label>
                                        <input type="text" id='prescription__mobile-number' pattern="[0-9]{6}" maxLength={6} placeholder='Enter Your Area Pincode' name="pincode" value={prescriptionFormDetails.pincode} onChange={(e) => setPrescriptionFormDetails({ ...prescriptionFormDetails, pincode: e.target.value })} required />
                                    </div>
                                    {prescriptionFormDetails.pincode.length >= 1 ? <> {isInputFocused && !/^\d{6}$/.test(prescriptionFormDetails.pincode) && (
                                        <p style={{ marginLeft: '6px', marginTop: '-9px', marginBottom: "5px", color: '#F23A3A', fontSize: "12px" }}>
                                            Enter valid  pincode
                                        </p>
                                    )}</> : ""}
                                </div>

                                <button type='submit' className='prescription__submit-btn'>Submit</button>
                            </div>
                        </form>
                    </div>
            }
        </>

    )
}

export default Prescription