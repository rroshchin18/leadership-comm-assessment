import html2canvas from 'html2canvas';
import { generateTemplate } from './template';
import type { TraitDescription } from '../../types';

async function createExportContainer(result: TraitDescription): Promise<HTMLDivElement> {
  const container = document.createElement('div');
  container.style.position = 'absolute';
  container.style.left = '-9999px';
  container.innerHTML = generateTemplate(result);
  document.body.appendChild(container);
  
  // Wait for any web fonts to load
  await document.fonts.ready;
  
  return container;
}

export async function exportAsPNG(result: TraitDescription, fileName: string) {
  const container = await createExportContainer(result);
  
  try {
    const canvas = await html2canvas(container, {
      scale: 2,
      backgroundColor: '#ffffff',
      logging: false
    });

    const link = document.createElement('a');
    link.download = `${fileName}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  } finally {
    document.body.removeChild(container);
  }
}