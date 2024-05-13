import { withLayout } from "@/components/layout";


function Custom404() {
    return <h1>404 - Page Not Found</h1>
}



export default withLayout(Custom404, {
    header: false,
    footer: false,
    auth: false,
    className: null,
});