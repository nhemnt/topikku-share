import { withLayout } from "@/components/layout";


function Home() {
   
  
    
    return <h1>Topikku Share</h1>;  
}



export default withLayout(Home, {
    header: false,
    footer: false,
    auth: false,
    className: null,
  } );
