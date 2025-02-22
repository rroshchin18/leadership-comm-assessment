import type { TraitDescription } from '../../types';

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function generateTemplate(result: TraitDescription): string {
  const date = formatDate(new Date());
  
  return `
    <div class="bg-white text-[#1C1A31] p-8 rounded-lg max-w-3xl mx-auto">
      <div class="text-center border-b border-gray-200 pb-6 mb-6">
        <h1 class="text-3xl font-bold mb-2">Communication Style Assessment</h1>
        <p class="text-gray-500">Assessment Date: ${date}</p>
      </div>

      <div class="mb-8 text-center">
        <h2 class="text-2xl font-bold text-[#9263D9] mb-2">
          Your Communication Style: ${result.trait}
        </h2>
        <p class="text-gray-700">${result.description}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="space-y-3">
          <h3 class="font-semibold text-lg text-[#9263D9]">Key Indicators</h3>
          <ul class="space-y-2">
            ${result.indicators.map(item => `
              <li class="flex items-start">
                <span class="text-[#C0E021] mr-2">•</span>
                <span class="text-gray-700">${item}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="space-y-3">
          <h3 class="font-semibold text-lg text-[#9263D9]">Strengths</h3>
          <ul class="space-y-2">
            ${result.strengths.map(item => `
              <li class="flex items-start">
                <span class="text-[#C0E021] mr-2">•</span>
                <span class="text-gray-700">${item}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="space-y-3">
          <h3 class="font-semibold text-lg text-[#9263D9]">Growth Areas</h3>
          <ul class="space-y-2">
            ${result.improvements.map(item => `
              <li class="flex items-start">
                <span class="text-[#C0E021] mr-2">•</span>
                <span class="text-gray-700">${item}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
}