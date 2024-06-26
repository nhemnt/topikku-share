import { withLayout } from "@/components/layout";
import { tasks } from "@/data/table/tasks";
import { columns } from "@/components/custom/components/columns";
import { DataTable } from "@/components/custom/components/data-table";

function Subscriptions() {
  return (
    <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
      <DataTable data={tasks} columns={columns} />
    </div>
  );
}



export default withLayout(Subscriptions, {});