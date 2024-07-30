import React, { useState } from 'react';
import { gapi } from 'gapi-script';

const CLIENT_ID = 'avi-820@wallp-a8e50.iam.gserviceaccount.com';
const API_KEY = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC23HUYjrJg6KbE
zf1Lj2xljCYkIpKXnEVsCTcn1+hqMIYf6YGZgTcohwi41SaxthJL9NbYjGnRy67b
88PquwjGbASOiID0vEaFJIr2oRUDa6KCn3iT9Md0MmQ40y1ytJiD0z6fNnDi3PmN
OOw2YI2SJrTRNbDBz/KQE8uMIsigenVwPmK35BF+sOm/43qMn9Otm8/q7wD/TjFi
cdFrsfXDy6bInXeQfTXGI6+qHf0AAs5H8jijjSbkXUGYGbgBxL4wGZHBZxcddjMM
RhnIz4DScxLvpHl8pDcRFKNEUBFpS//f3CvnxpsiEjMTlM7OGhtdhr10tlsEVZ5z
Aps/lOk1AgMBAAECggEAA1eKnVEIUgyWdazVFwMvRjjWPp1SJAqzWxrdAvGnef9a
iC1GlNVfenJjVqtwmllbQr+eCJWiXnb0QmlVWI4kBipVt/wnLTHesRK+pmzBu08F
iJEdDUkxNv6vxbkYUMsbqXccIyFF1WOX/PyAFqtTkwr5jYRHb3dbNcZi1zQQihxC
3NR2NgUTm75dkHJrgYoYvCoiMfQ1FGdy0W4iG/4o3MdyPUErRNNrFHPyXccj5lRg
S2lgnZ1MFPA2uWqo/MBMBJ/8f55mZ5C9rs0yoBss/xSMW9SJ/DxW6Uw/ZleSiY2S
fN3FqQ8KVIMDH1a/4qc/tB7zDb9Evvg0gabBwv1+YQKBgQD2iYefJw9z6J7fVgMl
zyeZNrSEqPICMoi8FdpiwDk/GWpqOHNrfrAMArMHH4f0CcEF29UYBngTgfdsBzQe
ImApmxAJLslmXyVvzsvgJWnyc7rvt0Uwu4c1QeekwEos1nxbNQheXcjfQXRfIHLW
GQ39muytUo6zfAnrSqzelRhgIQKBgQC94T9wKPKeKLKYljrAJnHPpgGqq9xkx9ly
wqL3Kl9BtnF5+AFTZ4WwcYVShNBYsPK6aidGICxiXLlemFlOH3POCjdMtGhb2E53
JEhHyWCC7xZM7KAVxgNhiGVTB0L+P4nMAewAqFoXPNKyzKJuY3qluQ7U1WivOrh+
4HbHCF42lQKBgQDb9r87n9UovI8rgwmR7W9OQ0Hy7u3mSgI3lmPgIdOx2dJZbX6F
lWYrgSkMnPRnJ2DCAm7xXaw684W3LAIzNMaJuKEpIEZvgUrcpCzBE4Cg4uMSSHmC
Tn8HZILyOuKzeLdBhWKvF4xGrZbP3Rq4rWgPMvAigHtz5qLO/TSZ73rtIQKBgEv4
TDZm27N12wb7zGPGvfBzneUYP+S+pPyqbSNw+43CHiLLnFQvbijLMqlyZB2oJmV5
RV9kTf3I1Y3IbKq6IM5F/hwdbkeZAsPea2D1bDzWxdhfMCmmAQJL3SZcGGy7JTnP
ZwpYUTtM5YwOHcsG2DJoGUwEWo8Jcnmo+zzk1zUFAoGAaXHnyTDZPOTkBC/K55BY
616agT8yj+7X/+oPsmLmKzNgPd+iSGX/NmE/cRcvWoBCUMUPytQJMd6ppi+FZF18
eJ3Qy4KQZXuKPan1BCn7Rc3XLOc2r+9muH1LBreHIXehxxeeb1+XAiUiDhLOyNQ+
Y+mu7liV3BZqTrXuL/Z2gOs=
-----END PRIVATE KEY-----`;
const SCOPES = 'https://www.googleapis.com/auth/drive.file';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];
const FOLDER_ID = '1pEoGZdc6Gx-mAk4KEvGnTKTrbWcGzkuS';

function UploadForm({ eventName }) {
    const [files, setFiles] = useState([]);
    const [teacherName, setTeacherName] = useState("")

    const handleFileChange = (e) => {
        setFiles(e.target.files);
    };

    const handleUpload = async () => {
        if (window.gapi) {
            window.gapi.load('client:auth2', () => {
                window.gapi.client.init({
                    apiKey: API_KEY,
                    clientId: CLIENT_ID,
                    discoveryDocs: DISCOVERY_DOCS,
                    scope: SCOPES,
                }).then(() => {
                    const authInstance = window.gapi.auth2.getAuthInstance();
                    if (!authInstance.isSignedIn.get()) {
                        authInstance.signIn().then(uploadFiles);
                    } else {
                        uploadFiles();
                    }
                });
            });
        }
    };

    const uploadFiles = async () => {
        if(teacherName.length > 0){
            alert("Please enter a valid name.")
        }
        const authInstance = window.gapi.auth2.getAuthInstance();
        if (authInstance.isSignedIn.get()) {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const metadata = {
                    name: file.name + eventName + teacherName,
                    mimeType: file.type,
                    parents: [FOLDER_ID],
                };
                const form = new FormData();
                form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
                form.append('file', file);

                const accessToken = authInstance.currentUser.get().getAuthResponse().access_token;
                const response = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
                    method: 'POST',
                    headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }),
                    body: form,
                });

                const data = await response.json();
                console.log('Uploaded file:', data);
            }
        }
    };
    return (
        <div className='event-form-container'>
            <div className='event-form'>
                <h1>Upload Your Submission</h1>
                <div className='d-flex flex-column'>
                    <label className='mt-3'>Teacher's Name</label>
                    <input className='form-control my-2' placeholder={`Enter your name`} id='teacher-name' onChange={(e) => {
                        e.preventDefault()
                        setTeacherName(e.target.value)
                    }} />
                    <div>
                        <label className='mt-3'>Event Name: </label>
                        <select className='my-2 form-control' value={eventName}>
                            <option value={"Concurso De Pinture"}>Concurso De Pinture</option>
                            <option value={"Tip Tap Toe"}>Tip Tap Toe</option>
                            <option value={"गीत स्पर्धा"}>गीत स्पर्धा</option>
                            <option value={"काव्य स्पर्धा"}>काव्य स्पर्धा</option>
                        </select>
                    </div>
                    <input className='my-3' type="file" multiple onChange={handleFileChange} />
                    <button onClick={handleUpload} className='uploadBtn'>Upload</button>
                </div>
            </div>
        </div>
    );
}

export default UploadForm;
