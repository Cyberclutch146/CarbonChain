import { Card, CardContent } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Verified Projects</h1>
          <p className="text-gray-400">Browse and purchase oracle-verified carbon credits.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder Project Card */}
        <Card className="hover:border-accent/50 transition-colors cursor-pointer flex flex-col h-full">
          <div className="h-48 bg-surface-hover w-full flex items-center justify-center">
            <span className="text-gray-500">Image Placeholder</span>
          </div>
          <CardContent className="flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-4">
              <Badge variant="success">Verified</Badge>
              <span className="text-sm text-gray-400">Tanzania</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Kilimanjaro Reforestation</h3>
            <p className="text-gray-400 text-sm mb-6 flex-grow">
              Large-scale afforestation project restoring native biodiversity and absorbing CO₂.
            </p>
            <div className="flex justify-between items-center pt-4 border-t border-surface-hover">
              <div>
                <div className="text-xs text-gray-500">Price per tonne</div>
                <div className="font-semibold text-white">$18.50</div>
              </div>
              <Button href="/projects/1" variant="secondary" size="sm">View Details</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
