export interface ModalData {
  price: string;
  nextDates: string[];
  structure: string;
  delivery: string;
  capacity: string;
  teamBuilding: string;
  contact: string;
  pdfUrl: string;
}

export interface CardContent {
  title: string;
  imageSrc: string;
  altText: string;
  description: string;
  whoFor: string;
  skillLevel: string;
  imageClassName?: string;
  modal: ModalData;
}
