// This mock dataset represents 30 days of daily CO2 sequestration data from an IoT sensor array
// at the "Kilimanjaro Reforestation" project site.

export const mockIotData = Array.from({ length: 30 }).map((_, i) => {
  const date = new Date(2026, 5, 10); // Start from approx 30 days ago
  date.setDate(date.getDate() - (29 - i));
  
  // Base 1200kg + some randomized fluctuation based on weather/season
  const baseSequestration = 1200;
  const fluctuation = Math.floor(Math.random() * 200) - 50; 
  
  return {
    date: date.toISOString().split('T')[0],
    co2SequesteredKg: baseSequestration + fluctuation,
    sensorId: "NODE-4029",
    status: "Verified",
  };
});

// Calculate total for display purposes
export const totalSequestered = mockIotData.reduce((acc, curr) => acc + curr.co2SequesteredKg, 0);
