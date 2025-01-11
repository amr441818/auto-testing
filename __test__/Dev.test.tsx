import {render, screen, waitFor} from '@testing-library/react';
import Test from '@/app/components/Test';
import {server} from '../mocks/server'
import { http, HttpResponse } from 'msw';


// import { act } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

// describe('Home', () => {
//   it('renders a heading', async () => {
//     await act(async () => {
//       render(await Home());
//     });
//   });
// });

jest.mock('next/image',()=>({
    __esModule: true,
    default: ({alt, src}: {alt:string, src:string}) => <img alt={alt} src={src}/>,
}))
// jest.mock("next/image", () => ({
//     __esModule: true,
//     default: ({ alt, src }: { alt: string; src: string }) => (
//       <img alt={alt} src={src} /> 
//     ),
//   }));

describe('test apis', () => { 
    it('test with Mena', async ()=>{ 
       
        // render( <Test />);

        // http.get("http://localhost:3000/api/test", () => {
        //     console.log('amr')
        //     return HttpResponse.json([{id:1, name: "amr"}]);
        
        //   }),
        await act(async () => {
            
            render(  <Test/>);
          });
    
        
        
        // await waitFor(()=>{
            expect( await screen.findByText('amr')).toBeInTheDocument();

    // },{timeout:3000})
 
        expect(1).toBe(1)
        //    expect(screen.getByAltText('amr')).toHaveAttribute('src', '/prop.png')
       
    })
    // it('test with amrr', async ()=>{ 
    //     // server.use( http.get("/api/test", () => {
    //     //     console.log('runnuing from test')
    //     //     return HttpResponse.json([{id:1, name: "amrr"}]);
        
    //     //   }),)
    //     render( <Test  />);
    
    
    
    //        expect( await screen.findByText('menna')).toBeInTheDocument();
    //     expect(1).toBe(1)
    //     //    expect(screen.getByAltText('amr')).toHaveAttribute('src', '/prop.png')
       
    // })
    // it('test with data null', async ()=>{ 
    //     server.use( http.get("/api/test", () => {
    //         console.log('runnuing from test')
    //         return HttpResponse.json(null);
        
    //       }),)
    //     render( <Test />);
    
    
    
    //        expect( await screen.findByText('Loading...')).toBeInTheDocument();
    //     expect(1).toBe(1)
    //     //    expect(screen.getByAltText('amr')).toHaveAttribute('src', '/prop.png')
       
    // })

 })
