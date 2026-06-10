import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-6">
          Verifiable Carbon Removal on the Blockchain
        </h1>
        <p className="text-xl text-gray-400 mb-10">
          Transparent, oracle-verified carbon credits. From IoT sensor to permanent retirement, 
          every tonne of CO₂ is tracked on-chain.
        </p>
        <div className="flex gap-4 justify-center">
          <Button href="/projects" size="lg">Explore Projects</Button>
          <Button href="/retire" variant="outline" size="lg">Retire Credits</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
        <Card>
          <CardContent className="pt-6">
            <div className="text-4xl font-bold text-accent mb-2">42,000</div>
            <div className="text-gray-400 font-medium">Tonnes Sequestered</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-4xl font-bold text-white mb-2">15,300</div>
            <div className="text-gray-400 font-medium">Credits Retired</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-4xl font-bold text-white mb-2">3</div>
            <div className="text-gray-400 font-medium">Active Projects</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
