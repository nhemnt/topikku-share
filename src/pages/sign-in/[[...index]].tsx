import { withLayout } from "@/components/layout";
import { SignIn } from "@clerk/nextjs";

function Page() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <SignIn path="/sign-in" />
        </div>)
}

export default withLayout(Page, {
    header: false,
    footer: false,
    auth: false,
    className: null,
});