import { Card, CardContent, CardHeader } from "../../../components/ui/Card";
import { Badge } from "../../../components/ui/Badge";
import { Button } from "../../../components/ui/Button";

export default function ProjectDetail({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="success">Verified Active</Badge>
          <span className="text-gray-400 text-sm">Project ID: {params.id}</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Kilimanjaro Reforestation</h1>
        <p className="text-xl text-gray-400 max-w-3xl">
          Restoring native biodiversity on the slopes of Mt. Kilimanjaro while sequestering 
          meaningful amounts of carbon.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Live Sequestration Data</h2>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-surface-hover rounded flex items-center justify-center border border-dashed border-gray-600">
                <p className="text-gray-400">Chart Placeholder (Recharts AreaChart)</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Provenance</h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">Data verified by Chainlink Oracle from IoT Node #4029.</p>
              <div className="bg-surface-hover p-4 rounded text-sm text-gray-300 font-mono">
                Latest Reading: 420 kg CO₂<br/>
                Timestamp: 2026-06-10 14:00 UTC<br/>
                Tx Hash: 0x8f...3a1
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-accent/30">
            <CardHeader>
              <h2 className="text-xl font-semibold">Purchase Credits</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between pb-4 border-b border-surface-hover">
                <span className="text-gray-400">Price</span>
                <span className="font-bold text-white">$18.50 / tonne</span>
              </div>
              <div className="flex justify-between pb-4 border-b border-surface-hover">
                <span className="text-gray-400">Available</span>
                <span className="font-bold text-white">4,200 tonnes</span>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Amount to Buy</label>
                <input 
                  type="number" 
                  className="w-full bg-surface-hover border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-accent"
                  placeholder="e.g. 50"
                />
              </div>
              <Button className="w-full">Mint Credits</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
