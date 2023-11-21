import { useRouter } from "next/router";




function DeveloperInformation () {
    const details = [
        { id: 1, name: 'Yash', role: 'Senior Developer' },
        { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
        { id: 3, name: 'Suresh', role: 'Frontend Developer' }
      ];
      const router = useRouter();
  const { developerId } = router.query;
   let newName='';
   let newRole='';

   
  if (developerId) {
    // Convert newsId to a number because it's a string
    const id = parseInt(developerId);
    // Find the corresponding detail using the id
    const detail = details.find((item) => item.id === id);
    if (detail) {
      newName = detail.name;
      newRole = detail.role;
    } else {
      return <h1>Developer not found.</h1>;
    }
}

    return (
        <div>
      <h1>Developer Details</h1>
      <p>Name: {newName}</p>
      <p>Role: {newRole}</p>
    </div>
    )
    
}

export default DeveloperInformation