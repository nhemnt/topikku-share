import { withLayout } from "@/components/layout";


function Store() {
    return (
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
            Store
        </div>
    );
}



export default withLayout(Store, {});