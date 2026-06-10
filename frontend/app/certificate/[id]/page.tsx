import { Card, CardContent } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";

export default function Certificate({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Retirement Certificate</h1>
        <Button variant="outline" size="sm">Download PDF</Button>
      </div>

      <Card className="relative overflow-hidden border-accent/20 bg-gradient-to-b from-surface to-background">
        {/* Decorative Stamp */}
        <div className="absolute -top-10 -right-10 transform rotate-12 opacity-10 pointer-events-none">
          <div className="border-8 border-accent text-accent font-black text-6xl p-4 rounded-lg">
            PERMANENTLY<br/>RETIRED
          </div>
        </div>

        <CardContent className="p-12">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-accent mx-auto flex items-center justify-center font-bold text-background text-3xl mb-6">
              C
            </div>
            <h2 className="text-2xl font-serif text-gray-300 mb-2">Certificate of Carbon Retirement</h2>
            <p className="text-gray-500 text-sm">Certificate ID: {params.id}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <div className="text-sm text-gray-500 mb-1">Retired By</div>
              <div className="font-mono text-white bg-surface-hover p-2 rounded">0x1234...abcd</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Date</div>
              <div className="font-mono text-white bg-surface-hover p-2 rounded">June 10, 2026</div>
            </div>
          </div>

          <div className="text-center bg-surface-hover p-8 rounded-lg border border-gray-700 mb-12">
            <div className="text-sm text-gray-400 mb-2">Amount Retired</div>
            <div className="text-5xl font-black text-accent mb-4">50 Tonnes CO₂</div>
            <div className="text-sm text-gray-400 mb-1">From Project</div>
            <div className="text-lg font-bold text-white">Kilimanjaro Reforestation</div>
          </div>

          <div className="mb-12">
            <div className="text-sm text-gray-500 mb-2">Retirement Reason</div>
            <div className="text-gray-300 italic border-l-4 border-accent pl-4 py-2 bg-surface/50">
              &quot;Q4 2026 Corporate Travel Emissions Offset&quot;
            </div>
          </div>

          <div className="flex justify-center gap-4 border-t border-surface-hover pt-8">
            <Button variant="secondary" size="sm">Verify Transaction on Basescan</Button>
            <Button variant="secondary" size="sm">View Raw IoT Data</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
