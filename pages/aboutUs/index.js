import Link from "next/link";
import { Fragment } from "react";

const details = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' }
  ];

function Developer () {
    return (
        <Fragment>
            <h1>Member Information</h1>
            <ul>
                {details.map((member) => 
                (
                    <div key={member.id} >
                        <li><Link href={`/aboutUs/${member.id}`} >{member.name}</Link></li>
                        
                        </div>
                )
                    
                )}
            </ul>
        </Fragment>
    )
}

export default Developer