

const Test =  async () => {
  
 async function create() {
    'use server'
    const res = await fetch('http://localhost:3000/api/test');
    const data = await res.json();
    return data
  }

 const usaerData : {id:number, name: string}[] = await create();
 
  console.log(usaerData)

  if (!usaerData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <span className="text-[100px]">{usaerData[0]?.name}</span>
      {/* <Image fill src='/cover.png' alt='amr' /> */}
    </div>
  );
};

// Fetch data on the server side
// export async function getServerSideProps() {
//   try {
//     const res = await fetch('http://localhost:3001/api/test');
//     const data = await res.json();

//     return {
//       props: {
//         data,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return {
//       props: {
//         data: null,
//       },
//     };
//   }
// }

export default Test; 
