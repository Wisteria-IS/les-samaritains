'use client';

import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: 'Ahuntsic-Cartierville', value: 46, color: '#E8A020' },
  { name: 'Situations d\'urgence', value: 27, color: '#4A9B6F' },
  { name: 'Passants', value: 12, color: '#2D6A9F' },
  { name: 'Villeray–Saint-Michel–Parc-Ex.', value: 8, color: '#5BB8D4' },
  { name: 'Montréal-Nord', value: 7, color: '#3B5E3E' },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ payload: typeof data[0] }>;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const item = payload[0].payload;
    return (
      <div className="bg-[#1A1612] text-white px-4 py-3 rounded-xl shadow-lg">
        <p className="font-semibold text-sm text-[#F5F3EF]">{item.name}</p>
        <p className="text-xs text-gray-400 mt-1">{item.value}% des bénéficiaires</p>
      </div>
    );
  }
  return null;
};

export function BeneficiaryChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl shadow-lg p-8 md:p-12"
    >
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
          L'Œuvre des Samaritains
        </p>
        <h3 className="text-2xl md:text-3xl font-serif text-text leading-tight">
          Répartition des bénéficiaires<br />par provenance
        </h3>
      </div>

      {/* Chart and Legend */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Pie Chart */}
        <div className="w-full lg:w-auto flex-shrink-0">
          <ResponsiveContainer width={280} height={280}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={130}
                paddingAngle={2}
                dataKey="value"
                onMouseEnter={(_, index) => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                animationBegin={0}
                animationDuration={900}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    stroke="#FFFFFF"
                    strokeWidth={3}
                    style={{
                      transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)',
                      transformOrigin: 'center',
                      transition: 'transform 0.2s ease-out',
                    }}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex-1 w-full lg:w-auto space-y-3">
          {data.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                flex items-center gap-4 p-3 rounded-xl cursor-pointer
                transition-all duration-200
                ${activeIndex === index ? 'bg-background-alt translate-x-1' : 'hover:bg-background-alt hover:translate-x-1'}
              `}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div
                className="w-4 h-4 rounded-full flex-shrink-0 shadow-md"
                style={{ backgroundColor: item.color }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-text truncate">
                  {item.name}
                </p>
                <p className="text-xs font-semibold text-text-muted">
                  {item.value}%
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-border">
        <p className="text-xs text-text-muted text-right italic">
          Total : 100% des bénéficiaires recensés
        </p>
      </div>
    </motion.div>
  );
}
