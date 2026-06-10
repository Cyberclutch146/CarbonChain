import { Card, CardContent, CardHeader } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";

export default function Retire() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Retire Credits</h1>
        <p className="text-gray-400">Permanently burn your credits to claim the environmental offset.</p>
      </div>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Your Available Credits</h2>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-surface-hover p-4 rounded border border-gray-700 flex justify-between items-center">
            <div>
              <div className="font-semibold text-white">Kilimanjaro Reforestation</div>
              <div className="text-sm text-gray-400">Project ID: 1</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-accent">150 Tonnes</div>
              <div className="text-xs text-gray-500">Available to retire</div>
            </div>
          </div>

          <form className="space-y-4 pt-4 border-t border-surface-hover">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Amount to Retire</label>
              <input 
                type="number" 
                className="w-full bg-surface-hover border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-accent"
                placeholder="e.g. 50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Retirement Reason</label>
              <textarea 
                className="w-full bg-surface-hover border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-accent h-24"
                placeholder="e.g. Q4 2026 Corporate Travel Emissions Offset"
              ></textarea>
            </div>
            <Button className="w-full" variant="primary">Burn Tokens & Generate Certificate</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
