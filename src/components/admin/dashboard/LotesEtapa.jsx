import { Doughnut } from "react-chartjs-2"; 
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function LotesPorEtapa({ data }) {
  const chartData = {
    labels: data.map(item => item.etapa),
    datasets: [
      {
        data: data.map(item => item.lotes),
        backgroundColor: [
          "#22c55e", // Siembra
          "#84cc16", // Crecimiento
          "#facc15", // Cosecha
          "#3b82f6", // Transporte
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 12,
          padding: 16,
        },
      },
    },
    cutout: "65%",
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl">
      <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
        <h2 className="flex items-center font-semibold gap-2 leading-none">Lotes por Etapa del Proceso</h2>
        <p className="text-muted-foreground">
          Distribución actual del ciclo productivo agrícola
        </p>
      </div>

      <div className="px-6 [&:last-child]:pb-6">
          <div className="relative h-70">
            <Doughnut data={chartData} options={options} />
          </div>
      </div>
    </div>
  );
}
