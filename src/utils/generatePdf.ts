import type { CardContent } from '../content/shared/types';

const PAGE_WIDTH = 595;
const PAGE_HEIGHT = 842;

const LEFT_MARGIN = 50;
const TOP_MARGIN = 50;

const FONT_SIZE = 11;
const HEADING_SIZE = 16;
const LINE_HEIGHT = 16;

const MAX_CHARS_PER_LINE = 85;

const encoder = new TextEncoder();

const escapePdfText = (text: string) => {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')
    .replace(/€/g, 'EUR');
};

const wrapText = (text: string, maxCharacters: number) => {
  const words = text.split(/\s+/);
  const lines: string[] = [];

  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;

    if (testLine.length <= maxCharacters) {
      currentLine = testLine;
    } else {
      if (currentLine) {
        lines.push(currentLine);
      }

      currentLine = word;
    }
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
};

const createHeadingCommands = (text: string, y: number) => {
  return `BT
/F1 ${HEADING_SIZE} Tf
${LEFT_MARGIN} ${y} Td
(${escapePdfText(text)}) Tj
ET`;
};

const createParagraphCommands = (text: string, y: number) => {
  const lines = wrapText(text, MAX_CHARS_PER_LINE);

  const commands: string[] = [];

  let currentY = y;

  for (const line of lines) {
    commands.push(
      `BT
/F1 ${FONT_SIZE} Tf
${LEFT_MARGIN} ${currentY} Td
(${escapePdfText(line)}) Tj
ET`,
    );

    currentY -= LINE_HEIGHT;
  }

  return {
    commands,
    nextY: currentY,
  };
};

const createPageContent = (content: CardContent) => {
  const commands: string[] = [];

  let y = PAGE_HEIGHT - TOP_MARGIN;

  commands.push(
    `BT
/F1 24 Tf
${LEFT_MARGIN} ${y} Td
(${escapePdfText(content.title)}) Tj
ET`,
  );

  y -= 40;

  commands.push(createHeadingCommands('About', y));

  y -= 24;

  const description = createParagraphCommands(content.description, y);

  commands.push(...description.commands);
  y = description.nextY - 15;

  commands.push(createHeadingCommands("Who it's for", y));

  y -= 24;

  const whoFor = createParagraphCommands(content.whoFor, y);

  commands.push(...whoFor.commands);
  y = whoFor.nextY - 15;

  commands.push(createHeadingCommands('Skill level', y));

  y -= 24;

  const skillLevel = createParagraphCommands(content.skillLevel, y);

  commands.push(...skillLevel.commands);
  y = skillLevel.nextY - 25;

  commands.push(createHeadingCommands('Details', y));

  y -= 30;

  const addSection = (heading: string, text: string) => {
    commands.push(createHeadingCommands(heading, y));

    y -= 22;

    const result = createParagraphCommands(text, y);

    commands.push(...result.commands);

    y = result.nextY - 15;
  };

  addSection('Price', content.modal.price);

  addSection('Next dates', content.modal.nextDates.join(', '));

  addSection('Structure', content.modal.structure);

  addSection('Delivery', content.modal.delivery);

  addSection('Capacity', content.modal.capacity);

  addSection('Team building', content.modal.teamBuilding);

  addSection('Contact', content.modal.contact);

  return commands.join('\n');
};

const createPdf = (content: CardContent) => {
  const pageContent = createPageContent(content);

  const objects = [
    `<<
/Type /Catalog
/Pages 2 0 R
>>`,

    `<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>`,

    `<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}]
/Resources <<
/Font <<
/F1 4 0 R
>>
>>
/Contents 5 0 R
>>`,

    `<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>`,

    `<<
/Length ${encoder.encode(pageContent).length}
>>
stream
${pageContent}
endstream`,
  ];

  let pdf = '%PDF-1.4\n';

  const offsets: number[] = [];

  for (let index = 0; index < objects.length; index++) {
    offsets.push(encoder.encode(pdf).length);

    pdf += `${index + 1} 0 obj\n`;
    pdf += `${objects[index]}\n`;
    pdf += 'endobj\n';
  }

  const xrefOffset = encoder.encode(pdf).length;

  pdf += `xref
0 ${objects.length + 1}
0000000000 65535 f 
`;

  for (const offset of offsets) {
    pdf += `${offset.toString().padStart(10, '0')} 00000 n 
`;
  }

  pdf += `trailer
<<
/Size ${objects.length + 1}
/Root 1 0 R
>>
startxref
${xrefOffset}
%%EOF`;

  return pdf;
};

export const generatePdf = async (content: CardContent) => {
  const pdf = createPdf(content);

  const blob = new Blob([encoder.encode(pdf)], {
    type: 'application/pdf',
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');

  link.href = url;
  link.download = `${content.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')}.pdf`;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);

  await new Promise<void>((resolve) => {
    setTimeout(resolve, 0);
  });
};
