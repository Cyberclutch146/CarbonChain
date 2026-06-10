import { Card, CardContent, CardHeader } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Your Dashboard</h1>
        <p className="text-gray-400">Manage your carbon portfolio and retirement history.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Your Active Credits</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-surface-hover p-4 rounded border border-gray-700 flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-white mb-1">Kilimanjaro Reforestation</div>
                    <Badge variant="success">Verified</Badge>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-xl text-white">150</div>
                    <div className="text-xs text-gray-500">Tonnes available</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Retirement History</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 border-b border-surface-hover last:border-0">
                  <div>
                    <div className="font-semibold text-white">50 Tonnes Retired</div>
                    <div className="text-sm text-gray-400">Kilimanjaro Reforestation</div>
                  </div>
                  <div className="text-right flex flex-col items-end gap-2">
                    <div className="text-sm text-gray-500">June 10, 2026</div>
                    <Button href="/certificate/1" variant="outline" size="sm">View Certificate</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Impact Summary</h2>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="text-sm text-gray-400 mb-1">Total Offset</div>
                <div className="text-3xl font-bold text-accent">50 Tonnes</div>
              </div>
              <div className="border-t border-surface-hover pt-4">
                <div className="text-sm text-gray-400 mb-1">Portfolio Value</div>
                <div className="text-2xl font-bold text-white">$2,775.00</div>
              </div>
              <Button href="/projects" className="w-full mt-6">Discover Projects</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
