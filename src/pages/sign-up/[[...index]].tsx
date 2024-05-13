import { withLayout } from "@/components/layout";
import { SignUp } from "@clerk/nextjs";

 function Page() {
    return <SignUp path="/sign-up" />;
  }

  

  export default withLayout( Page, {
    header: false,
    footer: false,
    auth: false,
    className: null,
  } );
  