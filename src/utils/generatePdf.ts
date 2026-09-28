import type { CardContent } from '../content/shared/types';

const PAGE_WIDTH = 595;
const PAGE_HEIGHT = 842;

const LEFT_MARGIN = 50;
const TOP_MARGIN = 50;

const TITLE_SIZE = 24;
const AUTHOR_SIZE = 13;
const HEADING_SIZE = 13;
const FONT_SIZE = 11;

const TITLE_SPACING = 32;
const AUTHOR_SPACING = 24;
const HEADING_SPACING = 18;
const SECTION_SPACING = 20;
const LINE_HEIGHT = 16;
const CONTACT_SPACING = 8;

const MAX_CHARS_PER_LINE = 85;

const RED = '#f20732';
const BLACK = '#000000';

const CONTACT_URL = 'https://sesh.love/contact';
const CONTACT_DISPLAY_URL = 'sesh.love/contact';

const encoder = new TextEncoder();

const hexToRgb = (hex: string) => {
  const cleanHex = hex.replace('#', '');

  return {
    r: parseInt(cleanHex.slice(0, 2), 16) / 255,
    g: parseInt(cleanHex.slice(2, 4), 16) / 255,
    b: parseInt(cleanHex.slice(4, 6), 16) / 255,
  };
};

const createColorCommand = (hex: string) => {
  const { r, g, b } = hexToRgb(hex);

  return `${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)} rg`;
};

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

const createTextCommand = (
  text: string,
  x: number,
  y: number,
  fontSize: number,
  color = BLACK,
) => {
  return `BT
/F1 ${fontSize} Tf
${createColorCommand(color)}
${x} ${y} Td
(${escapePdfText(text)}) Tj
ET`;
};

const createHeadingCommands = (text: string, y: number) => {
  return createTextCommand(text, LEFT_MARGIN, y, HEADING_SIZE, RED);
};

const createParagraphCommands = (text: string, y: number) => {
  const lines = wrapText(text, MAX_CHARS_PER_LINE);

  const commands: string[] = [];

  let currentY = y;

  for (const line of lines) {
    commands.push(
      createTextCommand(line, LEFT_MARGIN, currentY, FONT_SIZE, BLACK),
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

  let contactUrlY = 0;

  /*
   * Title
   */

  commands.push(
    createTextCommand(content.title, LEFT_MARGIN, y, TITLE_SIZE, BLACK),
  );

  y -= TITLE_SPACING;

  /*
   * Author
   */

  commands.push(createTextCommand('by Sesh', LEFT_MARGIN, y, AUTHOR_SIZE, RED));

  y -= AUTHOR_SPACING;

  /*
   * Description
   */

  const description = createParagraphCommands(content.description, y);

  commands.push(...description.commands);

  y = description.nextY - SECTION_SPACING;

  /*
   * Who it's for
   */

  commands.push(createHeadingCommands("Who it's for", y));

  y -= HEADING_SPACING;

  const whoFor = createParagraphCommands(content.whoFor, y);

  commands.push(...whoFor.commands);

  y = whoFor.nextY - SECTION_SPACING;

  /*
   * Skill level
   */

  commands.push(createHeadingCommands('Skill level', y));

  y -= HEADING_SPACING;

  const skillLevel = createParagraphCommands(content.skillLevel, y);

  commands.push(...skillLevel.commands);

  y = skillLevel.nextY - SECTION_SPACING;

  /*
   * Details
   */

  const addSection = (heading: string, text: string) => {
    commands.push(createHeadingCommands(heading, y));

    y -= HEADING_SPACING;

    const result = createParagraphCommands(text, y);

    commands.push(...result.commands);

    y = result.nextY - SECTION_SPACING;
  };

  addSection('Price', content.modal.price);

  addSection('Next dates', content.modal.nextDates.join(', '));

  addSection('Structure', content.modal.structure);

  addSection('Delivery', content.modal.delivery);

  addSection('Capacity', content.modal.capacity);

  addSection('Team building', content.modal.teamBuilding);

  /*
   * Contact to book
   */

  commands.push(createHeadingCommands('Contact to book', y));

  y -= HEADING_SPACING;

  /*
   * Email
   */

  commands.push(
    createTextCommand(
      content.modal.contact.email,
      LEFT_MARGIN,
      y,
      FONT_SIZE,
      BLACK,
    ),
  );

  /*
   * Or
   */

  y -= LINE_HEIGHT + CONTACT_SPACING;

  commands.push(createTextCommand('or', LEFT_MARGIN, y, FONT_SIZE, BLACK));

  /*
   * Contact form URL
   */

  y -= LINE_HEIGHT + CONTACT_SPACING;

  contactUrlY = y;

  commands.push(
    createTextCommand(
      CONTACT_DISPLAY_URL,
      LEFT_MARGIN,
      contactUrlY,
      FONT_SIZE,
      BLACK,
    ),
  );

  return {
    content: commands.join('\n'),
    contactUrlY,
  };
};

const createPdf = (content: CardContent) => {
  const pageContent = createPageContent(content);

  /*
   * Approximate the width of the displayed URL in Helvetica 11pt.
   * This is used only for the clickable annotation rectangle.
   */

  const contactUrlWidth = CONTACT_DISPLAY_URL.length * 5.5;
  const contactUrlHeight = FONT_SIZE + 4;

  const annotation = `<<
/Type /Annot
/Subtype /Link
/Rect [
  ${LEFT_MARGIN}
  ${pageContent.contactUrlY - 3}
  ${LEFT_MARGIN + contactUrlWidth}
  ${pageContent.contactUrlY + contactUrlHeight}
]
/Border [0 0 0]
/A <<
  /Type /Action
  /S /URI
  /URI (${CONTACT_URL})
>>
>>`;

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
/Annots [6 0 R]
>>`,

    `<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>`,

    `<<
/Length ${encoder.encode(pageContent.content).length}
>>
stream
${pageContent.content}
endstream`,

    annotation,
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
