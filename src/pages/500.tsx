import { withLayout } from "@/components/layout";

function Custom500() {
    return <h1>500 - Server-side error occurred</h1>
}

export default withLayout
(Custom500, {
    header: false,
    footer: false,
    auth: false,
    className: null,
});