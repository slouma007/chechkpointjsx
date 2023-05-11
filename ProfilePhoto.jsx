import React from 'react';
import pic from '../../src/Component/abdesslem.jpg'
const ProfilePhoto = () => {
    return (
        <div>
            <img style={{width:"305px" , height:"300px"  }} src={pic} alt="mypic" />
        </div>
    );
}

export default ProfilePhoto 